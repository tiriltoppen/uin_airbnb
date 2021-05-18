import client from './client';

const contactFields = `
  title,
  'slug': slug.current,
  preAmble,
  'cards': cards[]{_key, title, text, 'link': []{_key, name, href}, 'img': image{..., asset->{url}}}
`;

const contactWithOpenFields = `
'tideraapen':tideraapen->{slug, adresse, kundeservice, aapningstider}
`;

export const getContact = async () => {
  const data = await client.fetch(`*[_type == "contact"]{${contactFields}}`);
  return data;

};

export const getContacts = async (slug) => {
  const data = await client.fetch(
    `*[_type == "contact" && slug.current == $slug]{${contactFields},
    body[]{...}}`,
    { slug }
  );
  return data?.[0];
};

export const getaapen = async (slug) => {
  const data = await client.fetch(
    `*[_type == "tideraapen" && slug.current == $slug]`,
  
    { slug }
  );
  return data?.[0];
};

export const createContact = async (body) => {
  try {
    await client.create({ _type: 'contact', ...body });
  } catch (error) {
    throw new Error(error);
  }
};

export const getContactByOpen = async (time) => {
  const query = `*[_type=="contact" && ('${time}' == tideraapen-> slug.current)]{${contactWithOpenFields},
  body[]{...}}`
  
  const data = await client.fetch(query);
  return data;
};

