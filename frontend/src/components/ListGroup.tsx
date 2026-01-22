import { useState } from "react";

function ListGroup() {
  let items = ["Vincent", "Simon", "Dottore", "Octane"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessege = () => {
    return items.length === 0 && <p>No items found</p>;
  };

  return (
    <>
      {getMessege()}
      <ul className="list-group list-group-horizontal">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
