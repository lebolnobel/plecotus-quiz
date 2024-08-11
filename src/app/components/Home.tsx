import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Home = (): React.ReactNode => {
  return (
    <div className="mx-auto block">
      <h2 className="text-slate-500 uppercase">
        Plecotus quiz : recensements hivernaux des Chauves-souris
      </h2>

      <div className="flex pt-10">
        <div className="flex-none md:w-36 relative">
          <img
            src="/assets/img/plecotus/logo.svg"
            alt="Plecotus, Natagora"
            title="Plecotus, Natagora"
            className="absolute inset-0 w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex-auto px-6">
          <div className="flex flex-wrap">
            <h3 className="flex-auto text-2xl font-medium text-slate-900 mb-2 uppercase">
              Bienvenue
            </h3>
            <div className="w-full flex-none text-base text-slate-700">
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
                className="px-6 py-2 font-semibold rounded-md bg-natagora text-white hover:bg-natagora/90 hover:shadow inline-flex"
                to={'/quiz'}
              >
                Lancer le quiz !
                <svg
                  className="w-5 h-5 ml-2 -mr-1 pt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
