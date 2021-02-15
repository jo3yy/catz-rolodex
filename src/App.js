import React, { Component } from 'react'
import axios from 'axios'

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';



class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  async componentDidMount() {  
    const users = await axios.get('https://jsonplaceholder.typicode.com/users')  
      
    this.setState({
      monsters: users.data
    })
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }
  

  render() {
    const { monsters, searchField } = this.state

    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Catzz Rolodex </h1>
        <SearchBox
          placeholder="search catzz"
          handleChange={ this.handleChange }
        />

        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default App;
