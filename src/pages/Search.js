import client from '../utils/client';

const Search = ({ oppholdSteder }) => {
  console.log(oppholdSteder);

  return (
    <>
      <h1>Hi</h1>
    </>
  );
};

const opphold = opphold;

export const getApartment = async () => {
  const oppholdSteder = await client.fetch(opphold);
  return console.log(oppholdSteder);
};

export default Search;
