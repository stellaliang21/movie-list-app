import movies from "../data/mock.data.js";
import MovieList from "./MovieList.js";

const App = function () {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Movie List"
    ),
    React.createElement(
      "div",
      null,
      React.createElement(MovieList, { movies: movies })
    )
  );
};

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsibW92aWVzIiwiTW92aWVMaXN0IiwiQXBwIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxNQUFQLE1BQW1CLHNCQUFuQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsZ0JBQXRCOztBQUVBLE1BQU1DLE1BQU0sWUFBVztBQUNyQixTQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUFLLDBCQUFDLFNBQUQsSUFBVyxRQUFRRixNQUFuQjtBQUFMO0FBRkYsR0FERjtBQU1ELENBUEQ7O0FBU0EsZUFBZUUsR0FBZiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW92aWVzIGZyb20gXCIuLi9kYXRhL21vY2suZGF0YS5qc1wiXG5pbXBvcnQgTW92aWVMaXN0IGZyb20gXCIuL01vdmllTGlzdC5qc1wiXG5cbmNvbnN0IEFwcCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+TW92aWUgTGlzdDwvaDE+XG4gICAgICA8ZGl2PjxNb3ZpZUxpc3QgbW92aWVzPXttb3ZpZXN9Lz48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHAiXX0=