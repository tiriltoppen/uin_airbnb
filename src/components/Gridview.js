import Card from "./Card";

const Gridview = ({ data }) => {
    return (
    <>
    {data?.length > 0 &&
    data.map((card) => <Card key={card._key} {...card} />)}
    </>

    )

};

export default Gridview;
