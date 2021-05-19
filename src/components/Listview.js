import Card from "./Card";

const Listview = ({ data }) => {
    console.log(data);
    return (
    <>
    {data?.length > 0 &&
    data.map((card) => <Card key={card._key} {...card} />)}
    </>

    )

};

export default Listview;
