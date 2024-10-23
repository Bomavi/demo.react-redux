/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from 'react';

interface Opts {
  maxWait?: number;
  leading?: boolean;
  trailing?: boolean;
}

type ReturnFunc<T> = (...args: any[]) => T;
export type DebouncedReturnType<T> = [
  ReturnFunc<T>,
  () => void,
  () => T,
  () => boolean
];

// eslint-disable-next-line @typescript-eslint/ban-types
export function useDebouncedCallback<T extends Function>(
  callback: T,
  wait: number,
  options: Opts = {}
): DebouncedReturnType<T> {
  const func = useRef<T>(callback);
  func.current = callback;

  const result = useRef<T>(callback);
  const timerId = useRef<number | undefined>(undefined);
  const lastArgs = useRef<any | undefined>(undefined);

  const maxWait = useRef<number>(0);
  const lastCallTime = useRef<number>(0);
  const lastInvokeTime = useRef<number>(0);

  const leading = 'leading' in options ? options.leading : false;
  const trailing = 'trailing' in options ? options.trailing : true;
  const maxing = options.maxWait
    ? Math.max(+options.maxWait || 0, wait)
    : maxWait.current;

  wait = +wait || 0;

  const invokeFunc = (time: number): T => {
    const args = lastArgs.current || [];

    lastArgs.current = undefined;
    lastInvokeTime.current = time;
    result.current = func.current.apply(null, args);

    return result.current;
  };

  const remainingWait = useCallback(
    (time: number): number => {
      const timeSinceLastCall = time - lastCallTime.current;
      const timeSinceLastInvoke = time - lastInvokeTime.current;
      const timeWaiting = wait - timeSinceLastCall;

      return maxing
        ? Math.min(timeWaiting, maxWait.current - timeSinceLastInvoke)
        : timeWaiting;
    },
    [maxing, wait]
  );

  const shouldInvoke = useCallback(
    (time: number): boolean => {
      const timeSinceLastCall = time - lastCallTime.current;
      const timeSinceLastInvoke = time - lastInvokeTime.current;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (
        lastCallTime.current === undefined ||
        timeSinceLastCall >= wait ||
        timeSinceLastCall < 0 ||
        (!!maxing && timeSinceLastInvoke >= maxWait.current)
      );
    },
    [maxing, wait]
  );

  const trailingEdge = useCallback(
    (time: number): T => {
      timerId.current = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs.current) {
        return invokeFunc(time);
      }

      lastArgs.current = undefined;

      return result.current;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [trailing]
  );

  const timerExpired = useCallback((): T | void => {
    const time = Date.now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }

    // Restart the timer.
    timerId.current = window.setTimeout(timerExpired, remainingWait(time));
  }, [remainingWait, shouldInvoke, trailingEdge]);

  const leadingEdge = useCallback(
    (time: number): T => {
      // Reset any `maxWait` timer.
      lastInvokeTime.current = time;
      // Start the timer for the trailing edge.
      timerId.current = window.setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result.current;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [leading, timerExpired, wait]
  );

  const cancel = (): void => {
    if (timerId.current !== undefined) {
      clearTimeout(timerId.current);
    }

    lastInvokeTime.current = 0;
    lastCallTime.current = 0;
    lastArgs.current = undefined;
    timerId.current = undefined;
  };

  const flush = (): T => {
    return timerId.current === undefined
      ? result.current
      : trailingEdge(Date.now());
  };

  const pending = (): boolean => {
    return timerId.current !== undefined;
  };

  const debounced = useCallback(
    (...args: any): T => {
      const time = Date.now();
      const isInvoking = shouldInvoke(time);

      lastArgs.current = args;
      lastCallTime.current = time;

      if (isInvoking) {
        if (timerId.current === undefined) {
          return leadingEdge(lastCallTime.current);
        }

        if (maxing) {
          // Handle invocations in a tight loop.
          timerId.current = window.setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime.current);
        }
      }

      if (timerId.current === undefined) {
        timerId.current = window.setTimeout(timerExpired, wait);
      }

      return result.current;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [leadingEdge, maxing, shouldInvoke, timerExpired, wait]
  );

  return [debounced, cancel, flush, pending];
}
