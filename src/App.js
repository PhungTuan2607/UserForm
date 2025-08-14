
import React, { useState } from "react";
import "./App.css";
import UserName from "./components/userName";
import UserForm from "./components/userForm";
function App() {
  const [user, setUser] = useState([
    { name: "Nguyễn Văn A", age: 18 },
    { name: "Nguyễn Văn B", age: 19 },
    { name: "Nguyễn Văn C", age: 20 },
  ])
  const addName = (name) => {
    setUser([...user, { name }]);
  }
   const deleteUser = (index) => {
     const updatedUsers = user.filter((_, i) => i !== index);
     setUser(updatedUsers);
   };
  return (
    <div className="App">
      <UserName user={user} onDelete={deleteUser} />
      <UserForm addName={addName} />
    </div>
  );
}

export default App;
