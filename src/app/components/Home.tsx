import * as React from 'react';
import Overlay from '../accessibility/Overlay.tsx';
import { GoArrowRight } from 'react-icons/go';
import { NavLink } from 'react-router-dom';

const Home = (): React.ReactNode => {
  return (
    <div className="mx-auto block">
      <h2 className="text-slate-500 uppercase">
        Plecotus quiz : recensements hivernaux des Chauves-souris
      </h2>

      <div className="flex pt-10">
        <figure className="flex-none md:w-36 relative">
          <img
            src="/assets/img/plecotus/logo.svg"
            alt="Plecotus, Natagora"
            title="Plecotus, Natagora"
            className="absolute inset-0 w-full object-cover"
            loading="lazy"
          />
        </figure>
        <div className="flex-auto px-6">
          <div className="flex flex-wrap">
            <h3 className="flex-auto text-2xl font-medium text-slate-900 mb-2 uppercase">
              Bienvenue
            </h3>
            <div className="w-full flex-none text-base">
              Entrainez-vous à identifier les Chauves-souris dans toutes les
              conditions. A l'approche des recensements hivernaux des
              chauves-souris, revoyez les critères essentiels pour une
              identification efficace. Contribuez activement à leur
              préservation.
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center">
              <div className="flex-auto">
                <h3 className="flex-auto text-2xl font-medium text-slate-900 mb-2 uppercase">
                  Kesako ?
                </h3>
                <p>
                  Ce quiz va générer 10 questions aléatoires. Identifiez les
                  espèces afin d'engranger des points. La base de données
                  contient de nombreuses images pour garantir une expérience
                  variée à chaque session. N'hésitez pas à rejouer à plusieurs
                  reprises pour afiner votre œil en vue des recensements
                  hivernaux.
                </p>
              </div>
            </div>
          </div>

          <div className="pb-6 mb-6 border-b border-slate-200"></div>

          <div className="flex space-x-4 mb-6 text-base font-medium">
            <div className="flex-auto flex space-x-4">
              <NavLink
                className="px-6 py-2 font-semibold rounded-md bg-natagora text-white hover:bg-natagora/90 hover:shadow inline-flex relative"
                to={'/quiz'}
              >
                Lancer le quiz !
                <GoArrowRight size="24" className="ml-2" />
                <Overlay>
                  <div className="overlay absolute top-0 inset-x-2/4 bg-gray-200 w-8 text-center text-natagora py-1 px-2 -ml-4 mt-1 rounded">
                    S
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
