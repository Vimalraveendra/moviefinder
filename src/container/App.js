import React, { Component } from "react";
import "./App.css";
import Title from "../components/title/Title";
import MovieList from "../components/movie-list/MovieList";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  state = {
    input: "",
    movies: [],
    error: ""
  };

  onHandleChange = event => {
    this.setState({ input: event.target.value });
  };

  onHandleSubmit = () => {
    const { input } = this.state;
    if (input.length > 0) {
      fetch(`http://www.omdbapi.com/?s=${input}&apikey=${API_KEY}`)
        .then(response => response.json())
        .then(data =>
          this.setState({
            movies: data.Search
          })
        )
        .catch(err => err);
      this.setState({ input: "" });
    } else {
      this.setState({ error: "Sorry!!!, Please enter a film name" });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">MovieFinder</header>
        <Title
          input={this.state.input}
          onHandleChange={this.onHandleChange}
          onHandleSubmit={this.onHandleSubmit}
        />
        <MovieList moviesArray={this.state.movies} />
      </div>
    );
  }
}

export default App;
