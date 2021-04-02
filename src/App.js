import { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';
class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users => this.setState({monsters: users}));
  }

  handelChange= (e)=>{
    this.setState({searchField:e.target.value });
  }
  render(){

    const {monsters,searchField}= this.state;
    const filteredMosters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return(
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder='Seach Monster'  handelChange={this.handelChange}  />
        <CardList monsters={filteredMosters}/>
       
      </div>
    );
  }
}

export default App;
