import * as React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { species } from '../../../../utils/species';
import {
  GoArrowRight,
  GoCheckCircle,
  GoCircleSlash,
  GoDotFill,
  GoRepo,
} from 'react-icons/go';
import { usePlecotusContext } from '../../../../hooks/usePlecotusContext';
import { LOCALE } from '../../../../locales';

type ExplanationType = {
  rightAnswer: string;
  value: string;
  onNext: () => void;
};

const Explanation = (props: ExplanationType): React.ReactNode => {
  const { rightAnswer, value, onNext } = props;

  const intl = useIntl();

  const { locale } = usePlecotusContext(); // To add a intl note

  const isCorrect = rightAnswer === value;
  const abbr = rightAnswer;
  const correctAnswer = species[rightAnswer];
  const userAnswer = species[value];

  return (
    <div className="flex items-start py-6">
      <div className="min-w-0 relative flex-auto">
        <div className="w-full ml-1 mr-1 flex flex-col items-center">
          <div
            className={`w-full rounded-lg bg-gray-100 pb-0 ${!correctAnswer ? '' : 'sm:pb-24'} relative cursor-pointer`}
            title={intl.formatMessage({ id: 'action.nextFull' })}
            onClick={onNext}
          >
            <div className="min-w-0 relative flex-auto w-full justify-center items-center z-1">
              <div
                className={`rounded-lg h-32 bg-gray-100 ${isCorrect ? 'text-natagora' : 'text-red-400'} mb-0 ${!correctAnswer ? '' : 'sm:mb-4'} relative overflow-hidden`}
              >
                <GoArrowRight
                  className="absolute bg-transparent -end-4 inset-y-0 h-full text-gray-400 opacity-5 z-0"
                  role="presentation"
                  size="128px"
                />

                <div className="flex flex-row w-full gap-5 justify-center items-center px-5 w-full h-full text-left z-1">
                  <div className="my-auto text-2xl">
                    {isCorrect ? (
                      <GoCheckCircle role="presentation" size="56px" />
                    ) : (
                      <GoCircleSlash role="presentation" size="56px" />
                    )}
                  </div>
                  <div>
                    {isCorrect ? (
                      <>
                        <div className="text-lg sm:text-xl">
                          <FormattedMessage id="quiz.answer.true" />
                        </div>
                        <div className="text-sm sm:text-base text-natagora/50 whitespace-pre-line">
                          <FormattedMessage
                            id="quiz.answer.trueDetail"
                            values={{
                              value: (
                                <strong>
                                  {correctAnswer?.displayName || abbr}
                                </strong>
                              ),
                            }}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-lg sm:text-xl">
                          <FormattedMessage id="quiz.answer.false" />
                        </div>
                        <div className="text-sm sm:text-base text-red-300 whitespace-pre-line">
                          <FormattedMessage
                            id="quiz.answer.falseDetail"
                            values={{
                              badValue: userAnswer?.displayName || (
                                <em>
                                  <FormattedMessage id="quiz.answer.default" />
                                </em>
                              ),
                              value: (
                                <strong>
                                  {correctAnswer?.displayName || abbr}
                                </strong>
                              ),
                            }}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {!!correctAnswer && (
            <div className="bg-gray-50 w-full sm:w-[80%] rounded-lg mt-10 sm:-mt-28 z-10 px-6 sm:pt-8 font-normal">
              <div className="flex flex-row gap-5 justify-center items-center">
                <div className="my-auto text-2xl">
                  <GoRepo role="presentation" size="56px" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl italic">
                    {correctAnswer.name}
                  </div>
                  <dl className="mt-2 flex flex-wrap text-sm">
                    <div>
                      <dt className="sr-only">
                        <FormattedMessage id="quiz.question.displayName" />
                      </dt>
                      <dd className="flex items-center">
                        {correctAnswer.displayName || '-'}
                      </dd>
                    </div>
                    <div>
                      <dt className="sr-only">
                        <FormattedMessage id="quiz.question.short" />
                      </dt>
                      <dd className="flex items-center">
                        <GoDotFill
                          role="presentation"
                          size="8px"
                          className="mx-2"
                        />
                        {abbr}
                      </dd>
                    </div>
                  </dl>
                  {locale === LOCALE.NL && (
                    <div className="text-sm text-slate-500 mt-5">
                      <FormattedMessage id="quiz.species.info" />
                    </div>
                  )}
                </div>
              </div>

              {correctAnswer.description || (
                <FormattedMessage id="quiz.default" />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explanation;
