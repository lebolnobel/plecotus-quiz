import * as React from 'react';
import { GoHeart } from 'react-icons/go';

const Footer = (): React.ReactNode => {
  return (
    <footer className="pt-6 pb-6 text-center text-xs text-gray-900">
      <p>
        <span className="inline-flex">
          Fait avec{' '}
          <span className="px-1">
            <GoHeart />
          </span>{' '}
          par
        </span>{' '}
        <a
          href="https://lionellebon.be"
          title="En savoir plus"
          className="hover:underline text-natagora font-medium"
        >
          Lionel Lebon
        </a>{' '}
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
