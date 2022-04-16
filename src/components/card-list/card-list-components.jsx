import React from "react";
import "./card-list.css";

import { Card } from "../card/card.components";

export const CardList = (props) => {
  
  return (
    <div className="card-list">
      {console.log("class-list outside return called")}
      {props.monsters.map((mons) => {
        console.log("class-list inside return called");
        return <Card key={mons.id} monster={mons}></Card>;
      })}
    </div>
  );
};
