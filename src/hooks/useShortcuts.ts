import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { K_1, K_2, K_H, K_Q, K_S } from '../utils/constants.ts';
import { usePlecotusContext } from './usePlecotusContext.ts';

type UseShortcutsReturnType = {
  showOverlays: boolean;
};

function useShortcuts(
  onAction?: () => void,
  keyCode?: string,
): UseShortcutsReturnType {
  const [showOverlays, setShowOverlays] = React.useState(false);

  const navigate = useNavigate();
  const { toggleSettingsMode } = usePlecotusContext();

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey) {
        setShowOverlays(true);

        switch (event.code) {
          // Generic shortcuts (nav), available across the whole app
          case K_H: // Home
            event.preventDefault();
            navigate('/');
            break;
          case K_1:
            event.preventDefault();
            navigate('/ressources');
            break;
          case K_2:
            event.preventDefault();
            navigate('/about');
            break;
          case K_S: // Start, quiz
            event.preventDefault();
            navigate('/quiz');
            break;
          case K_Q: // Settings
            event.preventDefault();
            !!toggleSettingsMode && toggleSettingsMode();
            break;

          // Specific shortcuts
          case keyCode: // Next, quiz
            event.preventDefault();
            !!onAction && onAction();
            break;
        }
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Alt') {
        setShowOverlays(false);
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        setShowOverlays(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [navigate, keyCode, toggleSettingsMode, onAction]);

  return {
    showOverlays,
  };
}

export default useShortcuts;
