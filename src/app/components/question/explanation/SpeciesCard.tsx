import * as React from 'react';
import { FormattedMessage } from 'react-intl';

type SpeciesCardType = {
  fiche?: React.ReactNode;
  generalities?: React.ReactNode;
  position?: React.ReactNode;
  bras?: React.ReactNode;
  nez?: React.ReactNode;
  oreilles?: React.ReactNode;
  pelage?: React.ReactNode;
  divers?: React.ReactNode;
};

const SpeciesCard = (props: SpeciesCardType): React.ReactNode => {
  const { fiche, generalities, position, bras, nez, oreilles, pelage, divers } =
    props;

  return (
    <div className="text-base">
      <div className="flex flex-col w-full mx-auto text-left">
        {!!generalities && (
          <div className="relative py-6">
            <div className="flex flex-col">
              <div className="text-xl">
                <FormattedMessage id="quiz.species.general" />
              </div>
            </div>
            <div className="text-slate-500">{generalities}</div>
          </div>
        )}

        {!!position && (
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-natagora after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <div className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center mb-1 sm:mb-0 text-natagora">
                <FormattedMessage id="quiz.species.position" />
              </div>
            </div>
            <div className="text-slate-500">{position}</div>
          </div>
        )}

        {!!bras && (
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-natagora after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <div className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center mb-1 sm:mb-0 text-natagora">
                <FormattedMessage id="quiz.species.arm" />{' '}
              </div>
            </div>
            <div className="text-slate-500">{bras}</div>
          </div>
        )}

        {!!nez && (
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-natagora after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <div className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center mb-1 sm:mb-0 text-natagora">
                <FormattedMessage id="quiz.species.nose" />
              </div>
            </div>
            <div className="text-slate-500">{nez}</div>
          </div>
        )}

        {!!oreilles && (
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-natagora after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <div className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center mb-1 sm:mb-0 text-natagora">
                <FormattedMessage id="quiz.species.ear" />
              </div>
            </div>
            <div className="text-slate-500">{oreilles}</div>
          </div>
        )}

        {!!pelage && (
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-natagora after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <div className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center mb-1 sm:mb-0 text-natagora">
                <FormattedMessage id="quiz.species.skin" />
              </div>
            </div>
            <div className="text-slate-500">{pelage}</div>
          </div>
        )}

        {!!divers && (
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-natagora after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <div className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center mb-1 sm:mb-0 text-natagora">
                <FormattedMessage id="quiz.species.misc" />
              </div>
            </div>
            <div className="text-slate-500">{divers}</div>
          </div>
        )}
      </div>

      {!!fiche && (
        <div className="relative py-6">
          <div className="flex flex-col">
            <div className="text-xl">
              <FormattedMessage id="quiz.species.id" />
            </div>
          </div>
          <div className="text-slate-500 text-sm">{fiche}</div>
        </div>
      )}
    </div>
  );
};

export default SpeciesCard;
