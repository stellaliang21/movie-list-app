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
      currentMovie: movies, //[{title: "bla", watch: "unwatched"}]
    }
    this.handleAddMovie = this.handleAddMovie.bind(this)
    this.handleFindMovie = this.handleFindMovie.bind(this)
  }

  
  
  
  
  handleFindMovie(name) {
    $.get('https://api.themoviedb.org/3/search/movie', {
      api_key: '2876f55117ee9e9fb74bcb3f8a36ad6b',
      query: name
    })
    .done((data) => {
      // console.log(data.results[0].id)
      // console.log(data)
      $.get(`https://api.themoviedb.org/3/movie/${data.results[0].id}`, {
        api_key: '2876f55117ee9e9fb74bcb3f8a36ad6b',
        query: name
        })
        .done((data) => {
          console.log(data)
          })
          .fail((data) => {
            console.log('fail')
          });
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
      
    handleAddMovie(event) {
      this.setState({
        addMovie: event.target.value
      })
    }
    
  handleClick() {
    var filteredMovie = movies.filter((mov) => {
      return mov.title.includes(this.state.movie);
    }) 
    this.setState({ 
      currentMovie: filteredMovie
    });
  }


  handleAddMovieClick() {
    
    if (this.state.currentMovie.length === 0) {
      this.setState({
        currentMovie: [{title: this.state.addMovie, watch: false}]
      })
    } else {
      this.setState((prevState) => ({
        currentMovie: [...prevState.currentMovie, {title: this.state.addMovie, watch: false}]
      }))
    }
    console.log(event.target.value)
      this.handleFindMovie(this.state.addMovie)
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
  

  all() {
    this.setState({
      currentMovie: movies
    })
  }

  handleWatched() {
    var watched = this.state.currentMovie.filter((movie) => {
      return movie.watch !== true;
    })
    this.setState({
      currentMovie: watched
    })
  }

  handleNotWatched() {
    var notWatched = this.state.currentMovie.filter((movie) => {
      return movie.watch === true;
    })
    this.setState({
      currentMovie: notWatched
    })
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
      <button onClick={this.handleFindMovie.bind(this)}>Test </button>
      <button onClick={this.all.bind(this)}>All Movies</button>
      <button onClick={this.handleWatched.bind(this)}>Not Watched</button>
      <button onClick={this.handleNotWatched.bind(this)}>Watched</button>
    </div>
    )
  }
}


export default App