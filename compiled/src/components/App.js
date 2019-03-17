import movies from "../data/mock.data.js";
import MovieList from "./MovieList.js";
import Search from "./Search.js";
import AddMovies from "./AddMovie.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: '',
      addMovie: '',
      currentMovie: movies
    };
  }

  handleChange(event) {
    this.setState({
      movie: event.target.value
    });
  }

  handleClick() {
    var filteredMovie = movies.filter(mov => {
      return mov.title.includes(this.state.movie);
    });
    this.setState({
      currentMovie: filteredMovie
    });
  }

  handleAddMovie(event) {
    this.setState({
      addMovie: event.target.value
    });
  }

  handleAddMovieClick() {
    console.log(1113);
    if (this.state.currentMovie.length === 0) {
      this.setState({
        currentMovie: [{ title: this.state.addMovie }]
      });
    } else {
      this.setState(prevState => ({
        currentMovie: [...prevState.currentMovie, { title: this.state.addMovie }]
      }));
    }
  }

  render() {
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
        React.createElement(Search, { movie: this.state.movie,
          handleChange: this.handleChange.bind(this),
          handleClick: this.handleClick.bind(this) })
      ),
      React.createElement(
        "div",
        null,
        React.createElement(AddMovies, { movie: this.state.addMovie,
          handleAddMovie: this.handleAddMovie.bind(this),
          handleAddMovieClick: this.handleAddMovieClick.bind(this) })
      ),
      React.createElement(
        "div",
        null,
        React.createElement(MovieList, { movies: this.state.currentMovie })
      )
    );
  }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsibW92aWVzIiwiTW92aWVMaXN0IiwiU2VhcmNoIiwiQWRkTW92aWVzIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJtb3ZpZSIsImFkZE1vdmllIiwiY3VycmVudE1vdmllIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJmaWx0ZXJlZE1vdmllIiwiZmlsdGVyIiwibW92IiwidGl0bGUiLCJpbmNsdWRlcyIsImhhbmRsZUFkZE1vdmllIiwiaGFuZGxlQWRkTW92aWVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJwcmV2U3RhdGUiLCJyZW5kZXIiLCJiaW5kIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxNQUFQLE1BQW1CLHNCQUFuQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsZ0JBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixhQUFuQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsZUFBdEI7O0FBRUEsTUFBTUMsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDaENDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjs7QUFFQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQURJO0FBRVhDLGdCQUFVLEVBRkM7QUFHWEMsb0JBQWNaO0FBSEgsS0FBYjtBQUtEOztBQUVEYSxlQUFhQyxLQUFiLEVBQW9CO0FBQ2xCLFNBQUtDLFFBQUwsQ0FBYztBQUNaTCxhQUFPSSxNQUFNRSxNQUFOLENBQWFDO0FBRFIsS0FBZDtBQUdEOztBQUVEQyxnQkFBYztBQUNaLFFBQUlDLGdCQUFnQm5CLE9BQU9vQixNQUFQLENBQWVDLEdBQUQsSUFBUztBQUN6QyxhQUFPQSxJQUFJQyxLQUFKLENBQVVDLFFBQVYsQ0FBbUIsS0FBS2QsS0FBTCxDQUFXQyxLQUE5QixDQUFQO0FBQ0QsS0FGbUIsQ0FBcEI7QUFHQSxTQUFLSyxRQUFMLENBQWM7QUFDWkgsb0JBQWNPO0FBREYsS0FBZDtBQUdEOztBQUVESyxpQkFBZVYsS0FBZixFQUFzQjtBQUNwQixTQUFLQyxRQUFMLENBQWM7QUFDWkosZ0JBQVVHLE1BQU1FLE1BQU4sQ0FBYUM7QUFEWCxLQUFkO0FBR0Q7O0FBRURRLHdCQUFzQjtBQUNwQkMsWUFBUUMsR0FBUixDQUFZLElBQVo7QUFDQSxRQUFJLEtBQUtsQixLQUFMLENBQVdHLFlBQVgsQ0FBd0JnQixNQUF4QixLQUFtQyxDQUF2QyxFQUEwQztBQUN4QyxXQUFLYixRQUFMLENBQWM7QUFDWkgsc0JBQWMsQ0FBQyxFQUFDVSxPQUFPLEtBQUtiLEtBQUwsQ0FBV0UsUUFBbkIsRUFBRDtBQURGLE9BQWQ7QUFHRCxLQUpELE1BSU87QUFDTCxXQUFLSSxRQUFMLENBQWVjLFNBQUQsS0FBZ0I7QUFDNUJqQixzQkFBYyxDQUFDLEdBQUdpQixVQUFVakIsWUFBZCxFQUE0QixFQUFDVSxPQUFPLEtBQUtiLEtBQUwsQ0FBV0UsUUFBbkIsRUFBNUI7QUFEYyxPQUFoQixDQUFkO0FBR0Q7QUFDRjs7QUFHRG1CLFdBQVM7QUFDUCxXQUNBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLE1BQUQsSUFBUSxPQUFPLEtBQUtyQixLQUFMLENBQVdDLEtBQTFCO0FBQ0Esd0JBQWMsS0FBS0csWUFBTCxDQUFrQmtCLElBQWxCLENBQXVCLElBQXZCLENBRGQ7QUFFQSx1QkFBYSxLQUFLYixXQUFMLENBQWlCYSxJQUFqQixDQUFzQixJQUF0QixDQUZiO0FBREYsT0FGRjtBQU9FO0FBQUE7QUFBQTtBQUNFLDRCQUFDLFNBQUQsSUFBVyxPQUFPLEtBQUt0QixLQUFMLENBQVdFLFFBQTdCO0FBQ0EsMEJBQWdCLEtBQUthLGNBQUwsQ0FBb0JPLElBQXBCLENBQXlCLElBQXpCLENBRGhCO0FBRUEsK0JBQXFCLEtBQUtOLG1CQUFMLENBQXlCTSxJQUF6QixDQUE4QixJQUE5QixDQUZyQjtBQURGLE9BUEY7QUFZRTtBQUFBO0FBQUE7QUFBSyw0QkFBQyxTQUFELElBQVcsUUFBUSxLQUFLdEIsS0FBTCxDQUFXRyxZQUE5QjtBQUFMO0FBWkYsS0FEQTtBQWdCRDtBQS9EK0I7O0FBbUVsQyxlQUFlUixHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb3ZpZXMgZnJvbSBcIi4uL2RhdGEvbW9jay5kYXRhLmpzXCJcbmltcG9ydCBNb3ZpZUxpc3QgZnJvbSBcIi4vTW92aWVMaXN0LmpzXCJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vU2VhcmNoLmpzXCJcbmltcG9ydCBBZGRNb3ZpZXMgZnJvbSBcIi4vQWRkTW92aWUuanNcIlxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vdmllOiAnJyxcbiAgICAgIGFkZE1vdmllOiAnJyxcbiAgICAgIGN1cnJlbnRNb3ZpZTogbW92aWVzXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFxuICAgICAgbW92aWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdmFyIGZpbHRlcmVkTW92aWUgPSBtb3ZpZXMuZmlsdGVyKChtb3YpID0+IHtcbiAgICAgIHJldHVybiBtb3YudGl0bGUuaW5jbHVkZXModGhpcy5zdGF0ZS5tb3ZpZSk7XG4gICAgfSkgXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFxuICAgICAgY3VycmVudE1vdmllOiBmaWx0ZXJlZE1vdmllXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVBZGRNb3ZpZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWRkTW92aWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVBZGRNb3ZpZUNsaWNrKCkge1xuICAgIGNvbnNvbGUubG9nKDExMTMpXG4gICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudE1vdmllLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRNb3ZpZTogW3t0aXRsZTogdGhpcy5zdGF0ZS5hZGRNb3ZpZX1dXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgIGN1cnJlbnRNb3ZpZTogWy4uLnByZXZTdGF0ZS5jdXJyZW50TW92aWUsIHt0aXRsZTogdGhpcy5zdGF0ZS5hZGRNb3ZpZX1dXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKCBcbiAgICA8ZGl2PlxuICAgICAgPGgxPk1vdmllIExpc3Q8L2gxPlxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlYXJjaCBtb3ZpZT17dGhpcy5zdGF0ZS5tb3ZpZX0gXG4gICAgICAgIGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0gXG4gICAgICAgIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPEFkZE1vdmllcyBtb3ZpZT17dGhpcy5zdGF0ZS5hZGRNb3ZpZX1cbiAgICAgICAgaGFuZGxlQWRkTW92aWU9e3RoaXMuaGFuZGxlQWRkTW92aWUuYmluZCh0aGlzKX1cbiAgICAgICAgaGFuZGxlQWRkTW92aWVDbGljaz17dGhpcy5oYW5kbGVBZGRNb3ZpZUNsaWNrLmJpbmQodGhpcyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj48TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5jdXJyZW50TW92aWV9IC8+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQXBwIl19