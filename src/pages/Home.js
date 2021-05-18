import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Lead from '../components/Lead';
import Map from '../components/Map';
import Title from '../components/Title';
import { Container } from '../styles/Styles';
import { getForside } from '../utils/yourService';


const Home = () => {
const [data, setData] = useState(null) 
useEffect(() => {
    const fetchDataAsync = async () => {
        const forside = await getForside('dagens-nyheter');
        setData(forside);
        console.log(forside);
    };
    fetchDataAsync();
}, []);

return (
<Container>
    
    <h1>Airbnb</h1>
    <Title title={data?.title} />
    <Lead lead={data?.lead} />
<Cards>
    {data?.cards?.length > 0 &&
    data.cards.map((card) => <Card key={card._key} {...card} />)}
</Cards>
<Footer />
</Container>
);
}; 
export default Home;
