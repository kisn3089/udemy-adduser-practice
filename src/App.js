import React, { useState } from 'react'
import './App.css';
import UserInput from "./components/Users/UserInput";
import UsersList from "./components/Users/UsersList";

function App() {
    const [userList, setUserList] = useState([]);

    const setUserData = (uName, uAge) => {
        setUserList((prevUserList) => {
            return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}];
        })
    };

  return (
    <div className="App">
        <UserInput userData={setUserData} />
        <UsersList users={userList} />
    </div>
  );
}

export default App;
