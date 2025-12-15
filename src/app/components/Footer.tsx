import * as React from 'react';
import { GoHeart } from 'react-icons/go';
import { usePlecotusContext } from '../../hooks/usePlecotusContext';
import { FormattedMessage, useIntl } from 'react-intl';
import { MdKeyboardCommandKey } from 'react-icons/md';

const Footer = (): React.ReactNode => {
  const { isMac } = usePlecotusContext();

  const intl = useIntl();

  return (
    <footer
      className="pt-6 pb-6 text-center text-xs text-gray-600"
      role="contentinfo"
    >
      <p className="text-balance">
        <FormattedMessage
          id="footer.info"
          values={{
            hearth: <GoHeart role="presentation" className="inline-flex" />,
            plecotus: (
              <a
                href="https://plecotus.natagora.be/"
                title={intl.formatMessage({ id: 'natagora.plecotus' })}
                className="underline text-natagora font-medium decoration-natagora/50 hover:decoration-2 hover:text-natagora/80 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora/40"
              >
                Plecotus
              </a>
            ),
            natagora: (
              <a
                href="https://www.natagora.be/"
                title={intl.formatMessage({ id: 'natagora.natagora' })}
                className="underline text-natagora font-medium decoration-natagora/50 hover:decoration-2 hover:text-natagora/80 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora/40"
              >
                Natagora
              </a>
            ),
          }}
        />
      </p>

      <p>
        <FormattedMessage
          id="footer.raiseError"
          values={{
            link: (
              <a
                href="https://github.com/lebolnobel/plecotus-quiz"
                title={intl.formatMessage({ id: 'links.github' })}
                className="underline text-natagora font-medium decoration-natagora/50 hover:decoration-2 hover:text-natagora/80 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora/40"
              >
                GitHub
              </a>
            ),
          }}
        />
      </p>

      <div className="hidden sm:inline-flex">
        <kbd className="flex lowercase items-center justify-center px-2 mx-1 text-gray-600 border rounded bg-gray-600/5 border-gray-600/5">
          {isMac ? (
            <MdKeyboardCommandKey />
          ) : (
            <FormattedMessage id="shortcuts.CTRL" />
          )}
        </kbd>
        <kbd className="flex items-center justify-center lowercase px-2 mx-1 text-gray-600 border rounded bg-gray-600/5 border-gray-600/5">
          <FormattedMessage id="shortcuts.K" />
        </kbd>
        <FormattedMessage id="footer.commandPalette" />
      </div>
    </footer>
  );
};

export default Footer;
