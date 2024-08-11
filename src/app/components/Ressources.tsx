import * as React from 'react';

const Ressources = (): React.ReactNode => {
  const downloadMemo = () => {
    window.open(
      'https://plecotus.natagora.be/fileadmin/Pole_Plecotus/biblio/Memo_5_20191106_PNy_RCo_1_.pdf',
    );
  };

  return (
    <div className="mx-auto block">
      <h2 className="text-slate-500 uppercase">
        Ressources utiles pour les recensements hivernaux
      </h2>

      <div className="flex pt-10">
        <div className="flex-auto">
          <div className="flex items-center">
            <div className="flex-auto">
              <div>
                <div className="grid max-w-screen-xl mx-auto sm:gap-8 sm:grid-cols-12">
                  <div className="mr-auto sm:col-span-9">
                    <h3 className="flex-auto text-2xl font-medium text-slate-900 mb-2 uppercase">
                      Mémo de détermination
                    </h3>
                    <p className="font-light">
                      Mémo pour la détermination des chauves-souris en hiver
                      (version novembre 2019) : ce document reprend l'ensemble
                      des critères connus pour identifier en hiver les
                      différentes espèces de chauves-souris présentes en
                      Belgique. Il ne s'agit pas d'une bibliographie complète,
                      mais bien de fiches espèces reprenant sur photo l'ensemble
                      des critères visibles sur les individus en hibernation
                      permettant d'aboutir à une identification.
                    </p>

                    <div className="space-x-4 mt-6 text-base font-medium">
                      <div className="flex-auto flex space-x-4">
                        <button
                          type="button"
                          onClick={downloadMemo}
                          className="px-6 py-2 inline-flex font-semibold rounded-md border border-slate-200 text-slate-800 hover:bg-slate-100 hover:shadow"
                        >
                          Mémo de détermination
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
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block sm:col-span-3 flex text-center mx-auto w-full">
                    <img
                      src="./assets/img/ressources/memo.png"
                      alt="Mémo de détermination"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ressources;
