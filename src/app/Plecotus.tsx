import * as React from 'react';
import Nav from './components/Nav.tsx';
import Footer from './components/Footer.tsx';
import { Outlet } from 'react-router-dom';

const Plecotus = (): React.ReactNode => {
  return (
    <>
      <Nav />

      <section className="font-anek text-slate-800 flex flex-col items-center">
        <div className="md:py-6 w-full md:w-3/4 lg:w-2/4">
          <div className="container px-10 py-6 mx-auto md:rounded-lg shadow-sm text-gray-800 bg-gray-50">
            <div id="content">
              <Outlet />
            </div>
          </div>

          <Footer />
        </div>
      </section>
    </>
  );
};

export default Plecotus;
