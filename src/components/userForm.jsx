import React, { useState } from "react";
const UserForm = ({ addName }) => {
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addName(name);
        setName("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" placeholder="Name" required value={name} onChange={(e)=> setName(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )
}
export default UserForm;