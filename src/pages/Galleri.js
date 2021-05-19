import React, { useEffect, useState } from 'react';
import { urlFor } from '../utils/imageUrl';
import Footer from '../components/Footer';
import Map from '../components/Map';
import Title from '../components/Title';
import Lead from '../components/Lead';
import { Container } from '../styles/Styles';
import { getBilder } from '../utils/bildeService';

const Home = () => {
const [data, setData] = useState(null) 
useEffect(() => {
    const fetchDataAsync = async () => {
        const galleri = await getBilder('galleri');
        setData(galleri);
    };
    fetchDataAsync();
}, []);
console.log(data);
if(!data){
    return <p>Loading..</p>
  }

return (
<Container>
    <Title title={data?.title} />
    <Lead lead={data?.lead} />
    
    {data?.bilder.map((bilde) => ( 
    <img src={urlFor(bilde.asset._ref).width(200).format('webp').url()} />
        
    ))}

<Footer />
</Container>
);
}; 
export default Home;
