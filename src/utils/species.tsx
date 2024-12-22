import * as React from 'react';
import SpeciesCard from '../app/quiz/components/explanation/SpeciesCard';
import { FormattedMessage } from 'react-intl';

export const SP = Object.freeze({
  Barbar: 'Barbar', // Barbastelle d'Europe
  MB: 'MB', // Murin de Bechstein
  Md: 'Md', // Murin de Daubenton
  MD: 'MD', // Murin des marais
  ME: 'ME', // Murin à oreilles échancrées
  MM: 'MM', // Grand Murin
  Mn: 'Mn', // Murin de Natterer
  Mmba: 'Mmba', // Murin à moustaches & cie
  Pleaur: 'Pleaur', // Oreillard roux
  Pleaus: 'Pleaus', // Oreillard gris
  Pipsp: 'Pipsp', // Pipistrelles - 3 espèces
  Eptser: 'Eptser', // Sérotine commune
  Rh: 'Rh', // Petit Rhinolophe
  Rf: 'Rf', // Grand Rhinolophe
});

export type SpeciesType = {
  // scientific name
  name: string;
  // vernacular name
  displayName: React.ReactNode;

  // Short description
  short: React.ReactNode;
  // Full description of the species
  description: React.ReactNode;
  // Image
  image?: string;

  // Genus of the species, see GenusType
  genus: number;
};

