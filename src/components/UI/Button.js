import React from "react";
import classes from "./Button.module.css";

const Button = (props)=>{
      return (
        <div>
            <button alt='Save user profile'  
            className={classes.button} 
            type={props.type || 'button'}
            onClick={props.onClick}
            >{props.children}</button>
        </div>
      );
}

export default Button;