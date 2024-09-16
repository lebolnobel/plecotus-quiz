import { SP } from './species.tsx';

export type ImageType = {
  speciesId: string;
  title: string;
  url: string;
  authorId?: number;
  place?: string;
  description?: string;
};

// Used this to display a specific image as anwser!
// Update quiz.ts to add the corresponding imageId
export const answerImages: { [key: string]: ImageType } = {};

// Images used for question
export const images: Array<ImageType> = [
  {
    speciesId: SP.MB,
    title: 'Murin de Bechstein',
    url: './assets/img/species/P1020489.jpg',
    authorId: 2,
    place: 'Rochefort',
    description: undefined,
  },
  {
    speciesId: SP.MM,
    title: 'Grand Murin',
    url: './assets/img/species/P1040842.jpg',
    authorId: 2,
    place: 'Otré',
    description: undefined,
  },
  {
    speciesId: SP.Barbar,
    title: 'Barbastelle',
    url: 'https://plecotus.natagora.be/fileadmin/_processed_/b/9/csm_BarbastellaBarbastellus_JeanLouisGathoye__10__162fa6628a.jpg',
    authorId: 3,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.MM,
    title: 'Grand Murin',
    url: './assets/img/species/4dcbf6c4-06a1-4f40-947b-9d5a0b1cdb9c.jpg',
    authorId: 2,
    place: 'Rochefort',
    description: undefined,
  },
  {
    speciesId: SP.MM,
    title: 'Grand Murin',
    url: './assets/img/species/608835ce-19a5-43e5-9ad5-7627d625e911.jpg',
    authorId: 2,
    place: 'Rochefort',
    description: undefined,
  },
  {
    speciesId: SP.MM,
    title: 'Grand Murin',
    url: './assets/img/species/DSC07137.jpg',
    authorId: 2,
    place: 'Hastière',
    description: undefined,
  },
  {
    speciesId: SP.MM,
    title: 'Grand Murin',
    url: './assets/img/species/DSC07167.jpg',
    authorId: 2,
    place: 'Han-sur-Lesse',
    description: undefined,
  },
  {
    speciesId: SP.Mmba,
    title: 'Murin à moustaches',
    url: './assets/img/species/P1040808.jpg',
    authorId: 2,
    place: 'Montaigle',
    description: undefined,
  },
  {
    speciesId: SP.Rf,
    title: 'Grand rhinolophe',
    url: './assets/img/species/P1040812.jpg',
    authorId: 2,
    place: 'Durnal',
    description: undefined,
  },
  {
    speciesId: SP.Md,
    title: 'Murin de Daubenton',
    url: './assets/img/species/P1010182.jpg',
    authorId: 2,
    place: 'Hotton',
    description: undefined,
  },
  {
    speciesId: SP.Mn,
    title: 'Murin de Natterer',
    url: './assets/img/species/P1020544.jpg',
    authorId: 2,
    place: 'Hotton',
    description: undefined,
  },
  {
    speciesId: SP.MD,
    title: 'Murin des marais',
    url: './assets/img/species/6d7677aa-df0a-4166-aa40-abadb45ffb6c.jpg',
    authorId: 2,
    place: 'Rochefort',
    description: undefined,
  },
  {
    speciesId: SP.Pleaur,
    title: 'Oreillard roux',
    url: './assets/img/species/dc19ce8d-6226-48f6-bb0c-4ee0b057ca1d.jpg',
    authorId: 2,
    place: 'Briscol',
    description: undefined,
  },
  {
    speciesId: SP.ME,
    title: 'Murins à oreilles échancrées',
    url: './assets/img/species/DSC_6648.jpg',
    authorId: 2,
    place: 'La Malonne, Cuesmes',
    description: undefined,
  },
  {
    speciesId: SP.Eptser,
    title: 'Sérotine commune',
    url: './assets/img/species/DSC09710c.jpg',
    authorId: 2,
    place: 'Purnode',
    description: undefined,
  },
  {
    speciesId: SP.Rf,
    title: 'Grand Rhinolophe',
    url: './assets/img/species/b1152e4b-8a18-49d3-936b-36a9e650ea4e.jpg',
    authorId: 1,
    place: 'Florenville',
    description: undefined,
  },
  {
    speciesId: SP.MM,
    title: 'Grand Murin',
    url: './assets/img/species/DSC_1379.jpg',
    authorId: 2,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.MM,
    title: 'Grand Murin',
    url: './assets/img/species/DSC_6640.jpg',
    authorId: 2,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.MM,
    title: 'Grand Murin',
    url: './assets/img/species/DSC03215_1.jpg',
    authorId: 2,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.MM,
    title: 'Grand Murin',
    url: './assets/img/species/DSC03323_1.jpg',
    authorId: 2,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.MM,
    title: 'Grand Murin',
    url: './assets/img/species/P1010053.jpg',
    authorId: 2,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Barbar,
    title: "Barbastelle d'Europe",
    url: './assets/img/species/DSC06717c.jpg',
    authorId: 2,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Pleaur,
    title: 'Oreillard roux',
    url: './assets/img/species/DSC06762.jpg',
    authorId: 2,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Pleaur,
    title: 'Oreillard roux',
    url: './assets/img/species/DSC06770.jpg',
    authorId: 2,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.MB,
    title: 'Murin de Bechstein',
    url: './assets/img/species/DSC02969.jpg',
    authorId: 2,
    place: 'Han-sur-Lesse',
    description: undefined,
  },
  {
    speciesId: SP.Mmba,
    title: 'Murin de Brandt',
    url: './assets/img/species/DSC02957.jpg',
    authorId: 2,
    place: 'Rochefort',
    description: undefined,
  },
  {
    speciesId: SP.Rf,
    title: 'Grand Rhino',
    url: './assets/img/species/DSC02910c.jpg',
    authorId: 2,
    place: 'Freyr',
    description: undefined,
  },
  {
    speciesId: SP.Md,
    title: 'Murin de Daubenton',
    url: './assets/img/species/DSC02905c.jpg',
    authorId: 2,
    place: 'Yvoir',
    description: undefined,
  },
  {
    speciesId: SP.Mmba,
    title: 'Mmba',
    url: './assets/img/species/DSC09937.jpg',
    authorId: 2,
    place: 'Rochefort',
    description: undefined,
  },
  {
    speciesId: SP.Rh,
    title: 'Petit Rhino',
    url: './assets/img/species/DSC09759.jpg',
    authorId: 2,
    place: 'Géromont',
    description: undefined,
  },
  {
    speciesId: SP.Pipsp,
    title: 'Pipistrelle',
    url: './assets/img/species/DSC09711c.jpg',
    authorId: 2,
    place: 'Purnode',
    description: undefined,
  },
  {
    speciesId: SP.Pleaur,
    title: 'Oreillard roux',
    url: './assets/img/species/DSC09257.jpg',
    authorId: 2,
    place: 'Rochefort',
    description: undefined,
  },
  {
    speciesId: SP.ME,
    title: 'Murins à oreilles échancrées',
    url: './assets/img/species/DSC07416c.jpg',
    authorId: 2,
    place: 'Rochefort',
    description: undefined,
  },
  {
    speciesId: SP.Rh,
    title: 'Petit Rhino',
    url: './assets/img/species/DSC07179c.jpg',
    authorId: 2,
    place: 'Grune',
    description: undefined,
  },
  {
    speciesId: SP.ME,
    title: 'ME',
    url: './assets/img/species/DSC07131c.jpg',
    authorId: 2,
    place: 'Hastière',
    description: undefined,
  },
  {
    speciesId: SP.Mmba,
    title: 'Murin de Brandt',
    url: './assets/img/species/DSC07084c.jpg',
    authorId: 2,
    place: 'Rochefort',
    description: undefined,
  },
  {
    speciesId: SP.MB,
    title: 'MB',
    url: './assets/img/species/DSC07070c.jpg',
    authorId: 2,
    place: 'Pont-à-Lesse',
    description: undefined,
  },
  {
    speciesId: SP.Md,
    title: 'Md',
    url: './assets/img/species/DSC07067c.jpg',
    authorId: 2,
    place: 'Pont-à-Lesse',
    description: undefined,
  },
  {
    speciesId: SP.ME,
    title: 'ME',
    url: './assets/img/species/DSC06772.jpg',
    authorId: 2,
    place: 'Lanaye',
    description: undefined,
  },
  {
    speciesId: SP.Pleaur,
    title: 'Pleaur',
    url: './assets/img/species/DSC06770_1.jpg',
    authorId: 2,
    place: 'Rochefort',
    description: undefined,
  },
  {
    speciesId: SP.Mn,
    title: 'Mn',
    url: './assets/img/species/DSC03479_1.jpg',
    authorId: 2,
    place: 'Wavre',
    description: undefined,
  },
  {
    speciesId: SP.Mmba,
    title: 'Mmba',
    url: './assets/img/species/DSC03310_1.jpg',
    authorId: 2,
    place: 'Rochefort',
    description: undefined,
  },
  {
    speciesId: SP.Mn,
    title: 'Mn',
    url: './assets/img/species/DSC02857_1.jpg',
    authorId: 2,
    place: 'Lanaye',
    description: undefined,
  },
  {
    speciesId: SP.MD,
    title: 'MD',
    url: './assets/img/species/DSC02852.jpg',
    authorId: 2,
    place: 'Lanaye',
    description: undefined,
  },
  {
    speciesId: SP.Eptser,
    title: 'Serotine',
    url: './assets/img/species/DSC_2225.NEF.jpg',
    authorId: 2,
    place: 'Villers-devant-Orval',
    description: undefined,
  },
  {
    speciesId: SP.Mn,
    title: 'Mn',
    url: './assets/img/species/DSC_1077.jpg',
    authorId: 2,
    place: 'Lanaye',
    description: undefined,
  },
  {
    speciesId: SP.Md,
    title: 'Md',
    url: './assets/img/species/DSC_7944.jpg',
    authorId: 2,
    place: 'Nettine',
    description: undefined,
  },
  {
    speciesId: SP.MB,
    title: 'MB',
    url: './assets/img/species/1a839f5f-5173-4e06-bd8f-8c510fcac935.jpg',
    authorId: 2,
    place: 'Rochefort',
    description: undefined,
  },
  {
    speciesId: SP.MD,
    title: 'MD',
    url: './assets/img/species/DSC_6632.jpg',
    authorId: 2,
    place: 'La Malonne',
    description: undefined,
  },
  {
    speciesId: SP.ME,
    title: 'ME',
    url: './assets/img/species/DSC_6645.jpg',
    authorId: 2,
    place: 'La Malonne',
    description: undefined,
  },
  {
    speciesId: SP.MD,
    title: 'MD',
    url: './assets/img/species/9db8dfc1-3bb9-44ca-867f-d273bd4effe1.jpg',
    authorId: 2,
    place: 'Lanaye',
    description: undefined,
  },
  {
    speciesId: SP.MB,
    title: 'MB',
    url: './assets/img/species/DSC_2045.jpg',
    authorId: 2,
    place: 'Lanaye',
    description: undefined,
  },
  {
    speciesId: SP.Barbar,
    title: 'Barbar',
    url: './assets/img/species/P1060249.jpg',
    authorId: 2,
    place: 'Luxembourg',
    description: undefined,
  },
  {
    speciesId: SP.Pipsp,
    title: 'Pipsp',
    url: './assets/img/species/7a89e2df-c42c-4e03-b9d4-ea7fd1bee631.jpg',
    authorId: 2,
    place: 'Hour',
    description: undefined,
  },
  {
    speciesId: SP.Eptser,
    title: 'Eptser',
    url: './assets/img/species/DSCN4975.jpg',
    authorId: 2,
    place: 'Furfooz',
    description: undefined,
  },
  {
    speciesId: SP.ME,
    title: 'ME',
    url: './assets/img/species/P1020507.jpg',
    authorId: 2,
    place: 'Hastière',
    description: undefined,
  },
  {
    speciesId: SP.Mn,
    title: 'Mn',
    url: './assets/img/species/P1020450.jpg',
    authorId: 2,
    place: 'Denée',
    description: undefined,
  },
  {
    speciesId: SP.Mmba,
    title: 'Mmba',
    url: './assets/img/species/P1020445.jpg',
    authorId: 2,
    place: 'Denée',
    description: undefined,
  },
  {
    speciesId: SP.Md,
    title: 'Md',
    url: './assets/img/species/P1010220.jpg',
    authorId: 2,
    place: 'Hotton',
    description: undefined,
  },
  {
    speciesId: SP.Eptser,
    title: 'Eptser',
    url: './assets/img/species/P1010197.jpg',
    authorId: 2,
    place: 'Hotton',
    description: undefined,
  },
  {
    speciesId: SP.MD,
    title: 'MD',
    url: './assets/img/species/P1040857.jpg',
    authorId: 2,
    place: 'Challeux',
    description: undefined,
  },
  {
    speciesId: SP.MM,
    title: 'MM',
    url: './assets/img/species/9d6f2fe7-1c27-416a-8473-48c88227dfd5.jpg',
    authorId: 1,
    place: 'Lanaye',
    description: undefined,
  },
  {
    speciesId: SP.MM,
    title: 'MM',
    url: './assets/img/species/ce37a433-db9e-4e13-860b-22eafd0dd8a4.jpg',
    authorId: 1,
    place: 'Lanaye',
    description: undefined,
  },
  {
    speciesId: SP.Pleaur,
    title: 'Pleaur',
    url: './assets/img/species/18240b0f-5fd9-4c18-b325-cb62dd5f9823.jpg',
    authorId: 1,
    place: 'Lanaye',
    description: undefined,
  },
  {
    speciesId: SP.Pleaur,
    title: 'Pleaur',
    url: './assets/img/species/10b72f69-0504-4816-9edc-b83396d8519e.jpg',
    authorId: 1,
    place: 'Villers-la-Ville',
    description: undefined,
  },
  {
    speciesId: SP.Mmba,
    title: 'Mmba',
    url: './assets/img/species/f086fe2e-08f7-48e8-a5d0-078001d439c8.jpg',
    authorId: 1,
    place: 'Villers-la-Ville',
    description: undefined,
  },
  {
    speciesId: SP.Eptser,
    title: 'Eptser',
    url: './assets/img/species/e1677abc-9b44-4dcc-ab33-5cc59c2a8b1e.jpg',
    authorId: 1,
    place: 'Villers-la-Ville',
    description: undefined,
  },
  {
    speciesId: SP.MD,
    title: 'MD',
    url: './assets/img/species/6885827501_1e92f6a227_k.jpg',
    authorId: 4,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Pipsp,
    title: 'Pipsp',
    url: './assets/img/species/5933130195_627371fc0a_k.jpg',
    authorId: 4,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Mmba,
    title: 'Mmba',
    url: './assets/img/species/4482515353_769495e487_k.jpg',
    authorId: 4,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Mmba,
    title: 'Mmba',
    url: './assets/img/species/4482514125_66ed77e67e_k.jpg',
    authorId: 4,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Md,
    title: 'Md',
    url: './assets/img/species/3912247816_60289b30fa_k.jpg',
    authorId: 4,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.MB,
    title: 'MB',
    url: './assets/img/species/2320325021_bd70ed837e_k.jpg',
    authorId: 4,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.MM,
    title: 'MM',
    url: './assets/img/species/2321181128_87c82038b5_k.jpg',
    authorId: 4,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Rf,
    title: 'Rf',
    url: './assets/img/species/2321181688_e356bbfcbf_k.jpg',
    authorId: 4,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Mn,
    title: 'Mn',
    url: './assets/img/species/2862347369_4337b9468b_k.jpg',
    authorId: 4,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Mmba,
    title: 'Mmba',
    url: './assets/img/species/2863144030_27e66b9428_k.jpg',
    authorId: 4,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Pleaur,
    title: 'Pleaur',
    url: './assets/img/species/2320285777_766a1266ab_k.jpg',
    authorId: 4,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Barbar,
    title: 'Barbar',
    url: './assets/img/species/6ae948f6-de0d-4cb7-9361-f7faf5543fbf.jpg',
    authorId: 5,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Barbar,
    title: 'Barbar',
    url: './assets/img/species/4349f22a-333c-454e-8e3c-4013a69125eb.jpg',
    authorId: 3,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Barbar,
    title: 'Barbar',
    url: './assets/img/species/029126f3-0e1c-4813-824e-b4dd2912d1f8.jpg',
    authorId: 3,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Barbar,
    title: 'Barbar',
    url: './assets/img/species/39838636-0573-4022-864a-e735ae60617c.jpg',
    authorId: 5,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Barbar,
    title: 'Barbar',
    url: './assets/img/species/70da8f20-e2ab-4fb6-aa76-b2be405355a6.jpg',
    authorId: 5,
    place: 'Strubiny',
    description: undefined,
  },
  {
    speciesId: SP.Barbar,
    title: 'Barbar',
    url: './assets/img/species/1f04f24a-109d-4357-a19b-51105c769419.jpg',
    authorId: 3,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.MB,
    title: 'MB',
    url: './assets/img/species/79da6b32-628e-491d-b2fd-2e4107494a5d.jpg',
    authorId: 6,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.MB,
    title: 'MB',
    url: './assets/img/species/755f9d20-c52a-4852-9578-6496d956867a.jpg',
    authorId: 3,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.MB,
    title: 'MB',
    url: './assets/img/species/040bb62c-85b3-461a-b199-d8d16743233d.jpg',
    authorId: 3,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.MB,
    title: 'MB',
    url: './assets/img/species/075bc7b1-228e-4b26-995d-2c120bf21cdd.jpg',
    authorId: 7,
    place: 'Nettine',
    description: undefined,
  },
  {
    speciesId: SP.MD,
    title: 'MD',
    url: './assets/img/species/f0039ac9-8fa6-4b4a-9d72-80ffb4174567.jpg',
    authorId: 3,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.MD,
    title: 'MD',
    url: './assets/img/species/2a73f156-4c47-4e6e-b571-51aeacaf6adb.jpg',
    authorId: 3,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.ME,
    title: 'ME',
    url: './assets/img/species/38ed57bd-449e-468b-b20d-cc57a336af40.jpg',
    authorId: 8,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.ME,
    title: 'ME',
    url: './assets/img/species/b831a191-c9ae-474e-ad82-c94cc42e6d91.jpg',
    authorId: 7,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.ME,
    title: 'ME',
    url: './assets/img/species/098068dc-e50d-47be-961e-8f2efbe4d8a7.jpg',
    authorId: 3,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.ME,
    title: 'ME',
    url: './assets/img/species/928417c5-7fc5-4758-99a2-8d92751fe711.jpg',
    authorId: 3,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.ME,
    title: 'ME',
    url: './assets/img/species/8f625901-04f7-4a72-a8ed-c7e7171295c0.jpg',
    authorId: 3,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.ME,
    title: 'ME',
    url: './assets/img/species/a9de59e9-e971-493f-b742-da7e69ef3a2e.jpg',
    authorId: 9,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Mmba,
    title: 'Mmba',
    url: './assets/img/species/eba6c2c8-cc1e-459a-8cc9-074cc1d66500.jpg',
    authorId: 9,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Mmba,
    title: 'Mmba',
    url: './assets/img/species/0adb38b7-8fcb-43ed-90d4-73a8357a009d.jpg',
    authorId: 9,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Mmba,
    title: 'Mmba',
    url: './assets/img/species/ac8a2c65-2fe5-4ab3-967a-d8c130d8fe8d.jpg',
    authorId: 3,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Mmba,
    title: 'Mmba',
    url: './assets/img/species/f2a99cd1-35d4-42a6-83a6-ecd80be9d4d4.jpg',
    authorId: 3,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Mmba,
    title: 'Mmba',
    url: './assets/img/species/4e251a18-4b2c-4c4e-98e3-5dc0f1574669.jpg',
    authorId: 3,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Mn,
    title: 'Mn',
    url: './assets/img/species/3ee81f0f-cb70-4c87-9eee-c334aa47e845.jpg',
    authorId: 10,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Mn,
    title: 'Mn',
    url: './assets/img/species/64de8b62-da2e-499c-bed4-f06923107b66.jpg',
    authorId: 11,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Mn,
    title: 'Mn',
    url: './assets/img/species/78b13acf-fb8e-4e6e-bf0e-a7f355507a5f.jpg',
    authorId: 3,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Mn,
    title: 'Mn',
    url: './assets/img/species/bb176421-0379-4706-bfcb-801ac30c4bb2.jpg',
    authorId: 12,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Rf,
    title: 'Rf',
    url: './assets/img/species/3956ce67-d1ad-4c7d-b0be-dcd2bf3b82e2.jpg',
    authorId: 3,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Rh,
    title: 'Rh',
    url: './assets/img/species/fec022df-fd88-4531-afc2-597c9760ad43.jpg',
    authorId: 9,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Pleaus,
    title: 'Pleaus',
    url: './assets/img/species/65579378-d0f8-41b5-882b-887379dbfcf8.jpg',
    authorId: 5,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Pleaus,
    title: 'Pleaus',
    url: './assets/img/species/db6df292-ccb0-40ef-baba-238c465012f6.jpg',
    authorId: 5,
    place: undefined,
    description: undefined,
  },
  {
    speciesId: SP.Pleaus,
    title: 'Pleaus',
    url: './assets/img/species/32302856-4c15-402b-9133-2859fb99ea89.jpg',
    authorId: 2,
    place: undefined,
    description: undefined,
  },
];

type AuthorType = {
  name: string;
  firstname: string;
  mail?: string;
  url?: string;
};

export const authors: { [key: number]: AuthorType } = {
  1: {
    name: 'Lebon',
    firstname: 'Lionel',
  },
  2: {
    name: 'Smits',
    firstname: 'Quentin',
  },
  3: {
    name: 'Gathoye',
    firstname: 'Jean-louis',
  },
  4: {
    name: 'San Martin',
    firstname: 'Gilles',
  },
  5: {
    name: 'Cors',
    firstname: 'Rudy',
  },
  6: {
    name: 'Herman',
    firstname: 'David',
  },
  7: {
    name: 'Titeux',
    firstname: 'Nicolas',
  },
  8: {
    name: 'Forget',
    firstname: 'Frederic',
  },
  9: {
    name: 'Guyon',
    firstname: 'Jeremie',
  },
  10: {
    name: 'Goethals',
    firstname: 'Didier',
  },
  11: {
    name: 'Schwaab',
    firstname: 'François',
  },
  12: {
    name: 'Colart',
    firstname: 'Denis',
  },
};
