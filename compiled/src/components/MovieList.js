import MovieListEntry from "./MovieListEntry.js";

var MovieList = props => React.createElement(
  "div",
  { className: "movie-list" },
  props.movies.map((movie, i) => React.createElement(
    "h4",
    { key: i },
    " ",
    React.createElement(MovieListEntry, { movie: movie }),
    React.createElement(
      "button",
      { onClick: () => props.toggleWatchBtn(movie.title) },
      movie.watch ? 'watched' : 'unwatched'
    ),
    " "
  ))
);

export default MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0RW50cnkiLCJNb3ZpZUxpc3QiLCJwcm9wcyIsIm1vdmllcyIsIm1hcCIsIm1vdmllIiwiaSIsInRvZ2dsZVdhdGNoQnRuIiwidGl0bGUiLCJ3YXRjaCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsY0FBUCxNQUEyQixxQkFBM0I7O0FBRUEsSUFBSUMsWUFBYUMsS0FBRCxJQUNkO0FBQUE7QUFBQSxJQUFLLFdBQVUsWUFBZjtBQUNHQSxRQUFNQyxNQUFOLENBQWFDLEdBQWIsQ0FBaUIsQ0FBQ0MsS0FBRCxFQUFRQyxDQUFSLEtBQ2xCO0FBQUE7QUFBQSxNQUFJLEtBQUtBLENBQVQ7QUFBQTtBQUFhLHdCQUFDLGNBQUQsSUFBZ0IsT0FBT0QsS0FBdkIsR0FBYjtBQUNBO0FBQUE7QUFBQSxRQUFRLFNBQVMsTUFBTUgsTUFBTUssY0FBTixDQUFxQkYsTUFBTUcsS0FBM0IsQ0FBdkI7QUFDQ0gsWUFBTUksS0FBTixHQUFjLFNBQWQsR0FBMEI7QUFEM0IsS0FEQTtBQUFBO0FBQUEsR0FEQztBQURILENBREY7O0FBV0EsZUFBZVIsU0FBZiIsImZpbGUiOiJNb3ZpZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aWVMaXN0RW50cnkgZnJvbSBcIi4vTW92aWVMaXN0RW50cnkuanNcIlxuXG52YXIgTW92aWVMaXN0ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtbGlzdFwiPlxuICAgIHtwcm9wcy5tb3ZpZXMubWFwKChtb3ZpZSwgaSkgPT4gXG4gICAgPGg0IGtleT17aX0+IDxNb3ZpZUxpc3RFbnRyeSBtb3ZpZT17bW92aWV9Lz4gXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy50b2dnbGVXYXRjaEJ0bihtb3ZpZS50aXRsZSl9PlxuICAgIHttb3ZpZS53YXRjaCA/ICd3YXRjaGVkJyA6ICd1bndhdGNoZWQnfTwvYnV0dG9uPiA8L2g0Pil9XG4gIDwvZGl2PlxuKVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0ICJdfQ==