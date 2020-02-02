import React, { Component } from 'react';

import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  handleSeachChange = e => this.setState({searchField: e.target.value});

  filterMonsters = () => {
    const {monsters, searchField} = this.state;
    return monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
  }

  render() {
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleSeachChange} />
        <CardList monsters={this.filterMonsters()}/>
      </div>
    );
  }
}

export default App;
