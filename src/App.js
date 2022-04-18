//import { render } from '@testing-library/react';
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list-components";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component";



class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => this.setState({ monsters: user }));
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monst) =>
      monst.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
       <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
          placeholder={"search monsters"}
          searchHandler={(e) => {
            this.setState({ searchField: e.target.value }, () =>
              console.log(this.state)
            );
          
          }}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
