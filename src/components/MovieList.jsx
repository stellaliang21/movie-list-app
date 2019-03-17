import MovieListEntry from "./MovieListEntry.js"

var MovieList = (props) => (
  <div className="movie-list">
    {props.movies.map((movie, i) => 
    <h4 key={i}> <MovieListEntry movie={movie}/> </h4>)}
  </div>
)
  


export default MovieList 