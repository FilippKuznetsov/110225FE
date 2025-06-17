import React from "react";
import { useState } from "react";

export default function DwarfForm({ addNewDwarf }) {
  const doneBTN = () => {
    console.log("DOne! You send have susessfully sendet this form! ");
  };
  const evPrevDev = (event) => {
    event.preventDefault();

    const newDwarf = {
      name,
      nickName,
      age,
      weapon,
    };

    addNewDwarf(newDwarf);

    setName("");
    setNickName("");
    setAge("");
    setWeapon("");
  };
  const doneFunctions = (event) => {
    evPrevDev(event);
    doneBTN();
  };

  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const [age, setAge] = useState("");
  const [weapon, setWeapon] = useState("");

  return (
    <div>
      Do you want with us? Lets get in!
      <form onSubmit={doneFunctions}>
        <input
          placeholder="name: "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="nickName: "
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
        />
        <input
          placeholder="age: "
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          placeholder="weapon: "
          value={weapon}
          onChange={(e) => setWeapon(e.target.value)}
        />
        <button>Send form</button>
      </form>
    </div>
  );
}
