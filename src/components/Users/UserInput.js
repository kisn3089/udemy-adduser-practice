import React, { useState } from 'react';
import classes from './UserInput.module.css'
import Card from "../UI/Card";
import Button from "../UI/Button";

const UserInput = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const nameValue = (e) => {
        setUserName(e.target.value);
    }
    const ageValue = (e) => {
        setUserAge(e.target.value);
    }
    const userSubmit = (e) => {
        e.preventDefault();
        if(userName.trim().length === 0 || userAge.trim().length === 0) {
            return;
        }
        if(+userAge < 1) {
            return;
        }
        console.log(userName, userAge)
        props.userData(userName, userAge);
        setUserName('');
        setUserAge('');
    }

    const nameFocus = () => {
        setUserName('');
    }
    const ageFocus = () => {
        setUserAge('');
    }

 return (
     <Card className={classes.input}>
       <form onSubmit={userSubmit}>
           <div>
               <label htmlFor="userName">User Name</label>
               <input id="userName" type="text" maxLength="13" value={userName} onChange={nameValue} onClick={nameFocus} />
               <label htmlFor="userAge">Age (Years)</label>
               <input id="userAge" type="text" maxLength="3" value={userAge} onChange={ageValue} onClick={ageFocus} pattern="[0-9]+" />
               <Button type="submit">Add User</Button>
           </div>
       </form>
     </Card>
 );
}

export default UserInput;