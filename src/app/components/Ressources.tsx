import * as React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { MEMO } from '../../utils/constants.ts';

const Ressources = (): React.ReactNode => {
  const downloadMemo = () => {
    window.open(MEMO);
  };

  return (
    <div className="mx-auto block" role="ressources">
      <h2 className="text-slate-500 uppercase">
        Ressources utiles pour les recensements hivernaux
      </h2>

      <div className="flex pt-10">
        <div className="flex-auto">
          <div className="flex items-center">
            <div className="flex-auto">
              <div className="grid max-w-screen-xl mx-auto sm:gap-8 sm:grid-cols-12 mb-6">
                <div className="mr-auto sm:col-span-9">
                  <h3 className="flex-auto text-2xl font-medium text-slate-900 mb-2 uppercase">
                    Mémo de détermination
                  </h3>
                  <p className="font-light">
                    Mémo pour la détermination des chauves-souris en hiver
                    (version novembre 2019) : ce document reprend l'ensemble des
                    critères connus pour identifier en hiver les différentes
                    espèces de chauves-souris présentes en Belgique. Il ne
                    s'agit pas d'une bibliographie complète, mais bien de fiches
                    espèces reprenant sur photo l'ensemble des critères visibles
                    sur les individus en hibernation permettant d'aboutir à une
                    identification.
                  </p>

                  <div className="space-x-4 mt-6 text-base font-medium">
                    <div className="flex-auto flex space-x-4">
                      <button
                        type="button"
                        onClick={downloadMemo}
                        className="px-6 py-2 inline-flex font-semibold rounded-md border border-slate-200 hover:bg-slate-100 hover:shadow"
                      >
                        Mémo de détermination
                        <GoArrowRight size="24" className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
                <figure className="hidden sm:block sm:col-span-3 flex text-center mx-auto w-full">
                  <img
                    src="./assets/img/ressources/memo.png"
                    alt="Mémo de détermination"
                    title="Mémo de détermination"
                    loading="lazy"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ressources;
