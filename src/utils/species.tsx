import * as React from 'react';

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
  Rh: {
    name: 'Rhinolophus hipposideros',
    displayName: 'Petit rhinolophe',
    description: (
      <>
        <p>
          <em>
            On le compare au Grand rhinolophe (Rf) avec qui il se ressemble
            beaucoup.
          </em>
        </p>
        <p>
          Quelques critères :
          <ul className="list-disc ml-4">
            <li>
              Son corps n’est pas plus grand qu’un pouce ou qu’une boîte
              d’allumettes.
            </li>
            <li>
              Souvent (presque) complètement enroulé dans ses ailes, il n'y a
              pas grand-chose qui dépasse.
            </li>
            <li>
              La lancette est proportionnellement plus grande que chez le Rf.
            </li>
            <li>Les yeux sont plus rapprochés que chez Rf.</li>
            <li>
              Le museau est caractéristique : une membrane forme des replis dont
              un en forme de fer à cheval.
            </li>
          </ul>
        </p>
      </>
    ),
    genus: 2,
  },
  Rf: {
    name: 'Rhinolophus ferrumequinum',
    displayName: 'Grand rhinolophe',
    description: (
      <>
        <p>
          <em>
            On le compare au Petit rhinolophe (Rh) avec qui il se ressemble
            beaucoup.
          </em>
        </p>
        <p>
          Quelques critères :
          <ul className="list-disc ml-4">
            <li>
              Le grand rhinolophe a la taille d’une poire, d’un paquet de
              cigarettes.
            </li>
            <li>
              Il n'est pas complètement enroulé dans ses ailes, on voit toujours
              son museau.
            </li>
            <li>
              La lancette est proportionnellement plus petit que chez le Rh.
            </li>
            <li>
              Le museau est caractéristique : une membrane forme des replis dont
              un en forme de fer à cheval.
            </li>
          </ul>
        </p>
      </>
    ),
    genus: 2,
  },
  Pleaur: {
    name: 'Plecotus auritus',
    displayName: 'Oreillard roux',
    description: (
      <p>
        Quelques critères :
        <ul className="list-disc ml-4">
          <li>Corps assez ramassé, s’inscrivant dans un ovale.</li>
          <li>
            Museau caractéristique : clair (rose à brun clair), gonflé, avec des
            protubérences comme deux patates collées l’une à l’autre.
          </li>
          <li>
            Museau court et hémisphérique, faisant penser au profil d’un camion
            européen.
          </li>
          <li>
            Oreilles repliées vers l’arrière, sous les ailes durant
            l’hibernation, seuls les tragus dépassent (pouvant laisser
            l’impression qu’il s’agit des oreilles).
          </li>
          <li>
            Présence de deux grosses "verrues" bien marquées entre les yeux,
            dont le diamètre est égal à celui de l’œil.
          </li>
        </ul>
      </p>
    ),
    genus: 3,
  },
  Pleaus: {
    name: 'Plecotus austriacus',
    displayName: 'Oreillard gris',
    description: (
      <p>
        Quelques critères :
        <ul className="list-disc ml-4">
          <li>Corps assez ramassé, s’inscrivant dans un ovale.</li>
          <li>
            Museau caractéristique : foncé, à protubérances moins marquées que
            chez Pleaur.
          </li>
          <li>
            Museau étiré, allongé, faisant penser à un museau de chien ou au
            profil d’un camion américain.
          </li>
          <li>
            Oreilles repliées vers l’arrière, sous les ailes durant
            l’hibernation, seuls les tragus dépassent (pouvant laisser
            l’impression qu’il s’agit des oreilles).
          </li>
          <li>
            Présence de deux petites « verrues » peu marquées entre les yeux,
            dont le diamètre est inférieur à celui de l’œil.
          </li>
        </ul>
      </p>
    ),
    genus: 3,
  },
  Mmba: {
    name: 'Myotis mystacinus & cie',
    displayName: 'Murin à moustaches & cie',
    description: (
      <>
        <p>
          <em>
            La distinction entre ces trois espèces (Murin à moustaches, de
            Brandt, d’Alcatho) est extrêmement difficile en hibernation, on les
            notera quasi toujours comme un seul taxon.
          </em>
        </p>
        <p>
          Quelques critères :
          <ul className="list-disc ml-4">
            <li>Vu de face, un masque noir ou V noir caractéristique.</li>
            <li>
              Museau petit, peu proéminent et foncé (rose foncé à noirâtre).
            </li>
            <li>L'angle entre les oreilles est d'environ 90°.</li>
            <li>
              ventre plus clair que le dos, plutôt beige (pas blanc). Il est
              moins "propre" que les autres Myotis.
            </li>
          </ul>
        </p>
      </>
    ),
    genus: 1,
  },
  Md: {
    name: 'Myotis daubentonii',
    displayName: 'Murin de Daubenton',
    description: (
      <p>
        Quelques critères :
        <ul className="list-disc ml-4">
          <li>
            Museau rosé, il est plus clair que chez Mmba, dans les cas les plus
            clairs, on voit souvent un rectangle rose bien marqué.
          </li>
          <li>Tragus assez court, se terminant en pointe arrondie.</li>
          <li>L'angle entre les oreilles est d'environ 120°.</li>
          <li>
            Ventre clair, plutôt grisâtre (pas blanc), ceci donne un aspect
            bicolore.
          </li>
          <li>La zone entre l’oreille et le museau peu poilue.</li>
        </ul>
      </p>
    ),
    genus: 1,
  },
  MD: {
    name: 'Myotis dasycneme',
    displayName: 'Murin des marais',
    description: (
      <p>
        Quelques critères :
        <ul className="list-disc ml-4">
          <li>La forme générale est très allongée, rectangulaire.</li>
          <li>
            Museau coupé en 2 lobes, donnant une impression de 2 petites boules
            côte à côte.
          </li>
          <li>
            Oreilles relativement petites, dépassant peu le museau vers l’avant.
          </li>
          <li>Tragus court et arrondi.</li>
          <li>
            Grands pieds très caractéristiques : ils permettent d’attraper des
            insectes à la surface de l’eau.
          </li>
        </ul>
      </p>
    ),
    genus: 1,
  },
  ME: {
    name: 'Myotis emarginatus',
    displayName: 'Murin à oreilles échancrées',
    description: (
      <p>
        Quelques critères :
        <ul className="list-disc ml-4">
          <li>
            Corps en forme de losange (coudes bien écartés du corps), vu de
            face, les poignets cachent souvent les oreilles.
          </li>
          <li>
            Ils pendent le plus souvent librement dans les secteurs chauds des
            cavités.
          </li>
          <li>
            Les oreilles sont relativement longues, fines et pointues, orientées
            vers le sol dans l’axe du corps.
          </li>
          <li>
            Vu de face, les oreilles sont plus ou moins parallèles, ou avec un
            angle réduit.
          </li>
          <li>
            Pelage laineux et dense, parfois un pelage de chien mouille (aspect
            strié).
          </li>
          <li>5% des individus sont mélaniques.</li>
        </ul>
      </p>
    ),
    genus: 1,
  },
  Mn: {
    name: 'Myotis nattereri',
    displayName: 'Murin de Natterer',
    description: (
      <p>
        Quelques critères :
        <ul className="list-disc ml-4">
          <li>Corps trapu, avec une forme générale ovale.</li>
          <li>Museau rosé, comme Md, mais plus fin et plus allongé.</li>
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
          <li>
            Présence d’un croissant de poils plus clairs (crème) derrière les
            oreilles.
          </li>
          <li>
            Ventre blanc pur, immaculé (c’est le plus "propre" des Myotis), très
            contrasté avec le dos, gris-brun.
          </li>
        </ul>
      </p>
    ),
    genus: 1,
  },
  MB: {
    name: 'Myotis bechsteinii',
    displayName: 'Murin de Bechstein',
    description: (
      <p>
        Quelques critères :
        <ul className="list-disc ml-4">
          <li>face rose peu poilue, semblable à celle de MM.</li>
          <li>
            Oreilles très longues et larges, en U, dépassant longuement le
            museau, égalant environ 1/3 de la longueur du corps.
          </li>
          <li>
            Contrairement aux Plecotus, les oreilles ne sont pas jointives à la
            base et jamais repliées derrière les ailes.
          </li>
          <li>
            Long pelage ventral gris clair-blanc, contrastant assez bien avec le
            dos.
          </li>
          <li>C'est la plus grande de nos chauve-souris, près de 8cm.</li>
        </ul>
      </p>
    ),
    genus: 1,
  },
  MM: {
    name: 'Myotis myotis',
    displayName: 'Grand murin',
    description: (
      <p>
        Quelques critères :
        <ul className="list-disc ml-4">
          <li>
            Le corps a une forme générale de sac à patates (en raison des
            nombreuses bosses) parfois plutôt de losange.
          </li>
          <li>Il pend généralement librement.</li>
          <li>
            Museau très proéminent ("museau de berger allemand"); peu poilu.
          </li>
          <li>Oreilles grandes, luisantes, dépassant du museau.</li>
          <li>Ventre très blanc, très contrasté avec le dos.</li>
        </ul>
      </p>
    ),
    genus: 1,
  },
  Barbar: {
    name: 'Barbastella barbastellus',
    displayName: 'Barbastelle',
    description: (
      <>
        <p>
          <em>Il s'agit d'une espèce évidente.</em>
        </p>
        <p>
          Quelques critères :
          <ul className="list-disc ml-4">
            <li>Face noire très reconnaissable.</li>
            <li>Museau aplati, narines s’ouvrant vers le haut.</li>
            <li>
              Oreilles noires, larges et triangulaires, se touchant à la base.
            </li>
            <li>
              Pelage soyeux, dos noir charbon, parfois avec les pointes des
              poils grisâtres et le ventre gris foncé.
            </li>
          </ul>
        </p>
      </>
    ),
    genus: 4,
  },
  Pipsp: {
    name: 'Pipistrellus sp.',
    displayName: 'Pipistrelles - 3 espèces',
    description: (
      <>
        <p>
          <em>
            Lles pipistrelles s’observent rarement en cavité souterraine. Quand
            on les trouve, c'est souvent dans des fissures, en groupe compact.
          </em>
        </p>
        <p>
          Quelques critères :
          <ul className="list-disc ml-4">
            <li>
              Oreilles petites, noires et souvent arrondies, avec un tragus
              arrondi et assez court.
            </li>
            <li>Pelage globalement foncé, contraste dos-ventre peu marqué.</li>
            <li>Peau très foncée.</li>
            <li>
              A ne pas confondre avec Mmba, il faut regarder le contraste
              dos/ventre et les oreilles et tragus qui sont plus arrondis chez
              les pipistrelles).
            </li>
          </ul>
        </p>
      </>
    ),
    genus: 5,
  },
  Eptser: {
    name: 'Eptesicus serotinus',
    displayName: 'Sérotine commune',
    description: (
      <p>
        Quelques critères :
        <ul className="list-disc ml-4">
          <li>
            Museau assez allongé et proéminent, comme un museau de renard.
          </li>
          <li>
            Oreilles larges et arrondies, très foncées, avec un tragus large,
            court et arrondi.
          </li>
          <li>
            Dos brun, ventre un peu plus clair, tirant vers le brun-crème,
            contrastant peu avec le dos.
          </li>
          <li>Peau entièrement sombre, face très foncé.</li>
          <li>Espèce de grande taille.</li>
        </ul>
      </p>
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
