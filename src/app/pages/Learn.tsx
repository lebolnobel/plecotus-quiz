import * as React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { FormattedMessage, useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { species } from '../../utils/species';
import { MEMO } from '../../utils/constants';

const Learn = (): React.ReactNode => {
  const intl = useIntl();
  const navigate = useNavigate();

  const downloadMemo = () => {
    window.open(MEMO);
  };

  const handleKeyDown = (sp: string) => {
    return (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter' || event.key === 'Space') {
        navigate(`/species/${sp}`);
      }
    };
  };

  return (
    <section className="mx-auto block">
      <h2 className="text-slate-500 uppercase">
        <FormattedMessage id="learn.title" />
      </h2>

      <div className="flex pt-10">
        <div className="flex-auto">
          <h3 className="flex-auto text-2xl font-medium text-slate-900 uppercase">
            <FormattedMessage id="learn.learnMore" />
          </h3>

          <div className="w-full flex-none">
            <p className="py-2">
              <FormattedMessage id="learn.learnParagraph" />
            </p>
          </div>

          <div className="w-full mt-4 mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
            {Object.keys(species).map((sp, index) => (
              <div
                key={index}
                tabIndex={0}
                onClick={() => navigate(`/species/${sp}`)}
                onKeyDown={handleKeyDown(sp)}
                className="max-w-full border border-gray-200 rounded-lg hover:shadow hover:bg-slate-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-natagora/40"
              >
                <div className="relative h-48 md:h-36 rounded-t-lg group overflow-hidden">
                  <img
                    src={
                      species[sp]?.image ||
                      './assets/img/resources/placeholder.jpg'
                    }
                    alt={species[sp].name}
                    title={species[sp].name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-125"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center justify-between text-gray-200">
                        <div>
                          <h3 className="text-lg italic">{species[sp].name}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <p className="font-normal text-sm">{species[sp].short}</p>
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
                  <figcaption className="sr-only">
                    <FormattedMessage id="action.memo" />
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
