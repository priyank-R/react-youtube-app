import React, { Fragment } from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onSearchFormSubmit = (event) => {
    event.preventDefault();
    //this.props.onFormSubmit(this.state.term);
    this.props.onHeaderSearchSubmit(this.state.term);
    console.log("TERM is", this.state.term);
    //Todo: Makesure we call callback from parent component
  };

  render() {
    return (
      <Fragment>
        <li className="search"> 
          <form onSubmit={this.onSearchFormSubmit}>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </form>
          </li>
      </Fragment>
    );
  }
}

export default SearchBar;
