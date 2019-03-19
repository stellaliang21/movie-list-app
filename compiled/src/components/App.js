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
      currentMovie: movies //[{title: "bla", watch: "unwatched"}]
    };
  }

  handleFindMovie(callback) {
    $.get('https://api.themoviedb.org/3/search/movie', {
      api_key: '2876f55117ee9e9fb74bcb3f8a36ad6b',
      query: 'barbie'
    }).done(data => {
      console.log(data.items);
    }).fail(data => {
      console.log('fail');
    });
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
    if (this.state.currentMovie.length === 0) {
      this.setState({
        currentMovie: [{ title: this.state.addMovie, watch: true }]
      });
    } else {
      this.setState(prevState => ({
        currentMovie: [...prevState.currentMovie, { title: this.state.addMovie, watch: true }]
      }));
    }
  }

  toggleWatchBtn(clickedMovie) {
    var movie = this.state.currentMovie.map(mov => {
      console.log(clickedMovie);
      if (clickedMovie === mov.title) {
        console.log('hello');
        mov.watch = !mov.watch;
      }
      return mov;
    });
    console.log(movie);
    this.setState({ currentMovie: movie });
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
        React.createElement(MovieList, { movies: this.state.currentMovie,
          toggleWatchBtn: this.toggleWatchBtn.bind(this) })
      ),
      React.createElement("button", { onClick: this.handleTest })
    );
  }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsibW92aWVzIiwiTW92aWVMaXN0IiwiU2VhcmNoIiwiQWRkTW92aWVzIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJtb3ZpZSIsImFkZE1vdmllIiwiY3VycmVudE1vdmllIiwiaGFuZGxlRmluZE1vdmllIiwiY2FsbGJhY2siLCIkIiwiZ2V0IiwiYXBpX2tleSIsInF1ZXJ5IiwiZG9uZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaXRlbXMiLCJmYWlsIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJmaWx0ZXJlZE1vdmllIiwiZmlsdGVyIiwibW92IiwidGl0bGUiLCJpbmNsdWRlcyIsImhhbmRsZUFkZE1vdmllIiwiaGFuZGxlQWRkTW92aWVDbGljayIsImxlbmd0aCIsIndhdGNoIiwicHJldlN0YXRlIiwidG9nZ2xlV2F0Y2hCdG4iLCJjbGlja2VkTW92aWUiLCJtYXAiLCJyZW5kZXIiLCJiaW5kIiwiaGFuZGxlVGVzdCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsTUFBUCxNQUFtQixzQkFBbkI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGdCQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsYUFBbkI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGVBQXRCOztBQUVBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQURJO0FBRVhDLGdCQUFVLEVBRkM7QUFHWEMsb0JBQWNaLE1BSEgsQ0FHVTtBQUhWLEtBQWI7QUFLRDs7QUFHRGEsa0JBQWdCQyxRQUFoQixFQUEwQjtBQUN4QkMsTUFBRUMsR0FBRixD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LEtBQUs2QixjQUFMLENBQW9CSSxJQUFwQixDQUF5QixJQUF6QixDQURoQjtBQURGLE9BWkY7QUFnQkUsc0NBQVEsU0FBUyxLQUFLQyxVQUF0QjtBQWhCRixLQURBO0FBb0JEO0FBaEcrQjs7QUFvR2xDLGVBQWUxQyxHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb3ZpZXMgZnJvbSBcIi4uL2RhdGEvbW9jay5kYXRhLmpzXCJcbmltcG9ydCBNb3ZpZUxpc3QgZnJvbSBcIi4vTW92aWVMaXN0LmpzXCJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vU2VhcmNoLmpzXCJcbmltcG9ydCBBZGRNb3ZpZXMgZnJvbSBcIi4vQWRkTW92aWUuanNcIlxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZTogJycsXG4gICAgICBhZGRNb3ZpZTogJycsXG4gICAgICBjdXJyZW50TW92aWU6IG1vdmllcyAvL1t7dGl0bGU6IFwiYmxhXCIsIHdhdGNoOiBcInVud2F0Y2hlZFwifV1cbiAgICB9XG4gIH1cblxuXG4gIGhhbmRsZUZpbmRNb3ZpZShjYWxsYmFjaykge1xuICAgICQuZ2V0KCdodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3NlYXJjaC9tb3ZpZScsIHtcbiAgICAgIGFwaV9rZXk6ICcyODc2ZjU1MTE3ZWU5ZTlmYjc0YmNiM2Y4YTM2YWQ2YicsXG4gICAgICBxdWVyeTogJ2JhcmJpZSdcbiAgICB9KVxuICAgICAgLmRvbmUoKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5pdGVtcylcbiAgICAgIH0pXG4gICAgICAuZmFpbCgoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZmFpbCcpXG4gICAgICB9KTtcbiAgfVxuXG4gIFxuXG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFxuICAgICAgbW92aWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdmFyIGZpbHRlcmVkTW92aWUgPSBtb3ZpZXMuZmlsdGVyKChtb3YpID0+IHtcbiAgICAgIHJldHVybiBtb3YudGl0bGUuaW5jbHVkZXModGhpcy5zdGF0ZS5tb3ZpZSk7XG4gICAgfSkgXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFxuICAgICAgY3VycmVudE1vdmllOiBmaWx0ZXJlZE1vdmllXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVBZGRNb3ZpZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWRkTW92aWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVBZGRNb3ZpZUNsaWNrKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjdXJyZW50TW92aWU6IFt7dGl0bGU6IHRoaXMuc3RhdGUuYWRkTW92aWUsIHdhdGNoOiB0cnVlfV1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgY3VycmVudE1vdmllOiBbLi4ucHJldlN0YXRlLmN1cnJlbnRNb3ZpZSwge3RpdGxlOiB0aGlzLnN0YXRlLmFkZE1vdmllLCB3YXRjaDogdHJ1ZX1dXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuXG4gIHRvZ2dsZVdhdGNoQnRuKGNsaWNrZWRNb3ZpZSkge1xuICAgIHZhciBtb3ZpZSA9IHRoaXMuc3RhdGUuY3VycmVudE1vdmllLm1hcCgobW92KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhjbGlja2VkTW92aWUpXG4gICAgICBpZiAoY2xpY2tlZE1vdmllID09PSBtb3YudGl0bGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hlbGxvJylcbiAgICAgICAgbW92LndhdGNoID0gIW1vdi53YXRjaFxuICAgICAgfVxuICAgICAgcmV0dXJuIG1vdlxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKG1vdmllKVxuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRNb3ZpZTogbW92aWV9KVxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICggXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Nb3ZpZSBMaXN0PC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWFyY2ggbW92aWU9e3RoaXMuc3RhdGUubW92aWV9IFxuICAgICAgICBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IFxuICAgICAgICBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxBZGRNb3ZpZXMgbW92aWU9e3RoaXMuc3RhdGUuYWRkTW92aWV9XG4gICAgICAgIGhhbmRsZUFkZE1vdmllPXt0aGlzLmhhbmRsZUFkZE1vdmllLmJpbmQodGhpcyl9XG4gICAgICAgIGhhbmRsZUFkZE1vdmllQ2xpY2s9e3RoaXMuaGFuZGxlQWRkTW92aWVDbGljay5iaW5kKHRoaXMpfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzPXt0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZX0gXG4gICAgICAgIHRvZ2dsZVdhdGNoQnRuPXt0aGlzLnRvZ2dsZVdhdGNoQnRuLmJpbmQodGhpcyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVRlc3R9PjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcCJdfQ==