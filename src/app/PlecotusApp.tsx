import * as React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import PaletteCommand from './components/PaletteCommand';
import DebugMode from './components/DebugMode';
import Shortcuts from './components/Shortcuts';
import QuizSettings from './components/QuizSettings';
import { Outlet } from 'react-router-dom';

const Plecotus = (): React.ReactNode => {
  return (
    <>
      <Nav />

      <section className="font-anek flex flex-col items-center">
        <div className="md:py-6 w-full md:w-3/4 lg:w-3/5 xl:2/4 max-w-screen-md">
          <div className="container px-10 py-6 mx-auto md:rounded-lg shadow-sm text-gray-800 bg-gray-50">
            <div id="content">
              <Outlet />
            </div>
          </div>

          <Footer />
        </div>
      </section>

      <PaletteCommand />
      <Shortcuts />
      <QuizSettings />
      <DebugMode />
    </>
  );
};

export default Plecotus;
