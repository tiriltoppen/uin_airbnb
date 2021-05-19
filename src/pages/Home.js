import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Gridview from '../components/Gridview';
import Lead from '../components/Lead';
import Listview from '../components/Listview';
import Map from '../components/Map';
import Title from '../components/Title';
import ViewType from '../constant/ViewType';
import { Container } from '../styles/Styles';
import { getForside } from '../utils/yourService';


const Home = () => {
    const [data, setData] = useState(null)  
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [viewType, setviewType] = useState(ViewType.gridView); 

useEffect(() => {
    const fetchDataAsync = async () => {
        setLoading(true);
        try {
        const forside = await getForside('dagens-nyheter');
        setData(forside);
         } catch (error) {
            setError(error);
         } finally {
             setLoading(false);
         }
    };
    fetchDataAsync();
}, []);

if (loading) return <p>...Loading</p>;
if (!data && error) return <p>{error?.message}</p>;


const displayView = () => {
    if (viewType === ViewType.gridView) {
      return <Cards><Gridview data={data} /></Cards>;
    }
    return <Listview data={data} />;
  };

return (
<Container>

    <Title title={data?.title} />
    <Lead lead={data?.lead} />
    
    <button type='button' onClick={() => setviewType(ViewType.gridView)}>
          GridView
        </button>
        <button type='button' onClick={() => setviewType(ViewType.listView)}>
          ListView
        </button>

        {displayView()}


<Footer />
</Container>
);
}; 
export default Home;
