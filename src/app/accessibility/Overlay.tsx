import * as React from 'react';
import useShortcuts from '../../hooks/useShortcuts';

type OverlayType = {
  children: React.ReactNode;
  keyCode?: string;
  onAction?: () => void;
};

const Overlay = (props: OverlayType): React.ReactNode => {
  const { children, keyCode, onAction } = props;

  const { showOverlays } = useShortcuts(onAction, keyCode);

  return (showOverlays && children) || null;
};

export default Overlay;
