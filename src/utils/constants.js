export const quiz = {
  "plecotus-hiver": {
    title: "Recensement hivernaux",
    description: "Trouver l'espèce qui se cache derrière cette photo !",
    questions: [
      {
        imageId: [3],
        rightAnswer: 1, // Rh
        imageAnswer: undefined, // Si absent, l'image de la question est utilisée
      },
      {
        imageId: [11],
        rightAnswer: 2, // Rf
        imageAnswer: undefined, // Si absent, l'image de la question est utilisée
      },
      {
        imageId: [17],
        rightAnswer: 3, // Pleaur
        imageAnswer: undefined, // Si absent, l'image de la question est utilisée
      },
      {
        imageId: [5],
        rightAnswer: 4, // Pleaus
        imageAnswer: undefined, // Si absent, l'image de la question est utilisée
      },
      {
        imageId: [10],
        rightAnswer: 5, // Mmba
        imageAnswer: undefined, // Si absent, l'image de la question est utilisée
      },
      {
        imageId: [12],
        rightAnswer: 6, // Md
        imageAnswer: undefined, // Si absent, l'image de la question est utilisée
      },
      {
        imageId: [14, 15],
        rightAnswer: 7, // MD
        imageAnswer: undefined, // Si absent, l'image de la question est utilisée
      },
      {
        imageId: [18],
        rightAnswer: 8, // ME
        imageAnswer: undefined, // Si absent, l'image de la question est utilisée
      },
      {
        imageId: [13],
        rightAnswer: 9, // Mn
        imageAnswer: undefined, // Si absent, l'image de la question est utilisée
      },
      {
        imageId: [1, 16],
        rightAnswer: 10, // MB
        imageAnswer: undefined, // Si absent, l'image de la question est utilisée
      },
      {
        imageId: [2, 6, 7, 8, 9],
        rightAnswer: 11, // MM
        imageAnswer: undefined, // Si absent, l'image de la question est utilisée
      },
      {
        imageId: [],
        rightAnswer: 12, // Barbar
        imageAnswer: undefined, // Si absent, l'image de la question est utilisée
      },
      {
        imageId: [],
        rightAnswer: 13, // Pipsp
        imageAnswer: undefined, // Si absent, l'image de la question est utilisée
      },
      {
        imageId: [19],
        rightAnswer: 14, // Eptser
        imageAnswer: undefined, // Si absent, l'image de la question est utilisée
      },
    ],
  },
};

