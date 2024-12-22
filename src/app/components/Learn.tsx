import * as React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { MEMO } from '../../utils/constants';
import { FormattedMessage, useIntl } from 'react-intl';
import { species } from '../../utils/species';

const Learn = (): React.ReactNode => {
  const intl = useIntl();

  const downloadMemo = () => {
    window.open(MEMO);
  };

  return (
    <div className="mx-auto block" role="main">
      <h2 className="text-slate-500 uppercase">
        En apprendre plus sur les espèces de chauves-souris
      </h2>

      <div className="flex pt-10 hidden">
        <div className="flex-auto">
          <h3 className="flex-auto text-2xl font-medium text-slate-900 uppercase">
            Apprendre
          </h3>

          <div className="w-full flex-none">
            <p className="py-2">
              <FormattedMessage id="about.aboutParagraph" />
            </p>
          </div>

          <div className="w-full mt-4 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
            {Object.values(species).map((sp, index) => (
              <div
                className="max-w-full border border-gray-200 rounded-lg hover:shadow hover:bg-slate-100 cursor-pointer"
                onClick={() => alert('...')}
                key={index}
              >
                <div className="relative h-48 md:h-36 rounded-t-lg group overflow-hidden">
                  <img
                    src={sp?.image || './assets/img/resources/placeholder.jpg'}
                    alt={sp.name}
                    title={sp.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-125"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center justify-between text-gray-200">
                        <div>
                          <h5 className="text-lg italic">{sp.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <p className="mb-3 font-normal">{sp.short}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex pt-10">
        <div className="flex-auto">
          <div className="flex items-center">
            <div className="flex-auto">
              <div className="grid max-w-screen-xl mx-auto sm:gap-8 sm:grid-cols-12">
                <div className="mr-auto sm:col-span-9">
                  <h3 className="flex-auto text-2xl font-medium text-slate-900 mb-2 uppercase">
                    <FormattedMessage id="resources.memo" />
                  </h3>
                  <p className="font-light">
                    <FormattedMessage id="resources.memoParagraph" />
                  </p>

                  <div className="space-x-4 mt-6 text-base font-medium">
                    <div className="flex-auto flex space-x-4">
                      <button
                        type="button"
                        role="button"
                        onClick={downloadMemo}
                        aria-label="download"
                        className="px-6 py-2 font-semibold rounded-md border border-slate-200 hover:bg-slate-100 hover:shadow focus:outline-none focus:ring-2 focus:ring-natagora/40"
                      >
                        <FormattedMessage id="resources.memo" />
                        <GoArrowRight
                          role="presentation"
                          size="24"
                          className="ml-2 inline-flex"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <figure
                  className="hidden sm:block sm:col-span-3 flex text-center mx-auto w-full"
                  role="none"
                >
                  <img
                    src="./assets/img/resources/memo.png"
                    alt={intl.formatMessage({ id: 'action.memo' })}
                    title={intl.formatMessage({ id: 'action.memo' })}
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

export default Learn;
