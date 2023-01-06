// import { Component } from 'react';

import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  
  console.log('render');

  useEffect(()=>{
    console.log('into effect 1');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {return response.json()})
    .then((users) => {
      setMonsters(users);
    })
  },[]);

  useEffect(()=> {
    console.log('filtered');
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return <div className='App'>
    <h1 className='app-title'>Monsters Listing</h1>
    <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monsters' className='monsters-search-box' />
    <CardList monsters={filteredMonsters} />
  </div>
}

/* class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {return response.json()})
    .then((users) => {
      this.setState(()=>{
        return {monsters:users} 
      },()=>{
        console.log(this.state.monsters);
      })
    })
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return {searchField};
    })
  }

  render(){

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField);
    });

    return <div className='App'>
      <h1 className='app-title'>Monsters Listing</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monsters' className='monsters-search-box' />
      <CardList monsters={filteredMonsters} />
    </div>
  }
}
 */
export default App;
