import * as React from 'react';

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

  isMac?: boolean;
};

export const PlecotusContext = React.createContext({});
PlecotusContext.displayName = 'PlecotusContext';

type PlecotusProviderType = {
  children: React.ReactNode;
};

const PlecotusProvider = (props: PlecotusProviderType): React.ReactNode => {
  const { children } = props;

  const [isDebug, setDebug] = React.useState(false);
  const [showShortcuts, setShowShortcuts] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);
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
    isMac,
  };

  return (
    <PlecotusContext.Provider value={context}>
      {children}
    </PlecotusContext.Provider>
  );
};

export default PlecotusProvider;
