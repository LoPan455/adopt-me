import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Parker",
      animal: "Dog",
      breed: "Spaniel",
    }),
    React.createElement(Pet, {
      name: "Taloulah",
      animal: "Dog",
      breed: "Dachsund",
    }),
    React.createElement(Pet, {
      name: "Molly",
      animal: "Dog",
      breed: "Bichon",
    }),
  ]);
};
render(React.createElement(App), document.getElementById("root"));
