import movies from "../data/mock.data.js"
import MovieList from "./MovieList.js"
import Search from "./Search.js"


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movie: '',
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



  render() {
    return ( 
    <div>
      <h1>Movie List</h1>
      <div>
        <Search movie={this.state.movie} 
        handleChange={this.handleChange.bind(this)} 
        handleClick={this.handleClick.bind(this)}/>
      </div>
      <div><MovieList movies={this.state.currentMovie} /></div>
    </div>
    )
  }
}


export default App