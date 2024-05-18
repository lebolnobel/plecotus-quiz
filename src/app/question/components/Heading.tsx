import * as React from 'react';

const Heading = (): React.ReactNode => {
  return (
    <div>
      <h2 className="text-xl font-medium">QUIZ, RECENSEMENTS HIVERNAUX</h2>
      <span className="text-slate-500 text-sm">
        Trouver l'espèce qui se cache derrière cette photo !
      </span>
    </div>
  );
};

export default Heading;
