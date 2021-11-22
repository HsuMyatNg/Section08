import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
const AddUser = (props) =>  {
    const [enterUserName, setEnterUserName] = useState("");
    const [enterAge, setEnterAge] = useState("");
    const userNameChangeHandler = (event) => {
        setEnterUserName(event.target.value);
    }
    const userAgeChangeHandler = (event) => {
        setEnterAge(event.target.value);
    }
    const addUserHandler = event => {
        event.preventDefault();
        if(enterUserName.trim().length === 0 || enterAge.trim.length === 0){
            return;
        }
        if(+enterAge < 1){
            return;
        }
        props.onAddUser(enterUserName,enterAge);
        setEnterUserName("");
        setEnterAge("");
    };
    return(
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">User Name</label>
                <input type="text" id="username" onChange={userNameChangeHandler}
                value={enterUserName}
                ></input>
                <label htmlFor="age">Age</label>
                <input type="number" id="age" onChange={userAgeChangeHandler}
                value={enterAge}
                ></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}
export default AddUser;