/* eslint-disable @typescript-eslint/no-explicit-any */

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// import { matchMedia } from '@quanterix-ui/core/__mocks__/matchMedia.mock';

jest.mock('systemjs/dist/system.min', () => jest.fn());
jest.mock('systemjs/dist/extras/amd.min', () => jest.fn());

beforeAll(() => {
  // matchMedia.useMediaQuery('');

  const { getComputedStyle } = window;
  window.getComputedStyle = (elem) => getComputedStyle(elem);
});
