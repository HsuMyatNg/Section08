import React, {useState ,useRef} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../UI/Helper/Wrapper";
import classes from "./AddUser.module.css";
const AddUser = (props) =>  {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState("");

    const addUserHandler = event => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0){
            setError({
                title: "Invalid Input",
                message: "Please Enter a Valid Name and Age (>0)",
            });
            return;
        }
        if(+enteredUserAge < 1){
            setError({
                title: "Invalid Age",
                message: "Please Enter a Valid Age (>0)",
            });
            return;
        }
        props.onAddUser(enteredName,enteredUserAge);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
    };
    const errorHandler = () => {
        setError(null);
    }
    return(
        <Wrapper>
              {error && (
           <ErrorModel 
           title={error.title} 
           message ={error.message}
           errorHandler = {errorHandler}
           />)}
            <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">User Name</label>
                <input 
                type="text" 
                id="username" 
                // onChange={userNameChangeHandler}
                // value={enterUserName}
                ref = {nameInputRef}
                ></input>
                <label htmlFor="age">Age</label>
                <input 
                type="number" 
                id="age" 
                // onChange={userAgeChangeHandler}
                // value={enteredUserAge}
                ref ={ageInputRef}
                ></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </Wrapper>
    );
}
export default AddUser;