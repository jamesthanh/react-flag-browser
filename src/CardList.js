import React from "react";
import Card from "./Card";

const CardList = ({ flags }) => {
  return (
    <div>
      {flags.map((id, i) => {
        return (
          <Card
            key={i}
            id={flags[i].id}
            img={flags[i].img}
            name={flags[i].name}
            email={flags[i].email}
          />
        );
      })}
    </div>
  );
};
export default CardList;
