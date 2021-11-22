import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
    return(
        <Button
            classesName={classes.button}
            onClick ={props.onClick || "button"}
            type = {props.type }
        >
            {props.children}
        </Button>
    );
}
export default Button;