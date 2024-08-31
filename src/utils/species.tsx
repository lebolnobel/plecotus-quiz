import * as React from 'react';
import SpeciesCard from '../app/quiz/components/SpeciesCard.tsx';

export const SP = Object.freeze({
  Rh: 'Rh', // Petit rhino
  Rf: 'Rf', // Grand rhino
  Pleaur: 'Pleaur', // Oreillard roux
  Pleaus: 'Pleaus', // Oreillard gris
  Mmba: 'Mmba', // Murin mystacinus & cie
  Md: 'Md', // Murin de Daubenton
  MD: 'MD', // Murin des marais
  ME: 'ME', // Murin à oreilles échancrées
  Mn: 'Mn', // Murin de Naterrer
  MB: 'MB', // Murin de Bechstein
  MM: 'MM', // Grand Murin
  Barbar: 'Barbar', // Barbastelle d'Europe
  Pipsp: 'Pipsp', // Pipistrell sp.
  Eptser: 'Eptser', // Sérotine commune
});

export type SpeciesType = {
  // scientific name
  name: string;
  // vernacular name
  displayName: string;

  // Full description of the species
  description: React.ReactNode;

  // Genus of the species, see GenusType
  genus: number;
};

type GenusType = {
  name: string;
  displayName: string;
};

