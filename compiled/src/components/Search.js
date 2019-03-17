var Search = props => React.createElement(
  "div",
  null,
  React.createElement("input", { type: "text",
    onChange: event => {
      props.handleChange(event);
    } }),
  React.createElement(
    "button",
    { className: "searchButton", onClick: props.handleClick },
    "Go"
  )
);

export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJldmVudCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUNsaWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxTQUFVQyxLQUFELElBQ1g7QUFBQTtBQUFBO0FBQ0UsaUNBQU8sTUFBSyxNQUFaO0FBQ0UsY0FBV0MsS0FBRCxJQUFXO0FBQUNELFlBQU1FLFlBQU4sQ0FBbUJELEtBQW5CO0FBQTBCLEtBRGxELEdBREY7QUFHRTtBQUFBO0FBQUEsTUFBUSxXQUFVLGNBQWxCLEVBQWlDLFNBQVNELE1BQU1HLFdBQWhEO0FBQUE7QUFBQTtBQUhGLENBREY7O0FBU0EsZUFBZUosTUFBZiIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU2VhcmNoID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtwcm9wcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfX0vPlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2VhcmNoQnV0dG9uXCIgb25DbGljaz17cHJvcHMuaGFuZGxlQ2xpY2t9PkdvPC9idXR0b24+XG4gIDwvZGl2PlxuKVxuXG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaCJdfQ==