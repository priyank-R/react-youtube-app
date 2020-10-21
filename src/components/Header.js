import React, { Fragment } from "react";
import SearchBar from './SearchBar'

const Header = (props) => {

  const onHeaderSearchSubmit = (term)=>{
        props.onFormSubmit(term)
    }


  return (
    <Fragment>
      <header id="header">
        <h1>
          <a href="index.html">Made by Priyank Rupareliya</a>
        </h1>
        <nav className="links">
       
        </nav>
        <nav className="main">
          <ul>
            <SearchBar onHeaderSearchSubmit={onHeaderSearchSubmit} />
            <li className="menu">
              <a className="fa-bars" href="#menu">
                Menu
              </a>
            </li>
          </ul>
        </nav>
      </header>

      
    
    </Fragment>
  );
};

export default Header;