export const species: { [key: string]: SpeciesType } = {
  [SP.Rh]: {
    name: 'Rhinolophus hipposideros',
    displayName: 'Petit Rhinolophe',
    description: (
      <SpeciesCard
        generalities={
          <ul className="list-decimal ml-4">
            <li>
              On le compare au Grand Rhinolophe (Rf) avec qui il se ressemble
              beaucoup.
            </li>
            <li>
              Son corps n’est pas plus grand qu’un pouce ou qu’une boîte
              d’allumettes.
            </li>
          </ul>
        }
        position={
          <p>
            Souvent (presque) complètement enroulé dans ses ailes, il n'y a pas
            grand-chose qui dépasse.
          </p>
        }
        nez={
          <ul className="list-decimal ml-4">
            <li>
              La lancette est proportionnellement plus grande que chez le Rf.
            </li>
            <li>
              Le museau est caractéristique : une membrane forme des replis dont
              un en forme de fer à cheval.
            </li>
          </ul>
        }
        pelage={
          <p>
            Dos gris-brun, ventre gris à gris-blanc, peu contrasté avec le dos.
            Rarement visible en hibernation.
          </p>
        }
        divers={<p>Les yeux sont plus rapprochés que chez Rf.</p>}
      />
    ),
    genus: 2,
  },
  [SP.Rf]: {
    name: 'Rhinolophus ferrumequinum',
    displayName: 'Grand Rhinolophe',
    description: (
      <SpeciesCard
        generalities={
          <ul className="list-decimal ml-4">
            <li>
              On le compare au Petit Rhinolophe (Rh) avec qui il se ressemble
              beaucoup.
            </li>
            <li>
              Le Grand Rhinolophe a la taille d’une poire, d’un paquet de
              cigarettes.
            </li>
          </ul>
        }
        position={
          <p>
            Il n'est pas complètement enroulé dans ses ailes, on voit toujours
            son museau.
          </p>
        }
        nez={
          <ul className="list-decimal ml-4">
            <li>
              La lancette est proportionnellement plus petit que chez le Rh.
            </li>
            <li>
              Le museau est caractéristique : une membrane forme des replis dont
              un en forme de fer à cheval.
            </li>
          </ul>
        }
      />
    ),
    genus: 2,
  },
  [SP.Pleaur]: {
    name: 'Plecotus auritus',
    displayName: 'Oreillard roux',
    description: (
      <SpeciesCard
        generalities={<p>Corps assez ramassé, s’inscrivant dans un ovale.</p>}
        oreilles={
          <p>
            Oreilles repliées vers l’arrière, sous les ailes durant
            l’hibernation, seuls les tragus dépassent (pouvant laisser
            l’impression qu’il s’agit des oreilles).
          </p>
        }
        nez={
          <ul className="list-decimal ml-4">
            <li>
              Museau caractéristique : clair (rose à brun clair), gonflé, avec
              des protubérences comme deux patates collées l’une à l’autre.
            </li>
            <li>
              Museau court et hémisphérique, faisant penser au profil d’un
              camion européen.
            </li>
          </ul>
        }
        divers={
          <p>
            Présence de deux grosses "verrues" bien marquées entre les yeux,
            dont le diamètre est égal à celui de l’œil.
          </p>
        }
      />
    ),
    genus: 3,
  },
  [SP.Pleaus]: {
    name: 'Plecotus austriacus',
    displayName: 'Oreillard gris',
    description: (
      <SpeciesCard
        generalities={<p>Corps assez ramassé, s’inscrivant dans un ovale.</p>}
        oreilles={
          <p>
            Oreilles repliées vers l’arrière, sous les ailes durant
            l’hibernation, seuls les tragus dépassent (pouvant laisser
            l’impression qu’il s’agit des oreilles).
          </p>
        }
        nez={
          <ul className="list-decimal ml-4">
            <li>
              Museau caractéristique : foncé, à protubérances moins marquées que
              chez Pleaur.
            </li>
            <li>
              Museau étiré, allongé, faisant penser à un museau de chien ou au
              profil d’un camion américain.
            </li>
          </ul>
        }
        divers={
          <p>
            Présence de deux grosses "verrues" bien marquées entre les yeux,
            dont le diamètre est égal à celui de l’œil.
          </p>
        }
      />
    ),
    genus: 3,
  },
  [SP.Mmba]: {
    name: 'Myotis mystacinus & cie',
    displayName: 'Murin à moustaches & cie',
    description: (
      <SpeciesCard
        generalities={
          <p>
            La distinction entre ces trois espèces (Murin à moustaches, de
            Brandt, d’Alcathoé) est extrêmement difficile en hibernation, on les
            notera quasi toujours comme un seul taxon : Mmba.
          </p>
        }
        oreilles={<p>L'angle entre les oreilles est d'environ 90°.</p>}
        nez={
          <ul className="list-decimal ml-4">
            <li>Vu de face, un masque noir ou V noir caractéristique</li>
            <li>
              Museau petit, peu proéminent et foncé (rose foncé à noirâtre).
            </li>
          </ul>
        }
        pelage={
          <p>
            Ventre plus clair que le dos, plutôt beige (pas blanc). Il est moins
            "propre" que les autres Myotis.
          </p>
        }
        divers={
          <p>
            Présence de deux grosses "verrues" bien marquées entre les yeux,
            dont le diamètre est égal à celui de l’œil.
          </p>
        }
      />
    ),
    genus: 1,
  },
  [SP.Md]: {
    name: 'Myotis daubentonii',
    displayName: 'Murin de Daubenton',
    description: (
      <SpeciesCard
        oreilles={
          <ul className="list-decimal ml-4">
            <li>Tragus assez court, se terminant en pointe arrondie.</li>
            <li>L'angle entre les oreilles est d'environ 120°.</li>
          </ul>
        }
        nez={
          <ul className="list-decimal ml-4">
            <li>
              Museau rosé, il est plus clair que chez Mmba, dans les cas les
              plus clairs, on voit souvent un rectangle rose bien marqué.
            </li>
            <li></li>
          </ul>
        }
        pelage={
          <ul className="list-decimal ml-4">
            <li>
              Ventre clair, plutôt grisâtre (pas blanc), ceci donne un aspect
              bicolore.
            </li>
            <li>La zone entre l’oreille et le museau peu poilue.</li>
          </ul>
        }
      />
    ),
    genus: 1,
  },
  [SP.MD]: {
    name: 'Myotis dasycneme',
    displayName: 'Murin des marais',
    description: (
      <SpeciesCard
        generalities={
          <p>La forme générale est très allongée, rectangulaire.</p>
        }
        oreilles={
          <ul className="list-decimal ml-4">
            <li>
              Oreilles relativement petites, dépassant peu le museau vers
              l’avant.
            </li>
            <li>Tragus court et arrondi.</li>
          </ul>
        }
        nez={
          <ul className="list-decimal ml-4">
            <li>
              Museau coupé en 2 lobes, donnant une impression de 2 petites
              boules côte à côte.
            </li>
            <li></li>
          </ul>
        }
        divers={
          <p>
            Grands pieds très caractéristiques : ils permettent d’attraper des
            insectes à la surface de l’eau.
          </p>
        }
      />
    ),
    genus: 1,
  },
  [SP.ME]: {
    name: 'Myotis emarginatus',
    displayName: 'Murin à oreilles échancrées',
    description: (
      <SpeciesCard
        position={
          <ul className="list-decimal ml-4">
            <li>
              Corps en forme de losange (coudes bien écartés du corps), vu de
              face, les poignets cachent souvent les oreilles.
            </li>
            <li>
              {' '}
              Ils pendent le plus souvent librement dans les secteurs chauds des
              cavités.
            </li>
          </ul>
        }
        oreilles={
          <ul className="list-decimal ml-4">
            <li>
              Les oreilles sont relativement longues, fines et pointues,
              orientées vers le sol dans l’axe du corps.
            </li>
            <li>
              Vu de face, les oreilles sont plus ou moins parallèles, ou avec un
              angle réduit.
            </li>
          </ul>
        }
        nez={
          <ul className="list-decimal ml-4">
            <li></li>
            <li></li>
          </ul>
        }
        divers={
          <ul className="list-decimal ml-4">
            <li>
              Pelage laineux et dense, parfois un pelage de chien mouille
              (aspect strié).
            </li>
            <li>5% des individus sont mélaniques.</li>
          </ul>
        }
      />
    ),
    genus: 1,
  },
  [SP.Mn]: {
    name: 'Myotis nattereri',
    displayName: 'Murin de Natterer',
    description: (
      <SpeciesCard
        position={<p>Corps trapu, avec une forme générale ovale.</p>}
        oreilles={
          <ul className="list-decimal ml-4">
            <li>
              Oreilles ssez longues, claires, parcheminées et translucides (les
              veines sont visibles par transparence).
            </li>
            <li>
              Vu de face, les oreilles sont plus ou moins alignées dans le même
              axe, à 180°.
            </li>
            <li>
              Oreilles relevées comme une pointe de ski, à l’extrémité arrondie.
            </li>
          </ul>
        }
        nez={<p>Museau rosé, comme Md, mais plus fin et plus allongé.</p>}
        pelage={
          <ul className="list-decimal ml-4">
            <li>
              Présence d’un croissant de poils plus clairs (crème) derrière les
              oreilles.
            </li>
            <li>
              Ventre blanc pur, immaculé (c’est le plus "propre" des Myotis),
              très contrasté avec le dos, gris-brun.
            </li>
          </ul>
        }
      />
    ),
    genus: 1,
  },
  [SP.MB]: {
    name: 'Myotis bechsteinii',
    displayName: 'Murin de Bechstein',
    description: (
      <SpeciesCard
        oreilles={
          <ul className="list-decimal ml-4">
            <li>
              Oreilles très longues et larges, en U, dépassant longuement le
              museau, égalant environ 1/3 de la longueur du corps.
            </li>
            <li>
              Contrairement aux Plecotus, les oreilles ne sont pas jointives à
              la base et jamais repliées derrière les ailes.
            </li>
          </ul>
        }
        nez={<p>Face rose peu poilue, semblable à celle de MM.</p>}
        pelage={
          <p>
            Long pelage ventral gris clair-blanc, contrastant assez bien avec le
            dos.
          </p>
        }
      />
    ),
    genus: 1,
  },
  [SP.MM]: {
    name: 'Myotis myotis',
    displayName: 'Grand Murin',
    description: (
      <SpeciesCard
        position={
          <ul className="list-decimal ml-4">
            <li>
              Le corps a une forme générale de sac à patates (en raison des
              nombreuses bosses) parfois plutôt de losange.
            </li>
            <li>Il pend généralement librement.</li>
          </ul>
        }
        oreilles={<p>Oreilles grandes, luisantes, dépassant du museau.</p>}
        nez={
          <p>
            Museau très proéminent ("museau de berger allemand"); peu poilu.
          </p>
        }
        pelage={<p>Ventre très blanc, très contrasté avec le dos.</p>}
      />
    ),
    genus: 1,
  },
  [SP.Barbar]: {
    name: 'Barbastella barbastellus',
    displayName: "Barbastelle d'Europe",
    description: (
      <SpeciesCard
        oreilles={
          <p>
            {' '}
            Oreilles noires, larges et triangulaires, se touchant à la base.
          </p>
        }
        nez={
          <ul className="list-decimal ml-4">
            <li>Face noire très reconnaissable.</li>
            <li>Museau aplati, narines s’ouvrant vers le haut.</li>
          </ul>
        }
        pelage={
          <p>
            Pelage soyeux, dos noir charbon, parfois avec les pointes des poils
            grisâtres et le ventre gris foncé.
          </p>
        }
      />
    ),
    genus: 4,
  },
  [SP.Pipsp]: {
    name: 'Pipistrellus sp.',
    displayName: 'Pipistrelles - 3 espèces',
    description: (
      <SpeciesCard
        generalities={
          <p>
            Les pipistrelles s’observent rarement en cavité souterraine. Quand
            on les trouve, c'est souvent dans des fissures, en groupe compact.
          </p>
        }
        pelage={
          <p>Pelage globalement foncé, contraste dos-ventre peu marqué.</p>
        }
        oreilles={
          <p>
            Oreilles petites, noires et souvent arrondies, avec un tragus
            arrondi et assez court.
          </p>
        }
        divers={
          <ul className="list-decimal ml-4">
            <li>Peau très foncée.</li>
            <li>
              À ne pas confondre avec Mmba, il faut regarder le contraste
              dos/ventre et les oreilles et tragus qui sont plus arrondis chez
              les pipistrelles).
            </li>
          </ul>
        }
      />
    ),
    genus: 5,
  },
  [SP.Eptser]: {
    name: 'Eptesicus serotinus',
    displayName: 'Sérotine commune',
    description: (
      <SpeciesCard
        oreilles={
          <p>
            Oreilles larges et arrondies, très foncées, avec un tragus large,
            court et arrondi.
          </p>
        }
        nez={
          <p>Museau assez allongé et proéminent, comme un museau de renard.</p>
        }
        pelage={
          <p>
            Dos brun, ventre un peu plus clair, tirant vers le brun-crème,
            contrastant peu avec le dos.
          </p>
        }
        divers={
          <ul className="list-decimal ml-4">
            <li>Peau entièrement sombre, face très foncé.</li>
            <li>Espèce de grande taille.</li>
          </ul>
        }
      />
    ),
    genus: 6,
  },
};

export const genera: { [key: number]: GenusType } = {
  1: {
    name: 'Myotis',
    displayName: 'Murin',
  },
  2: {
    name: 'Rhinolophus',
    displayName: 'Rhinolophe',
  },
  3: {
    name: 'Plecotus',
    displayName: 'Oreillard',
  },
  4: {
    name: 'Barbastella',
    displayName: 'Barbastelle',
  },
  5: {
    name: 'Pipistrellus',
    displayName: 'Pipistrelle',
  },
  6: {
    name: 'Eptesicus',
    displayName: 'Sérotine',
  },
};
