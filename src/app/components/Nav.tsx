import * as React from 'react';
import Overlay from '../accessibility/Overlay';
import { NavLink, useLocation } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { usePlecotusContext } from '../../hooks/usePlecotusContext';
import { FormattedMessage, useIntl } from 'react-intl';
import { LOCALE } from '../../locales';

const Nav = (): React.ReactNode => {
  const [open, setOpen] = React.useState(false);

  const intl = useIntl();
  const location = useLocation();
  const { locale, setLocale } = usePlecotusContext();

  const isLocaleActive = (key: string): boolean =>
    locale.toUpperCase() === key.toUpperCase();

  React.useEffect(() => {
    setOpen(false);
  }, [location]);

  const className: (isActive?: boolean) => string = (isActive = false) =>
    `block py-2 px-3 rounded text-natagora ${isActive ? 'text-white bg-natagora' : 'md:hover:bg-gray-100 md:hover:text-natagora'}  focus:outline-none focus:ring-2 focus:ring-natagora/40`;

  return (
    <nav className="bg-gray-50 border-gray-200" role="banner">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="../"
          className="flex items-center space-x-3 relative focus:outline-none focus:ring-2 focus:ring-natagora/40"
        >
          <img
            src="/favicon.ico"
            className="h-8"
            alt={intl.formatMessage({ id: 'appName' })}
            width="32"
            height="32"
            role="none"
          />
          <h1 className="self-center text-2xl font-medium whitespace-nowrap uppercase">
            <FormattedMessage id="appTitle" />
          </h1>
        </NavLink>

        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-natagora/40"
          aria-controls="navbar-default"
          aria-expanded="false"
          aria-label="navigation"
          role="button"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">
            <FormattedMessage id="action.openMenu" />
          </span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          id="navbar-default"
          className={`w-full md:block md:w-auto ${!open ? 'hidden' : ''}`}
          role="navigation"
        >
          <ul className="font-medium flex flex-col p-4 mt-4 md:flex-row md:space-x-4 lg:space-x-8 rtl:space-x-reverse md:p-0 md:mt-0 md:border-0">
            <li className="relative">
              <NavLink
                to="../"
                className={({ isActive }) => className(isActive)}
                title={intl.formatMessage({ id: 'menu.home' })}
              >
                <GoHome role="presentation" size="24" />
                <Overlay>
                  <div className="overlay absolute top-0 inset-x-2/4 bg-gray-200 w-8 text-center text-natagora py-1 px-2 -ml-4 mt-1 rounded">
                    <FormattedMessage id="shortcuts.H" />
                  </div>
                </Overlay>
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to="../quiz"
                className={({ isActive }) => className(isActive)}
                title={intl.formatMessage({ id: 'menu.quiz' })}
              >
                <FormattedMessage id="menu.quiz" />
                <Overlay>
                  <div className="overlay absolute top-0 inset-x-2/4 bg-gray-200 w-8 text-center text-natagora py-1 px-2 -ml-4 mt-1 rounded">
                    <FormattedMessage id="shortcuts.S" />
                  </div>
                </Overlay>
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to="../resources"
                className={({ isActive }) => className(isActive)}
                title={intl.formatMessage({ id: 'menu.resources' })}
              >
                <FormattedMessage id="menu.resources" />

                <Overlay>
                  <div className="overlay absolute top-0 inset-x-2/4 bg-gray-200 w-8 text-center text-natagora py-1 px-2 -ml-4 mt-1 rounded">
                    <FormattedMessage id="shortcuts.1" />
                  </div>
                </Overlay>
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to="../about"
                className={({ isActive }) => className(isActive)}
                title={intl.formatMessage({ id: 'menu.about' })}
              >
                <FormattedMessage id="menu.about" />

                <Overlay>
                  <div className="overlay absolute top-0 inset-x-2/4 bg-gray-200 w-8 text-center text-natagora py-1 px-2 -ml-4 mt-1 rounded">
                    <FormattedMessage id="shortcuts.2" />
                  </div>
                </Overlay>
              </NavLink>
            </li>
            <li className="relative pt-6 md:pt-0">
              <div className="inline-flex">
                <button
                  onClick={() => setLocale && setLocale(LOCALE.FR)}
                  className={`block py-2 px-3 rounded-l focus:outline-none focus:ring-2 focus:ring-natagora/40 ${isLocaleActive(LOCALE.FR) ? 'text-natagora bg-gray-100' : 'text-gray-400 hover:bg-gray-200 hover:text-natagora'}`}
                >
                  {LOCALE.FR.toUpperCase()}
                </button>
                <button
                  onClick={() => setLocale && setLocale(LOCALE.NL)}
                  className={`block py-2 px-3 rounded-r focus:outline-none focus:ring-2 focus:ring-natagora/40 ${isLocaleActive(LOCALE.NL) ? 'text-natagora bg-gray-100' : 'text-gray-400 hover:bg-gray-200 hover:text-natagora'}`}
                >
                  {LOCALE.NL.toUpperCase()}
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
