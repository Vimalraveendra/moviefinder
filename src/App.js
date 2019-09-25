import React,{Component} from 'react';
import './App.css';
import Title from './Title';
import MovieList from './MovieList';

const API_KEY =process.env.REACT_APP_API_KEY;

class App extends Component{
  state={
    input:'',
    movies:[]
  }

  onHandleChange = (event)=>{
    this.setState({input:event.target.value})
  }
  
  onHandleSubmit = ()=>{
    const {input} = this.state
    fetch(`http://www.omdbapi.com/?s=${input}&apikey=${API_KEY}`)
    .then(response=> response.json())
    .then(data=>this.setState({
       movies:data.Search
    }))
    .catch(err=>(err))
  }
  render(){
    return (
    <div className="App">
      <header className="App-header">
       MovieFinder
      </header>
      <Title
      input={this.state.input} 
      onHandleChange={this.onHandleChange}
      onHandleSubmit={this.onHandleSubmit}
      />
      <MovieList
      moviesArray={this.state.movies}
       />
      
    </div>
  );
  }
  
}

export default App;
