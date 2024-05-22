import * as React from 'react';

type StartType = {
  startQuiz: () => void;
  downloadMemo: () => void;
};

const Start = (props: StartType): React.ReactNode => {
  const { startQuiz, downloadMemo } = props;

  return (
    <div className="mx-auto block">
      <h2 className="text-slate-500">
        QUIZ DES RECENSEMENTS HIVERNAUX, DU PÔLE PLECOTUS DE NATAGORA
      </h2>

      <div className="flex pt-10">
        <div className="flex-none md:w-36 relative">
          <img
            src="/assets/img/plecotus/logo.svg"
            alt="Plecotus"
            className="absolute inset-0 w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex-auto px-6">
          <div className="flex flex-wrap">
            <h3 className="flex-auto text-lg font-semibold text-slate-900 mb-2">
              QUIZ, RECENSEMENTS HIVERNAUX
            </h3>
            <div className="w-full flex-none text-base text-slate-700">
              Entraînez-vous à identifier les Chauves-souris dans toutes les
              conditions !
            </div>
          </div>

          <div className="mt-6 mb-6">
            <div className="flex items-center">
              <div className="flex-auto">
                <h3 className="flex-auto text-lg font-semibold text-slate-900 mb-2">
                  KESAKO ?
                </h3>
                <p>
                  Ce quiz va générer 10 questions aléatoires. Identifiez les
                  espèces afin d'engranger des points. La base de données
                  contient de nombreuses images pour garantir une expérience
                  variée à chaque session. N'hésitez pas à rejouer à plusieurs
                  reprises pour afiner votre œil en vue des recensements
                  hivernaux. L'application peut être installée sur votre
                  téléphone ou votre ordinateur.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-baseline pb-6 mb-6 border-b border-slate-200">
            <div className="space-x-5 flex text-base">
              <div>
                <p className="py-2">
                  Cette application a été créée dans le cadre du travail de fin
                  d'étude de la formation{' '}
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
                  Ce doument, que vous pouvez télécharger ci-dessous, vous
                  permettra de revoir l'ensemble des critères nécessaires à
                  l'identification.
                </p>
                <p className="py-2">
                  N'hésitez pas à le garder sous la main, surtout si vous
                  débutez.
                </p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 mb-6 text-base font-medium">
            <div className="flex-auto flex space-x-4">
              <button
                className="px-6 py-2 font-semibold rounded-md bg-natagora text-slate-800 hover:bg-natagora/90 hover:shadow"
                type="submit"
                onClick={startQuiz}
              >
                Démarrer le quiz !
              </button>
              <button
                className="px-6 font-semibold rounded-md border border-slate-200 text-slate-800 hover:bg-slate-100 hover:shadow"
                type="button"
                onClick={downloadMemo}
              >
                Mémo de détermination
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
