import { useEffect } from 'react';

import { useRouteError } from 'react-router-dom';

import Container from '@mui/material/Container';

export default function ErrorPage() {
  const error = useRouteError();

  useEffect(() => {
    console.warn(error);
  }, [error]);

  return (
    <Container maxWidth="sm">
      <p className="prose text-rose-600 prose-xl">
        Whoops... We have an error!
      </p>
    </Container>
  );
}
