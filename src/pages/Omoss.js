import { useEffect, useState } from "react";
import Card from "../components/Card";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Lead from "../components/Lead";
import Title from "../components/Title";
import { Container } from "../styles/Styles";
import { getOss } from "../utils/omService";

const Omoss = () => {

        const [data, setData] = useState(null) 
        useEffect(() => {
            const fetchDataAsync = async () => {
                const omoss = await getOss('ansatte');
                setData(omoss);
                
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
        <Footer />
        </Container>
);
};
export default Omoss;