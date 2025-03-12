import * as React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import PaletteCommand from './components/PaletteCommand';
import DebugMode from './components/DebugMode';
import Shortcuts from './components/Shortcuts';
import QuizSettings from './components/QuizSettings';
import { Outlet } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Plecotus = (): React.ReactNode => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  return (
    <>
      <a
        href="#content"
        onClick={(event) => {
          event.preventDefault();
          ref?.current?.focus();
        }}
        className="sr-only focus:not-sr-only h-20 focus:outline-none focus:ring-2 focus:ring-natagora/40"
      >
        <span className="absolute left-0 top-0 z-50 px-6 py-2 font-semibold bg-natagora text-white">
          <FormattedMessage id="menu.skipToContent" />
        </span>
      </a>

      <Nav />

      <main className="text-base font-anek flex flex-col items-center">
        <div className="md:py-6 w-full md:w-3/4 lg:w-3/5 xl:2/4 max-w-screen-md">
          <div
            id="content"
            ref={ref}
            tabIndex={-1}
            className="container px-10 py-6 mx-auto md:rounded-lg shadow-sm text-gray-800 bg-gray-50 outline-none"
          >
            <Outlet />
          </div>

          <Footer />
        </div>
      </main>

      <PaletteCommand />
      <Shortcuts />
      <QuizSettings />
      <DebugMode />
    </>
  );
};

export default Plecotus;
