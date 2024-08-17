import * as React from 'react';
import { GoHeart } from 'react-icons/go';

const Footer = (): React.ReactNode => {
  return (
    <footer
      className="pt-6 pb-6 text-center text-xs text-gray-600"
      role="contentinfo"
    >
      <p>
        <span className="inline-flex">
          Fait avec{' '}
          <span className="px-1">
            <GoHeart role="presentation" />
          </span>{' '}
          par
        </span>{' '}
        <a
          href="https://lionellebon.be"
          title="En savoir plus"
          className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit"
        >
          Lionel Lebon
        </a>{' '}
      </p>

      <p>
        Réalisé dans le cadre du TFE de{' '}
        <a
          href="https://plecotus.natagora.be/"
          title="Plecotus"
          className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit"
        >
          Plecotus
        </a>
        , pour{' '}
        <a
          href="http://natagora.be/"
          title="Natagora"
          className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit"
        >
          Natagora
        </a>
      </p>

      <p>
        Une erreur ? Une idée ? Contribuez au projet sur{' '}
        <a
          href="https://github.com/lebolnobel/plecotus-quiz"
          title="Github, plecotus-quiz"
          className="underline text-natagora font-medium decoration-natagora-50 hover:decoration-2 hover:text-natagora-100 transition duration-400 ease-in-out hover:decoration-inherit"
        >
          Github
        </a>
      </p>

      <div className="hidden sm:inline-flex">
        <kbd className="flex items-center justify-center px-2 mx-1 text-gray-600 border rounded bg-gray-600/5 border-gray-600/5">
          ctrl/⌘
        </kbd>{' '}
        +{' '}
        <kbd className="flex items-center justify-center px-2 mx-1 text-gray-600 border rounded bg-gray-600/5 border-gray-600/5">
          k
        </kbd>
        pour ouvrir la palette de commande
      </div>
    </footer>
  );
};

export default Footer;
