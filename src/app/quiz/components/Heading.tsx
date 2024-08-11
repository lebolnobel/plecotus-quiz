import * as React from 'react';

const Heading = (): React.ReactNode => {
  return (
    <div>
      <h2 className="text-slate-500 uppercase hidden sm:block">
        Plecotus quiz : recensements hivernaux des Chauves-souris
      </h2>

      <h3 className="flex-auto text-2xl font-medium text-slate-900 uppercase sm:pt-10">
        QUIZ
      </h3>
      <span className="text-slate-500 text-sm">
        Trouver l'espèce qui se cache derrière cette photo !
      </span>
    </div>
  );
};

export default Heading;
