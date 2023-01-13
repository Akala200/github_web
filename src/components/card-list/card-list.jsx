import React from "react";
import Card from "../card/card.component";


const CardList = (userData) => {
  return (
    <div>
      {userData.map((user) => (
        <Card key={user.id} profile={user} />
      ))}
    </div>
  );
};

export default CardList;
