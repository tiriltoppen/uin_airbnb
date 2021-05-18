// Dette er en demo for måter å hente data på. 
// Du må huske å erstatte ADD_YOUR_TYPE_HERE med egne dokumenttyper fra Sanity

import client from './client';


const oppholdFields = `
  opphold
`;

const forsideFields = `
  title,
  'slug': slug.current,
  lead,
  'cards': cards[]{_key, title, text, 'link': []{_key, name, href}, 'img': image{..., asset->{url}}}
`;


export const getOpphold = async () => {
  const data = await client.fetch(`*[_type == "opphold"]{${oppholdFields}}`);
  return data;
};

export const getForside = async (slug) => {
  const data = await client.fetch(
    `*[_type == "forside" && slug.current == $slug]{${forsideFields}}`, 
  { 
    slug, 
  }
  );
  return data?.[0];
};