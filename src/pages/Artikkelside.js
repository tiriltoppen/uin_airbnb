import { useEffect, useState } from "react";
import Lead from "../components/Lead";
import Card from '../components/Card';
import Cards from '../components/Cards';
import Title from "../components/Title";
import { Container } from "../styles/Styles";
import { getForside } from "../utils/yourService";


const Artikkelside = () => {
const [data, setData] = useState(null) 
useEffect(() => {
    const fetchDataAsync = async () => {
        const forside = await getForside('nyheter');
        setData(forside);
        console.log(forside);
    };
    fetchDataAsync();
}, []);

return (
<Container>
    <Title title={data?.title} />
    <Lead lead={data?.lead} />
<Cards>
    {data?.cards?.length > 0 &&
    data.cards.map((card) => <Card key={card._key} {...card} />)}
</Cards>
</Container>
);
}; 


export default Artikkelside;