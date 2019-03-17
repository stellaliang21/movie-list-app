var AddMovies = props => React.createElement(
  "div",
  null,
  React.createElement("input", { type: "text",
    onChange: event => {
      props.handleAddMovie(event);
    } }),
  React.createElement(
    "button",
    { className: "addMovieButton", onClick: props.handleAddMovieClick },
    "  Add Movie "
  )
);

export default AddMovies;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FkZE1vdmllLmpzeCJdLCJuYW1lcyI6WyJBZGRNb3ZpZXMiLCJwcm9wcyIsImV2ZW50IiwiaGFuZGxlQWRkTW92aWUiLCJoYW5kbGVBZGRNb3ZpZUNsaWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxZQUFhQyxLQUFELElBQ2Q7QUFBQTtBQUFBO0FBQ0UsaUNBQU8sTUFBSyxNQUFaO0FBQ0EsY0FBV0MsS0FBRCxJQUFXO0FBQUNELFlBQU1FLGNBQU4sQ0FBcUJELEtBQXJCO0FBQTRCLEtBRGxELEdBREY7QUFHRTtBQUFBO0FBQUEsTUFBUSxXQUFVLGdCQUFsQixFQUFtQyxTQUFTRCxNQUFNRyxtQkFBbEQ7QUFBQTtBQUFBO0FBSEYsQ0FERjs7QUFRQSxlQUFlSixTQUFmIiwiZmlsZSI6IkFkZE1vdmllLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEFkZE1vdmllcyA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxuICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtwcm9wcy5oYW5kbGVBZGRNb3ZpZShldmVudCl9fS8+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGRNb3ZpZUJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUFkZE1vdmllQ2xpY2t9PiAgQWRkIE1vdmllIDwvYnV0dG9uPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgQWRkTW92aWVzXG4iXX0=