/* eslint-disable */
import { createWriteStream } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';

export const SP = [
  'Barbar',
  'MB',
  'Md',
  'MD',
  'ME',
  'MM',
  'Mn',
  'Mmba',
  'Pleaur',
  'Pleaus',
  'Pipsp',
  'Eptser',
  'Rh',
  'Rf',
];

const generateSitemap = async () => {
  const links = [
    { url: '/', priority: 1.0 },
    { url: '/quiz', priority: 1.0 },
    { url: '/resources', priority: 0.7 },
    { url: '/learn', priority: 0.7 },
    { url: '/about', priority: 0.8 },
    ...SP.map((sp) => ({
      url: `/species/${sp}`,
      priority: 0.7,
    })),
  ];

  const sitemapStream = new SitemapStream({
    hostname: 'https://plecotus.netlify.app',
  });

  // Output the sitemap to a file
  const writeStream = createWriteStream('./public/sitemap.xml');
  sitemapStream.pipe(writeStream);

  links.forEach((link) => sitemapStream.write(link));
  sitemapStream.end();

  await streamToPromise(sitemapStream);
};

generateSitemap().catch((error) => {
  throw `Error generating sitemap: ${error}`;
});
