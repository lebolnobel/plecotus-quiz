import * as React from 'react';
import { useNavigate } from 'react-router-dom';

type UseShortcutsReturnType = {
  showOverlays: boolean;
};

function useShortcuts(
  onNext?: () => void,
  onReset?: () => void,
): UseShortcutsReturnType {
  const [showOverlays, setShowOverlays] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey) {
        setShowOverlays(true);

        switch (event.code) {
          case 'KeyH':
            event.preventDefault();
            navigate('/'); // Home
            break;
          case 'Digit1':
            event.preventDefault();
            navigate('/ressources');
            break;
          case 'Digit2':
            event.preventDefault();
            navigate('/about');
            break;
          case 'KeyN':
            event.preventDefault();
            !!onNext && onNext(); // Next, quiz
            break;
          case 'KeyR':
            event.preventDefault();
            (!!onReset && onReset()) || navigate('/quiz'); // reset, quiz
            break;
          case 'KeyS':
            event.preventDefault();
            (!!onReset && onReset()) || navigate('/quiz'); // start, quiz
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
  }, [navigate, onNext, onReset]);

  return {
    showOverlays,
  };
}

export default useShortcuts;
