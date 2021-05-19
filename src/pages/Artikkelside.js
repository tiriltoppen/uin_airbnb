import { useEffect, useState } from "react";
import Lead from "../components/Lead";
import Cards from '../components/Cards';
import Title from "../components/Title";
import { Container } from "../styles/Styles";
import { getForside } from "../utils/yourService";
import Listview from "../components/Listview";
import Gridview from "../components/Gridview";
import ViewType from "../constant/ViewType";
import Footer from "../components/Footer";
import Categorys from "../constant/Categorys";


const Artikkelside = () => {
const [data, setData] = useState(null) 
const [viewType, setviewType] = useState(ViewType.gridView); 
const [kategori, setKategori] = useState([]);
useEffect(() => {
    const fetchDataAsync = async () => {
        const forside = await getForside('nyheter');
        setData(forside);
    };
    fetchDataAsync();
}, []);

const kategoriFilter = (e) => {
  if (e.kategori)
    return e.kategori.some(function (a) {
      return kategori.indexOf(a) != -1;
    });
};

const filterData = () => {
  if (kategori.length > 0) {
    return data?.cards.filter(kategoriFilter);
  }
  return data?.cards;
};

const displayView = () => {
    if (viewType === ViewType.gridView) {
      return <Cards><Gridview data={filterData()} /></Cards>;
    }
    return <Listview data={filterData()} />;
  };

const handleSetKategori = (filterkategori) => {
  if (kategori.includes(filterkategori)) {
    setKategori(kategori.filter((artikkel) => artikkel !== filterkategori));
  } else {
    setKategori([...kategori, filterkategori]);
  }
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

       {Categorys?.map((artikkel) => (
        <button key={artikkel.value} style={{ backgroundColor: kategori.includes(artikkel.kategori) ? 'red' : '' }}
        onClick={() => handleSetKategori(artikkel.value)}>{artikkel.title}</button>
      ))}

    {displayView()}


<Footer />
</Container>
);
}; 

export default Artikkelside;