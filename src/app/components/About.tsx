import * as React from 'react';
import Overlay from '../accessibility/Overlay';
import { GoArrowRight } from 'react-icons/go';
import { NavLink } from 'react-router-dom';
import { authors } from '../../utils/images';
import { FormattedMessage, useIntl } from 'react-intl';

const About = (): React.ReactNode => {
  const intl = useIntl();

  return (
    <div className="mx-auto block" role="main">
      <h2 className="text-slate-500 uppercase">
        <FormattedMessage id="about.title" />
      </h2>

      <div className="flex pt-10">
        <div className="flex-auto">
          <h3 className="flex-auto text-2xl font-medium text-slate-900 uppercase">
            <FormattedMessage id="about.about" />
          </h3>
          <div className="w-full flex-none">
            <p className="py-2">
              <FormattedMessage id="about.aboutParagraph" />
            </p>
          </div>

          <div className="text-center mx-auto w-3/4 mt-6 mb-12">
            <figure
              className="block flex text-center mx-auto w-full"
              role="none"
            >
              <img
                src="./assets/img/resources/quiz-app.avif"
                alt={intl.formatMessage({ id: 'img.quizApp' })}
                title={intl.formatMessage({ id: 'img.quizApp' })}
                loading="lazy"
              />
            </figure>

            <div className="mt-6 font-medium">
              <NavLink
                className="px-6 py-2 font-semibold rounded-md bg-natagora text-white hover:bg-natagora/90 hover:shadow inline-flex relative focus:outline-none focus:ring-2 focus:ring-natagora-100"
                title={intl.formatMessage({ id: 'action.launch' })}
                to={'/quiz'}
              >
                <FormattedMessage id="action.launch" />

                <GoArrowRight role="presentation" size="24" className="ml-2" />
                <Overlay>
                  <div className="overlay absolute top-0 inset-x-2/4 bg-gray-200 w-8 text-center text-natagora py-1 px-2 -ml-4 mt-1 rounded">
                    <FormattedMessage id="shortcuts.S" />
                  </div>
                </Overlay>
              </NavLink>
            </div>
          </div>

          <div className="flex-auto my-6">
            <h3 className="flex-auto text-2xl font-medium text-slate-900 uppercase">
              <FormattedMessage id="about.kesako" />
            </h3>
            <p className="py-2">
              <FormattedMessage id="about.kesakoParagraph1" />
            </p>
            <p className="py-2">
              <FormattedMessage id="about.kesakoParagraph2" />
            </p>
            <p className="py-2">
              <FormattedMessage
                id="about.kesakoParagraph3"
                values={{
                  author: (
                    <a
                      href="https://lionellebon.be"
                      title="Lionel Lebon"
                      className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora-100"
                    >
                      Lionel Lebon
                    </a>
                  ),
                  plecotus: (
                    <a
                      href="https://plecotus.natagora.be/"
                      title={intl.formatMessage({
                        id: 'natagora.plecotusLong',
                      })}
                      className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora-100"
                    >
                      Plecotus
                    </a>
                  ),
                  natagora: (
                    <a
                      href="http://natagora.be/"
                      title={intl.formatMessage({ id: 'natagora.natagora' })}
                      className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora-100"
                    >
                      Natagora
                    </a>
                  ),
                  github: (
                    <a
                      href="https://github.com/lebolnobel/plecotus-quiz"
                      title={intl.formatMessage({ id: 'links.github' })}
                      className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora-100"
                    >
                      GitHub
                    </a>
                  ),
                  rapport: (
                    <a
                      href="https://lebol.notion.site/Plecotus-FCH-2023-2024-Rapport-d-activit-9c76378b950d4287bd112ecbe8a6733b?pvs=74"
                      title={intl.formatMessage({ id: 'about.tfe' })}
                      className="underline italic text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora-100"
                    >
                      rapport d'activité (fr)
                    </a>
                  ),
                }}
              />
            </p>
            <p className="py-2">
              <FormattedMessage
                id="about.kesakoParagraph4"
                values={{
                  resources: (
                    <NavLink
                      to="../resources"
                      title={intl.formatMessage({ id: 'action.resources' })}
                      className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora-100"
                    >
                      <FormattedMessage id="about.resources" />
                    </NavLink>
                  ),
                }}
              />
            </p>
            <p className="py-2">
              <FormattedMessage
                id="about.kesakoParagraph5"
                values={{
                  feedback: (
                    <a
                      href="https://forms.gle/1cRnvvpNi1CD9hLm9"
                      title={intl.formatMessage({ id: 'links.feedback' })}
                      className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora-100"
                    >
                      <FormattedMessage id="about.feedback" />
                    </a>
                  ),
                }}
              />
            </p>
          </div>

          <div className="flex-auto my-6">
            <h3 className="flex-auto text-2xl font-medium text-slate-900 uppercase">
              <FormattedMessage id="about.thanks" />
            </h3>
            <div className="w-full flex-none">
              <p className="py-2">
                <FormattedMessage id="about.thanksParagraph1" />
              </p>
              <p className="py-2">
                <FormattedMessage id="about.thanksParagraph2" />{' '}
                {Object.values(authors)
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((person) => `${person.name} ${person.firstname}`)
                  .join(', ')}
              </p>

              {/* <p className="py-2">
                <FormattedMessage id="about.thanksParagraph3" />
              </p> */}

              <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 mt-8">
                <figure className="text-center mx-auto px-8 w-48" role="none">
                  <a
                    href="https://plecotus.natagora.be"
                    title={intl.formatMessage({ id: 'natagora.plecotus' })}
                    className="text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora-100"
                  >
                    <img
                      src="./assets/img/plecotus/logo.svg"
                      alt={intl.formatMessage({ id: 'natagora.plecotus' })}
                      title={intl.formatMessage({ id: 'natagora.plecotus' })}
                      loading="lazy"
                    />
                    <figcaption className="mt-2 text-sm text-center text-gray-500">
                      <FormattedMessage id="natagora.plecotusLong" />
                    </figcaption>
                  </a>
                </figure>

                <figure className="text-center mx-auto px-8 w-48" role="none">
                  <a
                    href="https://www.natagora.be"
                    title={intl.formatMessage({ id: 'natagora.natagora' })}
                    className="text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora-100"
                  >
                    <img
                      src="./assets/img/natagora/logo.png"
                      alt={intl.formatMessage({ id: 'natagora.natagoraLong' })}
                      title={intl.formatMessage({
                        id: 'natagora.natagoraLong',
                      })}
                      loading="lazy"
                    />
                    <figcaption className="mt-2 text-sm text-center text-gray-500">
                      <FormattedMessage id="natagora.natagoraLong" />
                    </figcaption>
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
