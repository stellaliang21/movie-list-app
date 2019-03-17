import movies from "../data/mock.data.js";
import MovieList from "./MovieList.js";
import Search from "./Search.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: '',
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
        React.createElement(MovieList, { movies: this.state.currentMovie })
      )
    );
  }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsibW92aWVzIiwiTW92aWVMaXN0IiwiU2VhcmNoIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJtb3ZpZSIsImN1cnJlbnRNb3ZpZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNsaWNrIiwiZmlsdGVyZWRNb3ZpZSIsImZpbHRlciIsIm1vdiIsInRpdGxlIiwiaW5jbHVkZXMiLCJyZW5kZXIiLCJiaW5kIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxNQUFQLE1BQW1CLHNCQUFuQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsZ0JBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixhQUFuQjs7QUFHQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOOztBQUVBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPLEVBREk7QUFFWEMsb0JBQWNWO0FBRkgsS0FBYjtBQUlEOztBQUdEVyxlQUFhQyxLQUFiLEVBQW9CO0FBQ2xCLFNBQUtDLFFBQUwsQ0FBYztBQUNaSixhQUFPRyxNQUFNRSxNQUFOLENBQWFDO0FBRFIsS0FBZDtBQUdEOztBQUVEQyxnQkFBYzs7QUFFWixRQUFJQyxnQkFBZ0JqQixPQUFPa0IsTUFBUCxDQUFlQyxHQUFELElBQVM7QUFDekMsYUFBT0EsSUFBSUMsS0FBSixDQUFVQyxRQUFWLENBQW1CLEtBQUtiLEtBQUwsQ0FBV0MsS0FBOUIsQ0FBUDtBQUNELEtBRm1CLENBQXBCO0FBR0EsU0FBS0ksUUFBTCxDQUFjO0FBQ1pILG9CQUFjTztBQURGLEtBQWQ7QUFJRDs7QUFJREssV0FBUztBQUNQLFdBQ0E7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsTUFBRCxJQUFRLE9BQU8sS0FBS2QsS0FBTCxDQUFXQyxLQUExQjtBQUNBLHdCQUFjLEtBQUtFLFlBQUwsQ0FBa0JZLElBQWxCLENBQXVCLElBQXZCLENBRGQ7QUFFQSx1QkFBYSxLQUFLUCxXQUFMLENBQWlCTyxJQUFqQixDQUFzQixJQUF0QixDQUZiO0FBREYsT0FGRjtBQU9FO0FBQUE7QUFBQTtBQUFLLDRCQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUtmLEtBQUwsQ0FBV0UsWUFBOUI7QUFBTDtBQVBGLEtBREE7QUFXRDtBQTFDK0I7O0FBOENsQyxlQUFlUCxHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb3ZpZXMgZnJvbSBcIi4uL2RhdGEvbW9jay5kYXRhLmpzXCJcbmltcG9ydCBNb3ZpZUxpc3QgZnJvbSBcIi4vTW92aWVMaXN0LmpzXCJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vU2VhcmNoLmpzXCJcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vdmllOiAnJyxcbiAgICAgIGN1cnJlbnRNb3ZpZTogbW92aWVzXG4gICAgfVxuICB9XG4gIFxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBcbiAgICAgIG1vdmllOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIFxuICAgIHZhciBmaWx0ZXJlZE1vdmllID0gbW92aWVzLmZpbHRlcigobW92KSA9PiB7XG4gICAgICByZXR1cm4gbW92LnRpdGxlLmluY2x1ZGVzKHRoaXMuc3RhdGUubW92aWUpO1xuICAgIH0pIFxuICAgIHRoaXMuc2V0U3RhdGUoeyBcbiAgICAgIGN1cnJlbnRNb3ZpZTogZmlsdGVyZWRNb3ZpZVxuICAgIH0pO1xuXG4gIH1cblxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoIFxuICAgIDxkaXY+XG4gICAgICA8aDE+TW92aWUgTGlzdDwvaDE+XG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VhcmNoIG1vdmllPXt0aGlzLnN0YXRlLm1vdmllfSBcbiAgICAgICAgaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSBcbiAgICAgICAgaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PjxNb3ZpZUxpc3QgbW92aWVzPXt0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZX0gLz48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBBcHAiXX0=