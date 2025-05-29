import React from "react";

import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {
    // color: "red",
    // fontSize: "48px",
    // textTransform: "uppercase",
  };
  return (
    <header className="header">
      <h1 style={style}>Crispy Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  // const pizzas = [];
  const pizzas = pizzaData;
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizza > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p> We're still working on our menu. Please come back later</p>
      )}

      {/* {
        pizzaData.map((pizza) => (
        <Pizaa
          key={pizza.name}
          name={pizza.name}
          ingredients={pizza.ingredients}
          price={pizza.price}
          photoName={pizza.photoName}
        />
      ))} */}

      {/* <Pizaa
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={18}
        photoName="pizzas/prosciutto.jpg"
      />
      <Pizaa
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        price={15}
        photoName="pizzas/salamino.jpg"
      /> */}

      {/* <Pizaa />
      <Pizaa />
      <Pizaa /> */}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 7;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to see you her. Please come between {openHour}:00 -{" "}
          {closeHour}:00.
        </p>
      )}
      {/* {new Date().toLocaleTimeString()}
      .We're currently open */}
    </footer>
  );
  //   return React.createElement("footer", null, "We're currently open!");
}

function Order(props) {
  return (
    <div className="order">
      <p>
        We're open until {props.closeHour}:00. Come visit us or order online.
      </p>

      <button className="btn">Order</button>
    </div>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photoName} alt="Pizza" />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>
          {props.pizzaObj.soldOut ? "SOLD OUT" : props.pizzaObj.price}
        </span>
      </div>
    </li>

    // <div className="pizza">
    //   <img style={style} src={props.photoName} alt={props.name} />
    //   <div>
    //     <h3>{props.name}</h3>
    //     <p>{props.ingredients}</p>
    //     <span>{props.price + 3}</span>
    //   </div>
    // </div>
  );
}
