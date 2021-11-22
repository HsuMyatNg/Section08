import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";
const UserList = (props) => {
    return(
        <Card classesName={classes.users}>
            <ul>
                {props.usr.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} Years Old.)
                    </li>
                ))}               
        </ul>
        </Card>
    );
};
export default UserList;