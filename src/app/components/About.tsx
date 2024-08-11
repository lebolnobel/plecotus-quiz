import * as React from 'react';
import { NavLink } from 'react-router-dom';

const About = (): React.ReactNode => {
  return (
    <div className="mx-auto block">
      <h2 className="text-slate-500 uppercase">À propos de Plecotus Quiz</h2>

      <div className="flex pt-10">
        <div className="flex-auto">
          <div className="flex flex-wrap">
            <h3 className="flex-auto text-2xl font-medium text-slate-900 mb-2 uppercase">
              À propos
            </h3>
            <div className="w-full flex-none text-base text-slate-700">
              Entrainez-vous à identifier les Chauves-souris dans toutes les
              conditions. A l'approche des recensements hivernaux des
              chauves-souris, revoyez les critères essentiels pour une
              identification efficace. Contribuez activement à leur
              préservation.
            </div>
          </div>

          <div className="mt-6 mb-6">
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
                <p className="pt-2">
                  L'application peut être installée sur votre téléphone ou votre
                  ordinateur.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-baseline">
            <div className="space-x-5 flex text-base">
              <div>
                <p className="py-2">
                  Cette application a été créée par{' '}
                  <a
                    href="https://lionellebon.be"
                    title="Lionel Lebon"
                    className="hover:underline text-natagora"
                  >
                    Lionel Lebon
                  </a>{' '}
                  dans le cadre du travail de fin d'étude de la formation{' '}
                  <a
                    href="https://plecotus.natagora.be/"
                    title="Plecotus"
                    className="hover:underline text-natagora"
                  >
                    Plecotus
                  </a>{' '}
                  2024, dispensée par{' '}
                  <a
                    href="http://natagora.be/"
                    title="Natagora"
                    className="hover:underline text-natagora"
                  >
                    Natagora
                  </a>
                  .
                </p>

                <p className="py-2">
                  Son objectif est de permettre à quiconque de travailler
                  l'identification des espèces de chauves-souris en hivers. Les
                  réponses sont basées sur le Mémo de détermination.
                </p>
              </div>

              <div>
                <p className="py-2">
                  Ce doument, que vous pouvez télécharger dans la rubrique{' '}
                  <NavLink
                    to="/ressources"
                    className="hover:underline text-natagora"
                  >
                    ressources
                  </NavLink>
                  , vous permettra de revoir l'ensemble des critères nécessaires
                  à l'identification.
                </p>
                <p className="py-2">
                  N'hésitez pas à le garder sous la main, surtout si vous
                  débutez.
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

export default About;