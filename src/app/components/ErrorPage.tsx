import * as React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useRouteError, isRouteErrorResponse, NavLink } from 'react-router-dom';

const ErrorPage = (): React.ReactNode => {
  const intl = useIntl();

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
    <section role="main">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl font-extrabold">
            <FormattedMessage id="error.title" />
          </h1>
          <p className="mb-4 text-2xl font-semibold text-gray-900">
            <FormattedMessage id="error.subtitle" />
          </p>
          <p className="mb-4 text-lg font-light text-gray-500">
            {errorMessage}
          </p>
          <NavLink
            to="../"
            title={intl.formatMessage({ id: 'action.back' })}
            className="px-6 py-2 font-semibold rounded-md bg-natagora text-white hover:bg-natagora/90 hover:shadow focus:outline-none focus:ring-2 focus:ring-natagora-100"
          >
            <FormattedMessage id="action.back" />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
