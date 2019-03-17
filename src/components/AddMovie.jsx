var AddMovies = (props) => (
  <div>
    <input type="text" 
    onChange={(event) => {props.handleAddMovie(event)}}/>
    <button className="addMovieButton" onClick={props.handleAddMovieClick}>  Add Movie </button>
  </div>
)

export default AddMovies
