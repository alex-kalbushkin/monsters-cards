import React from "react";
import styles from "./card.module.scss";

const Card = ({ monster }) => {
  const { id, name, email } = monster;

  return (
    <div className={styles.cardContainer}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=300x300`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