export const images = [
  {
    id: 1,
    title: "Murin de Bechstein",
    url: "./static/img/MB/P1020489.JPG",
    authorId: 2,
    place: "Rochefort",
    description: undefined,
  },
  {
    id: 2,
    title: "Grand Murin",
    url: "./static/img/MM/P1040842.JPG",
    authorId: 2,
    place: "Otré",
    description: undefined,
  },
  {
    id: 3,
    title: "Petit rhinolophe",
    url: "./static/img/Rh/DSC04546.JPG",
    authorId: 2,
    place: "Rochefort",
    description: undefined,
  },
  {
    id: 4,
    title: "Barbastelle",
    url: "https://plecotus.natagora.be/fileadmin/_processed_/b/9/csm_BarbastellaBarbastellus_JeanLouisGathoye__10__162fa6628a.jpg",
    authorId: undefined,
    place: undefined,
    description: undefined,
  },
  {
    id: 5,
    title: "Oreillard gris",
    url: "./static/img/Pleaus/DSC_9374.JPG",
    authorId: 2,
    place: undefined,
    description: undefined,
  },
  {
    id: 6,
    title: "Grand Murin",
    url: "./static/img/MM/110302 006.JPG",
    authorId: 2,
    place: "Rochefort",
    description: undefined,
  },
  {
    id: 7,
    title: "Grand Murin",
    url: "./static/img/MM/20110424 002.JPG",
    authorId: 2,
    place: "Rochefort",
    description: undefined,
  },
  {
    id: 8,
    title: "Grand Murin",
    url: "./static/img/MM/DSC07137.JPG",
    authorId: 2,
    place: "Hastière",
    description: undefined,
  },
  {
    id: 9,
    title: "Grand Murin",
    url: "./static/img/MM/DSC07167.JPG",
    authorId: 2,
    place: "Han-sur-Lesse",
    description: undefined,
  },
  {
    id: 10,
    title: "Murin à moustaches",
    url: "./static/img/Mmba/P1040808.JPG",
    authorId: 2,
    place: "Montaigle",
    description: undefined,
  },
  {
    id: 11,
    title: "Grand rhinolophe",
    url: "./static/img/Rf/P1040812.JPG",
    authorId: 2,
    place: "Durnal",
    description: undefined,
  },
  {
    id: 12,
    title: "Murin de Daubenton",
    url: "./static/img/Md/P1010182.JPG",
    authorId: 2,
    place: "Hotton",
    description: undefined,
  },
  {
    id: 13,
    title: "Murin de Natterer",
    url: "./static/img/Mn/P1020544.JPG",
    authorId: 2,
    place: "Hotton",
    description: undefined,
  },
  {
    id: 14,
    title: "Murin des marais",
    url: "./static/img/MD/DSC_2031.JPG",
    authorId: 2,
    place: "Lanaye",
    description: undefined,
  },
  {
    id: 15,
    title: "Murin des marais",
    url: "./static/img/MD/IMAGE_17.jpg",
    authorId: 2,
    place: "Rochefort",
    description: undefined,
  },
  {
    id: 16,
    title: "Murin de Bechstein",
    url: "./static/img/MB/DSC_6718.jpg",
    authorId: 2,
    place: "Rochefort",
    description: undefined,
  },
  {
    id: 17,
    title: "Oreillard roux",
    url: "./static/img/Pleaur/20110131 010.JPG",
    authorId: 2,
    place: "Briscol",
    description: undefined,
  },
  {
    id: 18,
    title: "Murins à oreilles échancrées",
    url: "./static/img/ME/DSC_6648.jpg",
    authorId: 2,
    place: "La Malonne, Cuesmes",
    description: undefined,
  },
  {
    id: 19,
    title: "Sérotine commune",
    url: "./static/img/Eptser/DSC09710c.jpg",
    authorId: 2,
    place: "Purnode",
    description: undefined,
  },
];

export const authors = [
  {
    id: 1,
    name: "Lebon",
    firstname: "Lionel",
    mail: undefined,
    url: "https://www.instagram.com/lebolnobel/",
  },
  {
    id: 2,
    name: "Smits",
    firstname: "Quentin",
    mail: undefined,
    url: "https://photos.google.com/share/AF1QipNJ-gMv6hbSQcTJHKhY-Xx8DEtVAA6Ir95CF412tZEUmWz6J-JjYqm4xc2Vnp8Nyg?key=QW53X0dFbkpQLWZSdjVGcDRZb0RjQ3ZPSTFoV2xR",
  },
];

export const genera = [
  {
    id: 1,
    name: "Myotis",
    displayName: "Murin",
  },
  {
    id: 2,
    name: "Rhinolophus",
    displayName: "Rhinolophe",
  },
  {
    id: 3,
    name: "Plecotus",
    displayName: "Oreillard",
  },
  {
    id: 4,
    name: "Barbastella",
    displayName: "Barbastelle",
  },
  {
    id: 5,
    name: "Pipistrellus",
    displayName: "Pipistrelle",
  },
  {
    id: 6,
    name: "Eptesicus",
    displayName: "Sérotine",
  },
];

