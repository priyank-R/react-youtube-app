import React from "react";


class SearchBar extends React.Component{

state = {term: ''}

onFormSubmit = (event)=>{
  event.preventDefault()
  this.props.onFormSubmit(this.state.term)

  //Todo: Makesure we call callback from parent component
}

render(){
  return (
    <div className="search-bar">
    <form onSubmit={this.onFormSubmit} className="ui form">
    <div className="search-bar ui fluid icon input">
      <input type="text" placeholder="Video Search..." value={this.state.term} onChange={e => this.setState({term:e.target.value})} />
      <i className="search icon"></i>
      </div>
      </form>
      
    </div>
  );
}
};

export default SearchBar;
