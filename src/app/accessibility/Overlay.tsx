import * as React from 'react';
import useShortcuts from '../../hooks/useShortcuts.ts';

type OverlayType = {
  children: React.ReactNode;
  onReset?: () => void;
  onNext?: () => void;
};

const Overlay = (props: OverlayType): React.ReactNode => {
  const { children, onNext, onReset } = props;

  const { showOverlays } = useShortcuts(onNext, onReset);

  return (showOverlays && children) || null;
};

export default Overlay;
