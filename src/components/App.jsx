import movies from "../data/mock.data.js"
import MovieList from "./MovieList.js"

const App = function() {
  return (
    <div>
      <h1>Movie List</h1>
      <div><MovieList movies={movies}/></div>
    </div>
  )
}

export default App