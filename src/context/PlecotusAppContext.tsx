import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { flatten } from 'flat';

import { LOCALE } from '../locales/index';
import nlMessages from '../locales/nl.json';
import frMessages from '../locales/fr.json';

type GlobalI18NEntry = {
  [key: string]: string | GlobalI18NEntry;
};

const messages: GlobalI18NEntry = {
  nl: nlMessages,
  fr: frMessages,
};

export type PlecotusContextType = {
  // Debug mode
  isDebug?: boolean;
  toggleDebugMode?: () => void;

  // Display all shortcuts
  showShortcuts?: boolean;
  toggleShortcutsMode?: () => void;

  // Display quiz settings
  showSettings?: boolean;
  toggleSettingsMode?: () => void;

  // User locale, intl
  locale: string;
  setLocale: (locale: string) => void;

  isMac?: boolean;
};

export const PlecotusContext: React.Context<{
  locale: string;
  setLocale: (key: string) => void;
}> = React.createContext({
  locale: LOCALE.FR,
  setLocale: (_) => {
    void _;
  },
});

PlecotusContext.displayName = 'PlecotusContext';

type PlecotusProviderType = {
  children: React.ReactNode;
};

const PlecotusProvider = (props: PlecotusProviderType): React.ReactNode => {
  const { children } = props;

  const [isDebug, setDebug] = React.useState(false);
  const [showShortcuts, setShowShortcuts] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);
  const [locale, setLocale] = React.useState(LOCALE.FR);

  const isMac = React.useMemo(() => navigator.userAgent.includes('Mac'), []);

  const toggleDebugMode = () => {
    setDebug((prev) => !prev);
  };

  const toggleShortcutsMode = () => {
    setShowShortcuts((prev) => !prev);
  };

  const toggleSettingsMode = () => {
    setShowSettings((prev) => !prev);
  };

  const context = {
    isDebug,
    toggleDebugMode,
    showShortcuts,
    toggleShortcutsMode,
    showSettings,
    toggleSettingsMode,
    locale,
    setLocale,
    isMac,
  };

  return (
    <IntlProvider messages={flatten(messages[locale])} locale={locale}>
      <PlecotusContext.Provider value={context}>
        {children}
      </PlecotusContext.Provider>
    </IntlProvider>
  );
};

export default PlecotusProvider;
