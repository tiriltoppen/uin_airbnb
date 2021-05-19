import client from './client';

const galleriFields = `
  title,
  'slug': slug.current,
  lead,
  bilder
`;


export const getBilder = async (slug) => {
    const data = await client.fetch(
      `*[_type == "galleri" && slug.current == $slug]{${galleriFields}}`, 
    { 
      slug, 
    }
    );
    return data?.[0];
  };