export const species = [
  {
    id: 1,
    name: "Rhinolophus hipposideros",
    displayName: "Petit rhinolophe",
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
          <ul>
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
    abbr: "Rh",
    genus: 2,
  },
  {
    id: 2,
    name: "Rhinolophus ferrumequinum",
    displayName: "Grand rhinolophe",
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
          <ul>
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
    abbr: "Rf",
    genus: 2,
  },
  {
    id: 3,
    name: "Plecotus auritus",
    displayName: "Oreillard roux",
    description: (
      <p>
        Quelques critères :
        <ul>
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
            l’impression qu’il s’agit des oreilles)
          </li>
          <li>
            Présence de deux grosses "verrues" bien marquées entre les yeux,
            dont le diamètre est égal à celui de l’œil.
          </li>
        </ul>
      </p>
    ),
    abbr: "Pleaur",
    genus: 3,
  },
  {
    id: 4,
    name: "Plecotus austriacus",
    displayName: "Oreillard gris",
    description: (
      <p>
        Quelques critères :
        <ul>
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
            l’impression qu’il s’agit des oreilles)
          </li>
          <li>
            Présence de deux petites « verrues » peu marquées entre les yeux,
            dont le diamètre est inférieur à celui de l’œil.
          </li>
        </ul>
      </p>
    ),
    abbr: "Pleaus",
    genus: 3,
  },
  {
    id: 5,
    name: "Myotis mystacinus, brandtii, alcathoe",
    displayName: "Murin à moustaches, de Brandt, d’Alcathoe",
    description: (
      <>
        <p>
          <em>
            La distinction entre ces trois espèces est extrêmement difficile en
            hibernation, on les notera quasi toujours comme un seul taxon
          </em>
        </p>
        <p>
          Quelques critères :
          <ul>
            <li>Vu de face, un masque noir ou V noir caractéristique.</li>
            <li>
              Museau petit, peu proéminent et foncé (rose foncé à noirâtre).
            </li>
            <li>L'angle entre les oreilles est d'environ 90°</li>
            <li>
              ventre plus clair que le dos, plutôt beige (pas blanc). Il est
              moins "propre" que les autres Myotis.
            </li>
          </ul>
        </p>
      </>
    ),
    abbr: "Mmba",
    genus: 1,
  },
  {
    id: 6,
    name: "Myotis daubentonii",
    displayName: "Murin de Daubenton",
    description: (
      <p>
        Quelques critères :
        <ul>
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
    abbr: "Md",
    genus: 1,
  },
  {
    id: 7,
    name: "Myotis dasycneme",
    displayName: "Murin des marais",
    description: (
      <p>
        Quelques critères :
        <ul>
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
            insectes à la surface de l’eau
          </li>
        </ul>
      </p>
    ),
    abbr: "MD",
    genus: 1,
  },
  {
    id: 8,
    name: "Myotis emarginatus",
    displayName: "Murin à oreilles échancrées",
    description: (
      <p>
        Quelques critères :
        <ul>
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
          <li>5% des individus sont mélaniques</li>
        </ul>
      </p>
    ),
    abbr: "ME",
    genus: 1,
  },
  {
    id: 9,
    name: "Myotis nattereri",
    displayName: "Murin de Natterer",
    description: (
      <p>
        Quelques critères :
        <ul>
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
    abbr: "Mn",
    genus: 1,
  },
  {
    id: 10,
    name: "Myotis bechsteinii",
    displayName: "Murin de Bechstein",
    description: (
      <p>
        Quelques critères :
        <ul>
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
          <li>C'est la plus grande de nos chauve-souris, près de 8cm</li>
        </ul>
      </p>
    ),
    abbr: "MB",
    genus: 1,
  },
  {
    id: 11,
    name: "Myotis myotis",
    displayName: "Grand murin",
    description: (
      <p>
        Quelques critères :
        <ul>
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
    abbr: "MM",
    genus: 1,
  },
  {
    id: 12,
    name: "Barbastella barbastellus",
    displayName: "Barbastelle",
    description: (
      <>
        <p>
          <em>Il s'agit d'une espèce évidente</em>
        </p>
        <p>
          Quelques critères :
          <ul>
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
    abbr: "Barbar",
    genus: 4,
  },
  {
    id: 13,
    name: "Pipistrellus sp.",
    displayName: "Pipistrelles - 3 espèces",
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
          <ul>
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
    abbr: "Pipsp",
    genus: 5,
  },
  {
    id: 14,
    name: "Eptesicus serotinus",
    displayName: "Sérotine commune",
    description: (
      <p>
        Quelques critères :
        <ul>
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
    abbr: "Eptser",
    genus: 6,
  },
];
