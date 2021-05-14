import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Cards from '../components/Cards';
import Lead from '../components/Lead';
import Title from '../components/Title';
import { Container } from '../styles/Styles';
import { getForside } from '../utils/yourService';

const Home = () => {
const [data, setData] = useState(null) 
useEffect(() => {
    const fetchDataAsync = async () => {
        const forside = await getForside('dagens-nyheter');
        setData(forside);
    };
    fetchDataAsync();
}, []);

return (
<Container>
    <h1>heihei</h1>;
    <Title title={data?.title} />
    <Lead lead={data?.lead}/>

<Cards>
    <Card />
    <Card />
    <Card />
</Cards>


</Container>
);
}; 
export default Home;
