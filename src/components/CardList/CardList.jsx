import React from "react";
import Card from "../Card";
import styles from "./cardList.module.scss";

const CardList = ({ filteredMonsters }) => (
  <div className={styles.cardList}>
    {filteredMonsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);

export default CardList;
