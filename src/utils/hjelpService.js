import client from './client';

const hjelpFields = `
title,
'slug': slug.current,
lead
`;


export const getHjelp = async (slug) => {
    const data = await client.fetch(
    `*[_type == "hjelpesenter" && slug.current == $slug]{${hjelpFields}}`,
    { 
      slug, 
    }
    );
    return data?.[0];
  };