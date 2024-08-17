import * as React from 'react';

type UseLoadedImagesReturnType = {
  imgEl: React.RefObject<HTMLImageElement>;
  loaded: boolean;
};

// Fake image when loading
function useLoadedImage(): UseLoadedImagesReturnType {
  const [loaded, setLoaded] = React.useState(false);

  const imgEl = React.createRef<HTMLImageElement>();

  const onImageLoaded = () => setLoaded(true);

  React.useEffect(() => {
    const imgElCurrent = imgEl.current;

    if (imgElCurrent) {
      imgElCurrent.addEventListener('load', onImageLoaded);
      return () => imgElCurrent.removeEventListener('load', onImageLoaded);
    }
  }, [imgEl]);

  return {
    imgEl,
    loaded,
  };
}

export default useLoadedImage;
