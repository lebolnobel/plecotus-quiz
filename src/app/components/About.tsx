import * as React from 'react';
import Overlay from '../accessibility/Overlay.tsx';
import { GoArrowRight } from 'react-icons/go';
import { NavLink } from 'react-router-dom';

const About = (): React.ReactNode => {
  return (
    <div className="mx-auto block" role="main">
      <h2 className="text-slate-500 uppercase">À propos de Plecotus Quiz</h2>

      <div className="flex pt-10">
        <div className="flex-auto">
          <div className="flex flex-wrap">
            <h3 className="flex-auto text-2xl font-medium text-slate-900 mb-2 uppercase">
              À propos
            </h3>
            <div className="w-full flex-none text-base">
              Entrainez-vous à identifier les Chauves-souris dans toutes les
              conditions. A l'approche des recensements hivernaux des
              chauves-souris, revoyez les critères essentiels pour une
              identification efficace. Contribuez activement à leur
              préservation.
            </div>
          </div>

          <div className="flex-auto mt-6 mb-6">
            <div className="flex flex-wrap">
              <h3 className="flex-auto text-2xl font-medium text-slate-900 mb-2 uppercase">
                Kesako ?
              </h3>
              <p>
                Ce quiz va générer 10 questions aléatoires. Identifiez les
                espèces afin d'engranger des points. La base de données contient
                de nombreuses images pour garantir une expérience variée à
                chaque session. N'hésitez pas à rejouer à plusieurs reprises
                pour afiner votre œil en vue des recensements hivernaux.
              </p>
              <p className="pt-2">
                L'application peut être installée sur votre téléphone ou votre
                ordinateur.
              </p>
              <p className="pt-2">
                Vous pouvez contribuer à votre manière en remontant vos{' '}
                <a
                  href="https://forms.gle/1cRnvvpNi1CD9hLm9"
                  title="Feedbacks"
                  className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit"
                >
                  feedbacks
                </a>{' '}
                d'utilisation.
              </p>
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
                    className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit"
                  >
                    Lionel Lebon
                  </a>{' '}
                  dans le cadre du travail de fin d'étude de la formation{' '}
                  <a
                    href="https://plecotus.natagora.be/"
                    title="Plecotus"
                    className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit"
                  >
                    Plecotus
                  </a>{' '}
                  2024, dispensée par{' '}
                  <a
                    href="http://natagora.be/"
                    title="Natagora"
                    className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit"
                  >
                    Natagora
                  </a>
                  . Son code source est disponible sur{' '}
                  <a
                    href="https://github.com/lebolnobel/plecotus-quiz"
                    title="Github, plecotus-quiz"
                    className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit"
                  >
                    Github
                  </a>
                  .
                </p>

                <p className="py-2">
                  Son objectif est de permettre à quiconque de travailler
                  l'identification des espèces de chauves-souris en hiver. Les
                  réponses sont basées sur le Mémo de détermination.
                </p>
              </div>

              <div>
                <p className="py-2">
                  Ce doument, que vous pouvez télécharger dans la rubrique{' '}
                  <NavLink
                    to="/ressources"
                    className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit  focus:outline-none focus:ring-2 focus:ring-natagora-100"
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
                className="px-6 py-2 font-semibold rounded-md bg-natagora text-white hover:bg-natagora/90 hover:shadow inline-flex relative focus:outline-none focus:ring-2 focus:ring-natagora-100"
                to={'/quiz'}
              >
                Lancer le quiz !
                <GoArrowRight role="presentation" size="24" className="ml-2" />
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

export default About;
