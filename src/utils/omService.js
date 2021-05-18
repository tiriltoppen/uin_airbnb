import client from './client';

const omFields = `
img,
title,
'slug': slug.current,
lead
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