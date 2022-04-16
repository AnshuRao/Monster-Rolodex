//import { render } from '@testing-library/react';
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list-components";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component";

import { Test } from "./components/test-apps/Test.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
      test: "hi anshu",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => this.setState({ monsters: user }));

    console.log("hellooooo");
  }

  render() {
    //console.log(this.state);
    const { monsters, searchField } = this.state;

    console.log("pajji");
    // console.log(searchField);

    const filteredMonsters = monsters.filter((monst) =>
      monst.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>{this.state.test}</h1>
        <SearchBox
          placeholder={"search monsters"}
          searchHandler={(e) => {
            this.setState({ searchField: e.target.value }, () =>
              console.log(this.state)
            );
            console.log('after on set change')
          }}
        />

        <CardList monsters={filteredMonsters}></CardList>

        <Test />
      </div>
    );
  }
}

export default App;
