var Search = (props) => (
  <div>
    <input type="text"
      // value={props.movie} 
      onChange={(event) => {props.handleChange(event)}}/>
    <button className="searchButton"  onClick={props.handleClick}>Go</button>
  </div>
)




export default Search