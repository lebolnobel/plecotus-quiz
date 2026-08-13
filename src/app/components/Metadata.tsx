import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { usePlecotusContext } from '../../hooks/usePlecotusContext';

type MetaData = {
  title?: string;
  canonical?: string;
};

const Metadata = (props: MetaData): React.ReactNode => {
  const { title, canonical } = props;

  const { locale } = usePlecotusContext();
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const origin =
    typeof window !== 'undefined' && window.location
      ? window.location.origin
      : '';
  const href = canonical ?? `${origin}${location.pathname}${location.search}`;

  return (
    <>
      {title ? <title>{title}</title> : null}
      <link rel="canonical" href={href} />
    </>
  );
};

export default Metadata;
