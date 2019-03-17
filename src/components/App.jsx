import movies from "../data/mock.data.js"
import MovieList from "./MovieList.js"
import Search from "./Search.js"
import AddMovies from "./AddMovie.js"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movie: '',
      addMovie: '',
      currentMovie: movies
    }
  }

  handleChange(event) {
    this.setState({ 
      movie: event.target.value
    });
  }

  handleClick() {
    var filteredMovie = movies.filter((mov) => {
      return mov.title.includes(this.state.movie);
    }) 
    this.setState({ 
      currentMovie: filteredMovie
    });
  }

  handleAddMovie(event) {
    this.setState({
      addMovie: event.target.value
    })
  }

  handleAddMovieClick() {
    console.log(1113)
    if (this.state.currentMovie.length === 0) {
      this.setState({
        currentMovie: [{title: this.state.addMovie}]
      })
    } else {
      this.setState((prevState) => ({
        currentMovie: [...prevState.currentMovie, {title: this.state.addMovie}]
      }))
    }
  }


  render() {
    return ( 
    <div>
      <h1>Movie List</h1>
      <div>
        <Search movie={this.state.movie} 
        handleChange={this.handleChange.bind(this)} 
        handleClick={this.handleClick.bind(this)}/>
      </div>
      <div>
        <AddMovies movie={this.state.addMovie}
        handleAddMovie={this.handleAddMovie.bind(this)}
        handleAddMovieClick={this.handleAddMovieClick.bind(this)}/>
      </div>
      <div><MovieList movies={this.state.currentMovie} /></div>
    </div>
    )
  }
}


export default App