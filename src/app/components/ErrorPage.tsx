import * as React from 'react';
import { useRouteError, Link, isRouteErrorResponse } from 'react-router-dom';

export default function ErrorPage(): React.ReactNode {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Ahem...';
  }

  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl font-extrabold">Oups!</h1>
          <p className="mb-4 text-2xl font-semibold text-gray-900">
            Une erreur est survenue
          </p>
          <p className="mb-4 text-lg font-light text-gray-500">
            {errorMessage}
          </p>
          <Link
            to="/"
            className="px-6 py-2 font-semibold rounded-md bg-natagora text-white hover:bg-natagora/90 hover:shadow"
          >
            Retour
          </Link>
        </div>
      </div>
    </section>
  );
}
