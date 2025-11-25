import Item from "../item/Item";

function Lists({ data }) {
  return (
    <ul className="flex flex-col gap-6">
      {data &&
        data.map((obj) => {
          return <Item key={obj.id} obj={obj} />;
        })}
    </ul>
  );
}

export default Lists;
