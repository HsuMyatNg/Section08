import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModel.module.css";
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.errorHandler} />
}
const Overlay = (props) => {
    return(
        <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.errorHandler}>OK</Button>
        </footer>
    </Card>
    );
}
const ErrorModel = (props) => {
    return(
        <React.Fragment>
           {ReactDOM.createPortal(
               <Backdrop onClick={props.errorHandler} />,
               document.getElementById("backdrop-root")
           )}
           {ReactDOM.createPortal(
               <Overlay 
               title={props.title}
               message={props.message}
               errorHandler={props.errorHandler} />,
               document.getElementById("overlay-root")
           )}
        </React.Fragment>       
    );
};
export default ErrorModel;