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
      currentMovie: movies //[{title: "bla", watch: "unwatched"}]
    }
  }


  handleFindMovie(callback) {
    $.get('https://api.themoviedb.org/3/search/movie', {
      api_key: '2876f55117ee9e9fb74bcb3f8a36ad6b',
      query: 'barbie'
    })
      .done((data) => {
        console.log(data.items)
      })
      .fail((data) => {
        console.log('fail')
      });
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
    if (this.state.currentMovie.length === 0) {
      this.setState({
        currentMovie: [{title: this.state.addMovie, watch: true}]
      })
    } else {
      this.setState((prevState) => ({
        currentMovie: [...prevState.currentMovie, {title: this.state.addMovie, watch: true}]
      }))
    }
  }


  toggleWatchBtn(clickedMovie) {
    var movie = this.state.currentMovie.map((mov) => {
      if (clickedMovie === mov.title) {
        mov.watch = !mov.watch
      }
      return mov
    });
    this.setState({currentMovie: movie})
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
      <div>
        <MovieList movies={this.state.currentMovie} 
        toggleWatchBtn={this.toggleWatchBtn.bind(this)}/>
      </div>
      <button onClick={this.handleTest}></button>
    </div>
    )
  }
}


export default App