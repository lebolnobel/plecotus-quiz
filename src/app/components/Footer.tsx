import * as React from 'react';

const Footer = (): React.ReactNode => {
  return (
    <div className="pt-6 pb-6 text-center text-xs text-gray-900">
      <p>
        Fait avec 🤍 par{' '}
        <a
          href="https://lionellebon.be"
          title="En savoir plus"
          className="hover:underline text-natagora"
        >
          Lionel Lebon
        </a>
      </p>

      <p>
        Contribuez au projet sur{' '}
        <a
          href="https://github.com/lebolnobel/plecotus-quiz"
          title="Github, plecotus-quiz"
          className="hover:underline text-natagora"
        >
          Github
        </a>
      </p>

      <p>
        Réalisé dans le cadre de{' '}
        <a
          href="https://plecotus.natagora.be/"
          title="Plecotus"
          className="hover:underline text-natagora"
        >
          Plecotus
        </a>
        , pour{' '}
        <a
          href="http://natagora.be/"
          title="Natagora"
          className="hover:underline text-natagora"
        >
          Natagora
        </a>
      </p>
    </div>
  );
};

export default Footer;
