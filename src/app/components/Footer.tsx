import * as React from 'react';

const Footer = (): React.ReactNode => {
  return (
    <footer className="pt-6 pb-6 text-center text-xs text-gray-900">
      <p>
        Fait avec 🤍 par{' '}
        <a
          href="https://lionellebon.be"
          title="En savoir plus"
          className="hover:underline text-natagora font-medium"
        >
          Lionel Lebon
        </a>
      </p>

      <p>
        Réalisé dans le cadre du TFE de{' '}
        <a
          href="https://plecotus.natagora.be/"
          title="Plecotus"
          className="hover:underline text-natagora font-medium"
        >
          Plecotus
        </a>
        , pour{' '}
        <a
          href="http://natagora.be/"
          title="Natagora"
          className="hover:underline text-natagora font-medium"
        >
          Natagora
        </a>
      </p>

      <p>
        Une erreur ? Une idée ? Contribuez au projet sur{' '}
        <a
          href="https://github.com/lebolnobel/plecotus-quiz"
          title="Github, plecotus-quiz"
          className="hover:underline text-natagora font-medium"
        >
          Github
        </a>
      </p>
    </footer>
  );
};

export default Footer;
