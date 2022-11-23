import React from "react";
import styles from "./searchBox.module.scss";
import classnames from "classnames";

const SearchBox = ({ className = "", placeholder, onSearchHandler }) => (
  <input
    type="search"
    className={classnames(styles.searchBox, className)}
    placeholder={placeholder}
    onChange={onSearchHandler}
  />
);

export default SearchBox;
