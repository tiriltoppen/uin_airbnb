import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Lead from "../components/Lead";
import Title from "../components/Title";
import { Container } from "../styles/Styles";
import { getHjelp } from "../utils/hjelpService";

const Hjeplesenter = () => {

        const [data, setData] = useState(null) 
        useEffect(() => {
            const fetchDataAsync = async () => {
                const hjelpesenter = await getHjelp('hjelp');
                setData(hjelpesenter);
                
            };
            fetchDataAsync();
        }, []);

    return (
        <Container>
            <Title title={data?.title} />
            <Lead lead={data?.lead} />
        
        <Footer />
        </Container>
);
};
export default Hjeplesenter;