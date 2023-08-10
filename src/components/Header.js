import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {

    return (  <header className={classes.header}>
    <img src={props.image} alt="logo" />
    <h1>User Registration</h1>
  </header>);

}

export default Header;