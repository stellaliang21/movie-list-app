var Search = props => React.createElement(
  "div",
  null,
  React.createElement("input", { type: "text"
    // value={props.movie} 
    , onChange: event => {
      props.handleChange(event);
    } }),
  React.createElement(
    "button",
    { className: "searchButton", onClick: props.handleClick },
    "Go"
  )
);

export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJldmVudCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUNsaWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxTQUFVQyxLQUFELElBQ1g7QUFBQTtBQUFBO0FBQ0UsaUNBQU8sTUFBSztBQUNWO0FBREYsTUFFRSxVQUFXQyxLQUFELElBQVc7QUFBQ0QsWUFBTUUsWUFBTixDQUFtQkQsS0FBbkI7QUFBMEIsS0FGbEQsR0FERjtBQUlFO0FBQUE7QUFBQSxNQUFRLFdBQVUsY0FBbEIsRUFBa0MsU0FBU0QsTUFBTUcsV0FBakQ7QUFBQTtBQUFBO0FBSkYsQ0FERjs7QUFZQSxlQUFlSixNQUFmIiwiZmlsZSI6IlNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTZWFyY2ggPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgLy8gdmFsdWU9e3Byb3BzLm1vdmllfSBcbiAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtwcm9wcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfX0vPlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2VhcmNoQnV0dG9uXCIgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsaWNrfT5HbzwvYnV0dG9uPlxuICA8L2Rpdj5cbilcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoIl19