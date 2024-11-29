import * as React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { MEMO } from '../../utils/constants';
import { FormattedMessage, useIntl } from 'react-intl';

const Resources = (): React.ReactNode => {
  const intl = useIntl();

  const downloadMemo = () => {
    window.open(MEMO);
  };

  return (
    <div className="mx-auto block" role="main">
      <h2 className="text-slate-500 uppercase">
        <FormattedMessage id="resources.title" />
      </h2>

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
                        className="px-6 py-2 inline-flex font-semibold rounded-md border border-slate-200 hover:bg-slate-100 hover:shadow focus:outline-none focus:ring-2 focus:ring-natagora-100"
                      >
                        <FormattedMessage id="action.memo" />
                        <GoArrowRight
                          role="presentation"
                          size="24"
                          className="ml-2"
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

export default Resources;
