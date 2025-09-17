import { useState } from "react";

export default function Accordion() {
  const [nameId, setNameId] = useState(1);
  const accordions = [
    {
      id: 1,
      name: "Esop",
      content: "this is esop content",
    },
    {
      id: 2,
      name: "US market",
      content: "This is us Market content",
    },
    {
      id: 3,
      name: "Indian market",
      content: "This is Indian Market content",
    },
  ];

  const handleClick = (id) => {
    setNameId(id);
  };

  return (
    <div>
      <h1>Accordion Lists</h1>
      {accordions.map((item) => {
        return (
          <div key={item.id}>
            <button onClick={(e) => handleClick(item.id)}>{item.name}</button>
            {item.id === nameId && <div>{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
}
