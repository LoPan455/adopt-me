const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

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
ReactDOM.render(React.createElement(App), document.getElementById("root"));
