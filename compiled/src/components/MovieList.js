import MovieListEntry from "./MovieListEntry.js";

var MovieList = props => React.createElement(
  "div",
  { className: "movie-list" },
  props.movies.map((movie, i) => React.createElement(
    "h4",
    { key: i },
    " ",
    React.createElement(MovieListEntry, { movie: movie }),
    " "
  ))
);

export default MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0RW50cnkiLCJNb3ZpZUxpc3QiLCJwcm9wcyIsIm1vdmllcyIsIm1hcCIsIm1vdmllIiwiaSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsY0FBUCxNQUEyQixxQkFBM0I7O0FBRUEsSUFBSUMsWUFBYUMsS0FBRCxJQUNkO0FBQUE7QUFBQSxJQUFLLFdBQVUsWUFBZjtBQUNHQSxRQUFNQyxNQUFOLENBQWFDLEdBQWIsQ0FBaUIsQ0FBQ0MsS0FBRCxFQUFRQyxDQUFSLEtBQ2xCO0FBQUE7QUFBQSxNQUFJLEtBQUtBLENBQVQ7QUFBQTtBQUFhLHdCQUFDLGNBQUQsSUFBZ0IsT0FBT0QsS0FBdkIsR0FBYjtBQUFBO0FBQUEsR0FEQztBQURILENBREY7O0FBU0EsZUFBZUosU0FBZiIsImZpbGUiOiJNb3ZpZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aWVMaXN0RW50cnkgZnJvbSBcIi4vTW92aWVMaXN0RW50cnkuanNcIlxuXG52YXIgTW92aWVMaXN0ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtbGlzdFwiPlxuICAgIHtwcm9wcy5tb3ZpZXMubWFwKChtb3ZpZSwgaSkgPT4gXG4gICAgPGg0IGtleT17aX0+IDxNb3ZpZUxpc3RFbnRyeSBtb3ZpZT17bW92aWV9Lz4gPC9oND4pfVxuICA8L2Rpdj5cbilcbiAgXG5cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0ICJdfQ==