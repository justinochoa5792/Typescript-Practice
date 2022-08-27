import React from "react";
import "./App.css";
import { Person, Country } from "./Person";

function App() {
  const getAge = (name: string) => {
    return 33;
  };

  return (
    <div className="App">
      <Person
        name="Justin"
        email="justin.ochoa@gmail.com"
        age={30}
        isMarried={false}
        friends={["Jake", "Jessica", "Jerry"]}
        country={Country.UnitedStates}
      />
      <h1>Jakes Age: {getAge("Jake")}</h1>
    </div>
  );
}

export default App;
