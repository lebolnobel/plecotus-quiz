import * as React from 'react';
import SpeciesCard from '../components/question/explanation/SpeciesCard';
import ErrorPage from './ErrorPage';
import { FormattedMessage, useIntl } from 'react-intl';
import { useParams } from 'react-router';
import { SP, species } from '../../utils/species';
import { GoArrowLeft } from 'react-icons/go';
import { NavLink } from 'react-router-dom';

const Species = (): React.ReactNode => {
  const { species: currentSpecies } = useParams();
  const intl = useIntl();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [currentSpecies]);

  if (
    !currentSpecies ||
    !Object.prototype.hasOwnProperty.call(SP, currentSpecies)
  )
    return <ErrorPage />;

  const sp = species[currentSpecies];

  return (
    <section className="mx-auto block">
      <h2 className="text-slate-500 uppercase">
        <FormattedMessage id="learn.title" />
      </h2>

      <div className="flex pt-10">
        <div className="flex-auto">
          <div className="rounded-md overflow-hidden w-full bg-gray-100">
            <div className="relative h-64 md:h-48 group overflow-hidden">
              <img
                src={sp.image || './assets/img/resources/placeholder.jpg'}
                alt={sp.name}
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-125"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center justify-between text-gray-200">
                    <div>
                      <h3 className="text-xl font-semibold">{sp.name}</h3>
                      <div className="flex text-md italic flex flex-wrap">
                        <span>{sp.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SpeciesCard
            fiche={
              <div
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({
                    id: `species.description.${currentSpecies}.fiche`,
                  }),
                }}
              />
            }
            generalities={
              <div
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({
                    id: `species.description.${currentSpecies}.generalities`,
                  }),
                }}
              />
            }
            position={
              <div
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({
                    id: `species.description.${currentSpecies}.position`,
                  }),
                }}
              />
            }
            bras={
              <div
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({
                    id: `species.description.${currentSpecies}.bras`,
                  }),
                }}
              />
            }
            nez={
              <div
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({
                    id: `species.description.${currentSpecies}.nez`,
                  }),
                }}
              />
            }
            oreilles={
              <div
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({
                    id: `species.description.${currentSpecies}.oreilles`,
                  }),
                }}
              />
            }
            pelage={
              <div
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({
                    id: `species.description.${currentSpecies}.pelage`,
                  }),
                }}
              />
            }
            divers={
              <div
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({
                    id: `species.description.${currentSpecies}.divers`,
                  }),
                }}
              />
            }
          />

          <div className="mx-auto text-center space-x-4 mt-6 text-base font-medium">
            <NavLink
              to="../learn"
              title={intl.formatMessage({ id: 'learn.back' })}
              className="px-6 py-2 inline-flex font-semibold rounded-md border border-slate-200 hover:bg-slate-100 hover:shadow focus:outline-none focus:ring-2 focus:ring-natagora/40"
            >
              <GoArrowLeft role="presentation" size="24" className="mr-2" />

              <FormattedMessage id="learn.back" />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Species;
