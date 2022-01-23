import React, { Component } from "react";
import Customer from "./components/Customer";
import "./App.css";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "이의현",
    birthday: "970419",
    gender: "man",
    job: "student",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "임종태",
    birthday: "971121",
    gender: "man",
    job: "student",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "이재우",
    birthday: "970305",
    gender: "man",
    job: "student",
  },
];
class App extends Component {
  render() {
    return (
      <div>
        {customers.map((c) => {
          return (
            <Customer
              key = {c.id} 
              id={c.id}
              name={c.name}
              gender={c.gender}
              birthday={c.birthday}
              image={c.image}
              job={c.job}
            ></Customer>
          );
        })}
      </div>
    );
  }
}

export default App;
