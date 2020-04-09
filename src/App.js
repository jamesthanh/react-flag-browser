import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { flags } from "./Flag";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      flags: flags,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filterFlagByName = this.state.flags.filter((flag) => {
      return flag.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    // const filterFlagRegion = this.state.flags.filter((flag) => {
    //   return flag.email
    //     .toLowerCase()
    //     .includes(this.state.searchfield.toLowerCase());
    // });

    return (
      <div className="tc">
        <h1 className="f1 pa5">Country Flags Browser</h1>
        <h2>Search for by Country</h2>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList flags={filterFlagByName} />
      </div>
    );
  }
}

export default App;