export const species: { [key: string]: SpeciesType } = {
  [SP.Barbar]: {
    name: 'Barbastella barbastellus',
    displayName: <FormattedMessage id="species.Barbar" />,
    short: <FormattedMessage id="species.description.Barbar.short" />,
    image:
      '/assets/img/species/sp/csm_BarbastellaBarbastellus_JeanLouisGathoye__10__162fa6628a.jpg',
    description: (
      <SpeciesCard
        fiche={
          <ul className="list-decimal ml-4">
            <li>Taille (tête + corps) : 45-58 mm - moyen</li>
            <li>Rareté : RR - rarissime</li>
            <li>Gîtes d’hiver : arbres, rarement cavités</li>
            <li>
              Position dans la cavité : souvent suspendu à la paroi ou dans des
              fissures
            </li>
            <li>
              Température : aime les températures assez basses (près des
              entrées, sites très ventilés)
            </li>
          </ul>
        }
        position={
          <p>
            Elle fréquente les fissures, décollements, bâches ou encore des
            panneaux accolés aux parois.
          </p>
        }
        nez={
          <ul className="list-decimal ml-4">
            <li>Face noire très reconnaissable.</li>
            <li>Museau aplati, narines s’ouvrant vers le haut.</li>
          </ul>
        }
        oreilles={
          <p>
            Oreilles noires, larges et triangulaires, se touchant à la base.
          </p>
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
  [SP.Eptser]: {
    name: 'Eptesicus serotinus',
    displayName: <FormattedMessage id="species.Eptser" />,
    short: <FormattedMessage id="species.description.Eptser.short" />,
    image:
      '/assets/img/species/sp/csm_EptesicusSerotinus_Hollogne_LucMalchair_2__1fb04eae17.jpg',
    description: (
      <SpeciesCard
        fiche={
          <ul className="list-decimal ml-4">
            <li>Taille (tête + corps) : 62-80 mm - grand</li>
            <li>Rareté : C - commun</li>
            <li>Gîtes d’hiver : bâtiments, rarement cavités</li>
            <li>
              Position dans la cavité : dans des fissures profondes ou des
              crevasses à proximité des entrées
            </li>
            <li>Température : supporte des températures assez basses</li>
          </ul>
        }
        position={
          <p>
            Rarement dans les cavités, quand on les trouve, c'est généralement
            cachées dans des anfractuosités ou des crevasses, dans des zones peu
            tamponnées et souvent bien ventilées.
          </p>
        }
        bras={
          <p>Les avant-bras et poignets sont très forts/épais et sombres.</p>
        }
        nez={
          <p>Museau assez allongé et proéminent, comme un museau de renard.</p>
        }
        oreilles={
          <p>
            Oreilles larges et arrondies, très foncées, avec un tragus large,
            court et arrondi.
          </p>
        }
        pelage={
          <p>
            Entièrement sombre ! Dos brun, ventre un peu plus clair, tirant vers
            le brun-crème, contrastant peu avec le dos.
          </p>
        }
        divers={
          <ul className="list-decimal ml-4">
            <li>Peau entièrement sombre, face très foncée.</li>
            <li>Espèce de grande taille.</li>
          </ul>
        }
      />
    ),
    genus: 6,
  },
  [SP.MB]: {
    name: 'Myotis bechsteinii',
    displayName: <FormattedMessage id="species.MB" />,
    short: <FormattedMessage id="species.description.MB.short" />,
    image:
      '/assets/img/species/sp/csm_MyotisBechsteini_TrouDeLaLouve_Nettine_07022007_NicolasTiteux_3__f7de6a64fe.jpg',
    description: (
      <SpeciesCard
        fiche={
          <ul className="list-decimal ml-4">
            <li>Taille (tête + corps) : 45-55 mm - moyen</li>
            <li>Rareté : R - rare</li>
            <li>Gîtes d’hiver : arbres, cavités et bâtiments</li>
            <li>
              Position dans la cavité : rarement observé en cavité car en
              général situé au fond de crevasses, parfois pend librement ou
              contre la paroi
            </li>
            <li>Température : variable</li>
          </ul>
        }
        position={
          <p>Il hiberne au plus profond des crevasses et autres fissures.</p>
        }
        nez={<p>Face rose peu poilue, semblable à celle de MM.</p>}
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
            <li>Le tragus est plus petit que la moitié de l'oreille.</li>
          </ul>
        }
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
  [SP.MD]: {
    name: 'Myotis dasycneme',
    displayName: <FormattedMessage id="species.MD" />,
    short: <FormattedMessage id="species.description.MD.short" />,
    image:
      '/assets/img/species/sp/csm_MyotisDasycneme_JeanLouisGathoye__4__2b633ca0eb.jpg',
    description: (
      <SpeciesCard
        fiche={
          <ul className="list-decimal ml-4">
            <li>Taille (tête + corps) : 57-68 mm - grand</li>
            <li>Rareté : AR - assez rare</li>
            <li>Gîtes d’hiver : cavités, bâtiments</li>
            <li>
              Position dans la cavité : pend librement, mais aussi parfois dans
              des fissures ou des trous
            </li>
            <li>Température : variable</li>
          </ul>
        }
        position={
          <ul className="list-decimal ml-4">
            <li>La forme générale est très allongée, rectangulaire.</li>
            <li>Malgré la ressemblance, il est plus grand que Md.</li>
          </ul>
        }
        bras={
          <ul className="list-decimal ml-4">
            <li>Avant-bras épais, forts et brun rougeâtres.</li>
            <li>Les coudes sont parfois fort écartés du corps.</li>
          </ul>
        }
        nez={
          <p>
            Museau coupé en 2 lobes, donnant une impression de 2 petites boules
            côte à côte.
          </p>
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
        pelage={<p>Le dos est cacao, contrastant bien avec le ventre blanc.</p>}
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
  [SP.Md]: {
    name: 'Myotis daubentonii',
    displayName: <FormattedMessage id="species.Md" />,
    short: <FormattedMessage id="species.description.Md.short" />,
    image:
      '/assets/img/species/sp/csm_MyotisDaubentoni_JeanLouisGathoye__8__4008c0ca94.jpg',
    description: (
      <SpeciesCard
        fiche={
          <ul className="list-decimal ml-4">
            <li>Taille (tête + corps) : 40-60 mm - petit/moyen</li>
            <li>Rareté : C - commun</li>
            <li>Gîtes d’hiver : cavités, fissures dans les ponts</li>
            <li>
              Position dans la cavité : le plus souvent accroché à la paroi,
              mais aussi dans les fissures, ou rarement, pend librement
            </li>
            <li>Température : variable</li>
          </ul>
        }
        bras={<p>Avant-bras et poignet plus épais/forts que chez Mmba.</p>}
        nez={
          <ul className="list-decimal ml-4">
            <li>Museau rosé, il est plus clair que chez Mmba.</li>
            <li>
              Dans les cas les plus clairs, on voit souvent un rectangle rose
              bien marqué.
            </li>
            <li>Plus court et trapu que chez Mn.</li>
          </ul>
        }
        oreilles={
          <ul className="list-decimal ml-4">
            <li>
              Petites et peu proéminentes, ne dépassant (quasi) pas le museau
              vers l'avant.
            </li>
            <li>Traguts assez court, se terminant en pointe arrondie.</li>
            <li>L'angle entre les oreilles est d'environ 120°.</li>
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
        divers={
          <ul className="list-decimal ml-4">
            <li>
              La couleur de la peau (oreilles et ailes) contraste peu avec la
              couleur brun/gris du pelage dorsal, ce qui lui donne un aspect
              bicolore.
            </li>
            <li>
              Les pieds sont grands, caractéristiques, c’est un bon critère de
              différentiation avec Mmba.
            </li>
            <li>Présence de grands poils sur les orteils.</li>
          </ul>
        }
      />
    ),
    genus: 1,
  },
  [SP.ME]: {
    name: 'Myotis emarginatus',
    displayName: <FormattedMessage id="species.ME" />,
    short: <FormattedMessage id="species.description.ME.short" />,
    image:
      '/assets/img/species/sp/csm_MyotisEmarginatus_JeanLouisGathoye__10__b53c6c4b17.jpg',
    description: (
      <SpeciesCard
        fiche={
          <ul className="list-decimal ml-4">
            <li>Taille (tête + corps) : 41-53 mm - moyen</li>
            <li>Rareté : AR - assez rare</li>
            <li>Gîtes d’hiver : cavités souterraines</li>
            <li>
              Position dans la cavité : pend souvent librement, aime se coller
              aux autres
            </li>
            <li>Température : assez thermophile, jusqu'à 9°c</li>
          </ul>
        }
        position={
          <ul className="list-decimal ml-4">
            <li>
              Corps en forme de losange (coudes bien écartés du corps), vu de
              face, les poignets cachent souvent les oreilles.
            </li>
            <li>
              Ils pendent le plus souvent librement dans les secteurs chauds des
              cavités.
            </li>
            <li>
              Ils se regroupent régulièrement en grappe dense (de deux à
              plusieurs dizaines d’individus).
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
              L'échancrure de l’oreille est en réalité un lobe (présent
              également chez la plupart des autres Myotis mais beaucoup plus
              haut chez Myotis emarginatus). Ce lobe peut être visible en hiver.
              Le tragus n'atteint pas l'échancrure
            </li>
            <li>
              Vu de face, les oreilles sont plus ou moins parallèles, ou avec un
              angle réduit.
            </li>
          </ul>
        }
        pelage={
          <ul className="list-decimal ml-4">
            <li>
              Pelage laineux et dense, parfois un pelage de chien mouillé
              (aspect strié).
            </li>
            <li>
              Le dos a une couleur rousse typique, et le ventre, peu contrasté
              avec le dos, est brun clair, beige, caractéristique aussi.
            </li>
            <li>5% des individus sont mélaniques.</li>
          </ul>
        }
      />
    ),
    genus: 1,
  },
  [SP.MM]: {
    name: 'Myotis myotis',
    displayName: <FormattedMessage id="species.MM" />,
    short: <FormattedMessage id="species.description.MM.short" />,
    image:
      '/assets/img/species/sp/csm_MyotisMyotis_JeanLouisGathoye__19__d64285c806.jpg',
    description: (
      <SpeciesCard
        fiche={
          <ul className="list-decimal ml-4">
            <li>Taille (tête + corps) : 67-80 mm - grand</li>
            <li>Rareté : AR - assez rare</li>
            <li>Gîtes d’hiver : cavités souterraines</li>
            <li>
              Position dans la cavité : pend souvent librement, parfois accroché
              à la paroi
            </li>
            <li>Température : variable</li>
          </ul>
        }
        position={
          <ul className="list-decimal ml-4">
            <li>
              Le corps a une forme générale de sac à patates (en raison des
              nombreuses bosses) parfois plutôt de losange.
            </li>
            <li>
              Il pend généralement librement, souvent en haut, mais on peut le
              retrouver accroché à la paroi.
            </li>
          </ul>
        }
        nez={
          <p>
            Museau très proéminent ("museau de berger allemand"); peu poilu.
          </p>
        }
        oreilles={
          <p>
            Oreilles grandes, luisantes, dépassant du museau. Elles n'atteignent
            que 1/4 à 1/5 de la longueur du corps.
          </p>
        }
        pelage={
          <ul className="list-decimal ml-4">
            <li>Ventre très blanc, très contrasté avec le dos.</li>
            Implant caractéristique des poils au niveau du front : cela fait
            penser à un début de calvitie frontale.
          </ul>
        }
      />
    ),
    genus: 1,
  },
  [SP.Mmba]: {
    name: 'Myotis mystacinus & cie',
    displayName: <FormattedMessage id="species.Mmba" />,
    short: <FormattedMessage id="species.description.Mmba.short" />,
    image:
      '/assets/img/species/sp/csm_MyotisMystacinusBrandtii_JeanLouisGathoye__17__9988b4d2fd.jpg',
    description: (
      <SpeciesCard
        fiche={
          <ul className="list-decimal ml-4">
            <li>Taille (tête + corps) : 35-51 mm - petit</li>
            <li>Rareté : C - commun</li>
            <li>Gîtes d’hiver : cavités, bâtiments</li>
            <li>
              Position dans la cavité : souvent accroché à la paroi, mais aussi
              dans les fissures, ou plus rarement, pend librement
            </li>
            <li>
              Température : peut se rencontrer dans les zones assez froides (5°C
              et moins)
            </li>
          </ul>
        }
        generalities={
          <p>
            La distinction entre ces trois espèces (Murin à moustaches, de
            Brandt, d’Alcathoé) est extrêmement difficile en hibernation, on les
            notera quasi toujours comme un seul taxon : Mmba.
          </p>
        }
        bras={
          <p>
            Avant-bras et poignet généralement plus fins, plus petits que chez
            Md.
          </p>
        }
        nez={
          <ul className="list-decimal ml-4">
            <li>Vu de face, un masque noir ou V noir caractéristique</li>
            <li>
              Museau petit, peu proéminent et foncé (rose foncé à noirâtre).
            </li>
          </ul>
        }
        oreilles={
          <ul className="list-decimal ml-4">
            <li>Tragus pointu, long et effilé ; échancrure assez nette.</li>
            <li>L'angle entre les oreilles est d'environ 90°.</li>
          </ul>
        }
        pelage={
          <p>
            Ventre plus clair que le dos, plutôt beige (pas blanc). Il est moins
            "propre" que les autres Myotis.
          </p>
        }
        divers={
          <ul className="list-decimal ml-4">
            <li>
              Couleur de peau contraste fortement tant avec le dos qu'avec le
              ventre : ça lui donne un aspect tricolore.
            </li>
            <li>
              Par rapport à Md, les pieds sont petits (moins de la moitié du
              tibia) et sans poils longs sur les orteils.
            </li>
          </ul>
        }
      />
    ),
    genus: 1,
  },
  [SP.Mn]: {
    name: 'Myotis nattereri',
    displayName: <FormattedMessage id="species.Mn" />,
    short: <FormattedMessage id="species.description.Mn.short" />,
    image:
      '/assets/img/species/sp/csm_MyotisNattereri_JeanLouisGathoye_c2d3ecfe36.jpg',
    description: (
      <SpeciesCard
        fiche={
          <ul className="list-decimal ml-4">
            <li>Taille (tête + corps) : 41-55 mm - moyen</li>
            <li>Rareté : AC - assez commun</li>
            <li>Gîtes d’hiver : cavités souterraines</li>
            <li>
              Position dans la cavité : souvent au fond de fissures, parfois
              accroché à la paroi
            </li>
            <li>
              Température : variable, supporte souvent des conditions très
              fraiches
            </li>
          </ul>
        }
        position={
          <ul className="list-decimal ml-4">
            <li>Corps trapu, avec une forme générale ovale.</li>
            <li>
              Il se coince souvent au fond de fissures ou de trous. Il peut
              pendre avec le ventre contre la paroi.
            </li>
          </ul>
        }
        nez={<p>Museau rosé, comme Md, mais plus fin et plus allongé.</p>}
        oreilles={
          <ul className="list-decimal ml-4">
            <li>
              Oreilles assez longues, claires, parcheminées et translucides (les
              veines sont visibles par transparence).
            </li>
            <li>
              Le tragus est très long et effilé, dépassant la moitié de
              l’oreille.
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
  [SP.Pleaur]: {
    name: 'Plecotus auritus',
    displayName: <FormattedMessage id="species.Pleaur" />,
    short: <FormattedMessage id="species.description.Pleaur.short" />,
    image:
      '/assets/img/species/sp/csm_PlecotusAuritus_Jean-LouisGathoye_3__fdabb410b3.jpg',
    description: (
      <SpeciesCard
        fiche={
          <ul className="list-decimal ml-4">
            <li>Taille (tête + corps) : 41-58 mm - moyen</li>
            <li>Rareté : AC - assez commun</li>
            <li>Gîtes d’hiver : bâtiments, cavités</li>
            <li>
              Position dans la cavité : suspendu au plafond ou à la paroi,
              souvent blotti dans une fissure près de l'entrée
            </li>
            <li>
              Température : supporte des températures assez basses, mais peut
              être en des endroits plus chauds
            </li>
          </ul>
        }
        generalities={<p>Corps assez ramassé, s’inscrivant dans un ovale.</p>}
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
        oreilles={
          <ul className="list-decimal ml-4">
            <li>
              Oreilles repliées vers l’arrière, sous les ailes durant
              l’hibernation.
            </li>
            <li>
              Seuls les tragus dépassent (pouvant laisser l’impression qu’il
              s’agit des oreilles).
            </li>
            <li>
              Tragus long et effilé, en pointe régulière, souvent entièrement
              rosé.
            </li>
          </ul>
        }
        pelage={<p>Pelage dorsal lâche et long, à tendance brun-roux.</p>}
        divers={
          <ul className="list-decimal ml-4">
            <li>
              Présence de deux grosses "verrues" bien marquées entre les yeux,
              dont le diamètre est égal à celui de l’œil.
            </li>
            <li>Présence de très longs poils sur les orteils.</li>
          </ul>
        }
      />
    ),
    genus: 3,
  },
  [SP.Pleaus]: {
    name: 'Plecotus austriacus',
    displayName: <FormattedMessage id="species.Pleaus" />,
    short: <FormattedMessage id="species.description.Pleaus.short" />,
    image:
      '/assets/img/species/sp/csm_PlecotusAustriacus_MarcPaquay_fa4330070c.jpg',
    description: (
      <SpeciesCard
        fiche={
          <ul className="list-decimal ml-4">
            <li>Taille (tête + corps) : 41-58 mm - moyen</li>
            <li>Rareté : R - rare</li>
            <li>Gîtes d’hiver : bâtiments, cavités</li>
            <li>
              Position dans la cavité : suspendu au plafond ou à la paroi,
              souvent blotti dans une fissure près de l'entrée
            </li>
            <li>
              Température : supporte des températures assez basses, mais peut
              être en des endroits plus chauds
            </li>
          </ul>
        }
        generalities={<p>Corps assez ramassé, s’inscrivant dans un ovale.</p>}
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
        oreilles={
          <ul className="list-decimal ml-4">
            <li>
              Oreilles repliées vers l’arrière, sous les ailes durant
              l’hibernation.
            </li>
            <li>
              Seuls les tragus dépassent (pouvant laisser l’impression qu’il
              s’agit des oreilles).
            </li>
            <li>Tragus long et effilé, en pointe régulière, souvent foncé.</li>
          </ul>
        }
        pelage={<p>Pelage dorsal lâche et long, à tendance grise.</p>}
        divers={
          <ul className="list-decimal ml-4">
            <li>
              Présence de deux grosses "verrues" peu marquées entre les yeux,
              dont le diamètre est inférieur à celui de l’œil.
            </li>
            <li>Présence de poils courts sur les orteils.</li>
          </ul>
        }
      />
    ),
    genus: 3,
  },
  [SP.Pipsp]: {
    name: 'Pipistrellus sp.',
    displayName: <FormattedMessage id="species.Pipsp" />,
    short: <FormattedMessage id="species.description.Pipsp.short" />,
    image:
      '/assets/img/species/sp/csm_PipistrellusPipistrellus_GillesSanMartin__2__e6dc29f588.jpg',
    description: (
      <SpeciesCard
        fiche={
          <ul className="list-decimal ml-4">
            <li>Taille (tête + corps) : 32-55 mm - petit</li>
            <li>Rareté : CC - très commun</li>
            <li>Gîtes d’hiver : bâtiments, rarement cavités</li>
            <li>
              Position dans la cavité : le plus souvent groupés dans des
              fissures profondes et étroites à proximité des entrées
            </li>
            <li>
              Température : supporte des températures assez basses – souvent
              dans des sites très secs
            </li>
          </ul>
        }
        position={
          <p>
            Les pipistrelles s’observent rarement en cavité souterraine. Quand
            on les trouve, c'est souvent dans des fissures, en groupe compact.
          </p>
        }
        oreilles={
          <p>
            Oreilles petites, noires et souvent arrondies, avec un tragus
            arrondi et assez court.
          </p>
        }
        pelage={
          <p>Pelage globalement foncé, contraste dos-ventre peu marqué.</p>
        }
        divers={
          <ul className="list-decimal ml-4">
            <li>Peau très foncée.</li>
            <li>
              À ne pas confondre avec Mmba, il faut regarder le contraste
              dos/ventre et les oreilles et tragus qui sont plus arrondis chez
              les pipistrelles.
            </li>
          </ul>
        }
      />
    ),
    genus: 5,
  },
  [SP.Rf]: {
    name: 'Rhinolophus ferrumequinum',
    displayName: <FormattedMessage id="species.Rf" />,
    short: <FormattedMessage id="species.description.Rf.short" />,
    image:
      '/assets/img/species/sp/csm_RhinolophusFerrumequinum_JeanLouisGathoye__14__ab7aadace2.jpg',
    description: (
      <SpeciesCard
        fiche={
          <ul className="list-decimal ml-4">
            <li>Taille (tête + corps) : 57-71 mm - grand</li>
            <li>Rareté : RR - rarissime</li>
            <li>Gîtes d’hiver : cavités souterraines</li>
            <li>Position dans la cavité : pend librement</li>
            <li>Température : thermophile - 7 à 11°C</li>
          </ul>
        }
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
            <li>Très sensibles au dérangement !</li>
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
        oreilles={
          <ul className="list-decimal ml-4">
            <li>
              Oreilles pointues, avec l'extrémité courbée vers l'extérieur.
            </li>
            <li>Ils n'ont pas de tragus.</li>
          </ul>
        }
        pelage={
          <p>
            Dos roussâtre, ventre blanc sale, peu contrasté avec le dos.
            Rarement visible en hibernation.
          </p>
        }
        divers={<p>Queue repliée sur le dos</p>}
      />
    ),
    genus: 2,
  },
  [SP.Rh]: {
    name: 'Rhinolophus hipposideros',
    displayName: <FormattedMessage id="species.Rh" />,
    short: <FormattedMessage id="species.description.Rh.short" />,
    image:
      '/assets/img/species/sp/csm_RinolophusHipposideros_Jorquenay_LucMalchair_b77187bc5c.jpg',
    description: (
      <SpeciesCard
        fiche={
          <ul className="list-decimal ml-4">
            <li>Taille (tête + corps) : 37-45 mm - petit</li>
            <li>Rareté : RR - rarissime</li>
            <li>Gîtes d’hiver : cavités souterraines</li>
            <li>Position dans la cavité : pend librement</li>
            <li>Température : thermophile - 7 à 11°C</li>
          </ul>
        }
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
            <li>
              Ils pendent toujours librement et sont enroulés dans leurs ailes.
            </li>
            <li>Très sensibles au dérangement !</li>
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
        oreilles={
          <ul className="list-decimal ml-4">
            <li>
              Oreilles pointues, avec l'extrémité courbée vers l'extérieur.
            </li>
            <li>Ils n'ont pas de tragus.</li>
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
};
