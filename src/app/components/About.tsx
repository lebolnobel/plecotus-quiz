import * as React from 'react';
import Overlay from '../accessibility/Overlay';
import { GoArrowRight } from 'react-icons/go';
import { NavLink } from 'react-router-dom';
import { authors } from '../../utils/images';

const About = (): React.ReactNode => {
  return (
    <div className="mx-auto block" role="main">
      <h2 className="text-slate-500 uppercase">À propos de Plecotus Quiz</h2>

      <div className="flex pt-10">
        <div className="flex-auto">
          <h3 className="flex-auto text-2xl font-medium text-slate-900 uppercase">
            À propos
          </h3>
          <div className="w-full flex-none">
            <p className="py-2">
              Entrainez-vous à identifier les Chauves-souris dans toutes les
              conditions. A l'approche des recensements hivernaux des
              chauves-souris, revoyez les critères essentiels pour une
              identification efficace. Contribuez activement à leur
              préservation. Cette application est dédiée exclusivement aux
              espèces présentes en Belgique.
            </p>
          </div>

          <div className="text-center mx-auto w-3/4">
            <figure
              className="block flex text-center mx-auto w-full"
              role="none"
            >
              <img
                src="./assets/img/ressources/quiz-app.avif"
                alt="Plecotus quiz"
                title="Plecotus quiz"
                loading="lazy"
              />
            </figure>

            <div className="mt-6 font-medium">
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

          <div className="flex-auto my-6">
            <h3 className="flex-auto text-2xl font-medium text-slate-900 uppercase">
              Kesako ?
            </h3>
            <p className="py-2">
              Ce quiz va générer 10 questions aléatoires (ou plus en changeant
              les paramètres). Identifiez les espèces afin d'engranger des
              points. La base de données contient de nombreuses images pour
              garantir une expérience variée à chaque session. N'hésitez pas à
              rejouer à plusieurs reprises pour afiner votre œil en vue des
              recensements hivernaux, en Belgique.
            </p>
            <p className="py-2">
              L'application peut être installée sur votre téléphone ou votre
              ordinateur.
            </p>
            <p className="py-2">
              Vous pouvez contribuer à votre manière en remontant vos{' '}
              <a
                href="https://forms.gle/1cRnvvpNi1CD9hLm9"
                title="Feedbacks"
                className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora-100"
              >
                feedbacks
              </a>{' '}
              d'utilisation.
            </p>

            <p className="py-2">
              Cette application a été créée par{' '}
              <a
                href="https://lionellebon.be"
                title="Lionel Lebon"
                className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora-100"
              >
                Lionel Lebon
              </a>{' '}
              dans le cadre du travail de fin d'étude de la formation{' '}
              <a
                href="https://plecotus.natagora.be/"
                title="Plecotus"
                className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora-100"
              >
                Plecotus
              </a>{' '}
              2024, dispensée par{' '}
              <a
                href="http://natagora.be/"
                title="Natagora"
                className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora-100"
              >
                Natagora
              </a>
              . Son code source est disponible sur{' '}
              <a
                href="https://github.com/lebolnobel/plecotus-quiz"
                title="Github, plecotus-quiz"
                className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora-100"
              >
                GitHub
              </a>
              . Vous pouvez également lire mon{' '}
              <a
                href="https://lebol.notion.site/Plecotus-FCH-2023-2024-Rapport-d-activit-9c76378b950d4287bd112ecbe8a6733b?pvs=74"
                title="Rapport d'activité"
                className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora-100"
              >
                rapport d'activité
              </a>
              .
            </p>
            <p className="py-2">
              Son objectif est de permettre à quiconque de travailler
              l'identification des espèces de chauves-souris en hiver. Les
              réponses sont basées sur le Mémo de détermination.
            </p>
            <p className="py-2">
              Ce doument, que vous pouvez télécharger dans la rubrique{' '}
              <NavLink
                to="../ressources"
                className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora-100"
              >
                ressources
              </NavLink>
              , vous permettra de revoir l'ensemble des critères nécessaires à
              l'identification.
            </p>
            <p className="py-2">
              N'hésitez pas à le garder sous la main, surtout si vous débutez.
            </p>
          </div>

          <div className="flex-auto my-6">
            <h3 className="flex-auto text-2xl font-medium text-slate-900 uppercase">
              Rermerciements
            </h3>
            <div className="w-full flex-none">
              <p className="py-2">
                Cette application n'aurait pas pu voir le jour sans l'aide de
                nombreuses personnes.
              </p>
              <p className="py-2">
                Tout d'abord Pierrette Nyssen et Ruddy Cors, auteur.es du mémo
                de détermination. Un tout grand merci également à l'ensemble des
                photographes qui ont bien voulu se prêter aux jeux et proposer
                leurs photos pour les questions :{' '}
                {Object.values(authors)
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((person) => `${person.name} ${person.firstname}`)
                  .join(', ')}
              </p>

              <div className="flex mt-8">
                <figure className="text-center mx-auto px-8 w-48" role="none">
                  <a
                    href="https://plecotus.natagora.be"
                    title="Plecotus"
                    className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora-100"
                  >
                    <img
                      src="./assets/img/plecotus/logo.svg"
                      alt="Logo Plecotus"
                      title="Logo Plecotus"
                      loading="lazy"
                    />
                  </a>
                </figure>

                <figure className="text-center mx-auto px-8 w-48" role="none">
                  <a
                    href="https://www.natagora.be"
                    title="Natagora"
                    className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora-100"
                  >
                    <img
                      src="./assets/img/natagora/logo.png"
                      alt="Logo Natagora"
                      title="Logo Natagora"
                      loading="lazy"
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
