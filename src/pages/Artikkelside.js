import { useEffect, useState } from "react";
import Lead from "../components/Lead";
import Cards from '../components/Cards';
import Title from "../components/Title";
import { Container } from "../styles/Styles";
import { getForside } from "../utils/yourService";
import Listview from "../components/Listview";
import Gridview from "../components/Gridview";
import ViewType from "../constant/ViewType";




const Artikkelside = () => {
const [data, setData] = useState(null) 
const [viewType, setviewType] = useState(ViewType.gridView) 
useEffect(() => {
    const fetchDataAsync = async () => {
        const forside = await getForside('nyheter');
        setData(forside);
        console.log(forside);
    };
    fetchDataAsync();
}, []);

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

</Container>
);
}; 


export default Artikkelside;