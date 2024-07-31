import React from "react";
import { DropdownProvider, useDropdown } from "./DropdownContext";

const DropdownButton = () => {
  return <button>Dropdown Button</button>;
};

const DropdownMenu = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

const Dropdown = ({ items }) => {
  return (
    <DropdownProvider>
      <div>
        <DropdownButton />
        <DropdownMenu items={items} />
      </div>
    </DropdownProvider>
  );
};

export default Dropdown;
