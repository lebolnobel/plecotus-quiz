import * as React from 'react';
import Overlay from '../components/accessibility/Overlay';
import { NavLink } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';

const Home = (): React.ReactNode => {
  const intl = useIntl();

  return (
    <div className="mx-auto block" role="main">
      <h2 className="text-slate-500 uppercase">
        <FormattedMessage id="app" />
      </h2>

      <div className="flex pt-10">
        <figure className="flex-none md:w-36 relative" role="none">
          <img
            src="/assets/img/plecotus/logo.svg"
            alt={intl.formatMessage({ id: 'natagora.plecotus' })}
            title={intl.formatMessage({ id: 'natagora.plecotus' })}
            className="absolute inset-0 w-full object-cover"
            loading="lazy"
          />
          <figcaption className="sr-only">
            <FormattedMessage id="natagora.plecotus" />
          </figcaption>
        </figure>
        <div className="flex-auto px-6">
          <div className="flex flex-wrap">
            <h3 className="flex-auto text-2xl font-medium text-slate-900 mb-2 uppercase">
              <FormattedMessage id="home.welcome" />
            </h3>
            <div className="w-full flex-none text-base">
              <FormattedMessage id="home.welcomeParagraph" />
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center">
              <div className="flex-auto">
                <h3 className="flex-auto text-2xl font-medium text-slate-900 mb-2 uppercase">
                  <FormattedMessage id="home.kesako" />
                </h3>
                <p>
                  <FormattedMessage id="home.kesakoParagraph" />
                </p>
              </div>
            </div>
          </div>

          <div className="pb-6 mb-6 border-b border-slate-200"></div>

          <div className="flex space-x-4 text-base font-medium">
            <div className="flex-auto flex space-x-4">
              <NavLink
                className="px-6 py-2 font-semibold rounded-md bg-natagora text-white hover:bg-natagora/90 hover:shadow inline-flex relative focus:outline-none focus:ring-2 focus:ring-natagora/40"
                title={intl.formatMessage({ id: 'action.launch' })}
                to="../quiz"
              >
                <FormattedMessage id="action.launch" />
                <Overlay>
                  <div className="overlay absolute top-0 inset-x-2/4 bg-gray-200 w-8 text-center text-natagora py-1 px-2 -ml-4 mt-1 rounded">
                    <FormattedMessage id="shortcuts.S" />
                  </div>
                </Overlay>
              </NavLink>

              <NavLink
                className="px-6 py-2 inline-flex font-semibold rounded-md border border-slate-200 hover:bg-slate-100 hover:shadow focus:outline-none focus:ring-2 focus:ring-natagora/40"
                title={intl.formatMessage({ id: 'action.learn' })}
                to="../learn"
              >
                <FormattedMessage id="action.learn" />
                <Overlay>
                  <div className="overlay absolute top-0 inset-x-2/4 bg-gray-200 w-8 text-center text-natagora py-1 px-2 -ml-4 mt-1 rounded">
                    <FormattedMessage id="shortcuts.1" />
                  </div>
                </Overlay>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
