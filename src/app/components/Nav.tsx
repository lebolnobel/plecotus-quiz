import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (): React.ReactNode => {
  const [open, setOpen] = React.useState(false);

  const className: (isActive: boolean) => string = (isActive) =>
    `block py-2 px-3 rounded text-natagora ${isActive ? 'text-white bg-natagora' : 'md:hover:bg-gray-100 md:hover:text-natagora'}`;

  return (
    <nav className="bg-gray-50 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/assets/favicon.ico" className="h-8" alt="Plecotus quiz" />
          <h1 className="self-center text-2xl font-medium whitespace-nowrap uppercase">
            Plecotus - Natagora
          </h1>
        </NavLink>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Ouvrir le menu</span>
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
          className={`${!open ? 'hidden' : ''} w-full md:block md:w-auto`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => className(isActive)}
                title="Accueil"
              >
                ⌂
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quiz"
                className={({ isActive }) => className(isActive)}
                title="Quiz"
              >
                Quiz
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ressources"
                className={({ isActive }) => className(isActive)}
                title="Ressources"
              >
                Ressources
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => className(isActive)}
                title="À propos"
              >
                À propos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
