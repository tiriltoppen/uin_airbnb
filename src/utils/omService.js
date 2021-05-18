import client from './client';

const omFields = `
title,
'slug': slug.current,
lead,
'cards': cards[]{_key, title, text, 'link': []{_key, name, href}, 'img': image{..., asset->{url}}}

`;


export const getOss = async (slug) => {
    const data = await client.fetch(
    `*[_type == "omoss" && slug.current == $slug]{${omFields}}`,
    { 
      slug, 
    }
    );
    return data?.[0];
  };