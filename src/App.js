import React, { useState, useEffect, useCallback, useMemo } from "react";
import SearchBox from "./components/SearchBox";
import CardList from "./components/CardList";
import "./App.scss";

const App = () => {
  const [searchString, setSearchString] = useState("");
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const filteredMonsters = useMemo(
    () =>
      monsters.filter((monster) =>
        monster.name.toLowerCase().includes(searchString)
      ),
    [monsters, searchString]
  );

  const onSearchChange = useCallback((event) => {
    setSearchString(event.target.value.toLowerCase());
  }, []);

  return (
    <div className="mainApp">
      <h1 className="mainTitle">Monsters Cards</h1>

      <SearchBox
        placeholder="Search monsters..."
        onSearchHandler={onSearchChange}
      />

      <CardList filteredMonsters={filteredMonsters} />
    </div>
  );
};

export default App;
