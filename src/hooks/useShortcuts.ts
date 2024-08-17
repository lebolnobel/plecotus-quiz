import * as React from 'react';
import { useNavigate } from 'react-router-dom';

type UseShortcutsReturnType = {
  showOverlays: boolean;
};

function useShortcuts(
  onAction?: () => void,
  keyCode?: string,
): UseShortcutsReturnType {
  const [showOverlays, setShowOverlays] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey) {
        setShowOverlays(true);

        switch (event.code) {
          case 'KeyH': // Home
            event.preventDefault();
            navigate('/');
            break;
          case 'Digit1':
            event.preventDefault();
            navigate('/ressources');
            break;
          case 'Digit2':
            event.preventDefault();
            navigate('/about');
            break;
          case 'KeyS': // Start, quiz
            event.preventDefault();
            navigate('/quiz');
            break;

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

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [navigate, keyCode, onAction]);

  return {
    showOverlays,
  };
}

export default useShortcuts;
