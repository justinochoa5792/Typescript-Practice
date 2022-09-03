import React from "react";
import { Person, Country } from "../Person";

const PersonComponent = () => {
  return (
    <div>
      <Person
        name="Justin"
        email="justin.ochoa@gmail.com"
        age={30}
        isMarried={false}
        friends={["Jake", "Jessica", "Jerry"]}
        country={Country.UnitedStates}
      />
    </div>
  );
};

export default PersonComponent;
