import Card from "./Card";

const Listview = ({ data }) => {
    return (
    <>
    {data?.cards?.length > 0 &&
    data.cards.map((card) => <Card key={card._key} {...card} />)}
    </>

    )

};

export default Listview;
