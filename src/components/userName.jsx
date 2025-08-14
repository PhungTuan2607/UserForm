import React, { useState } from "react";

const UserName = ({ user, onDelete }) => {
  return (
    <div>
      {user.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Age: {item.age}</p>
          <button onClick={() => onDelete(index)}>Xóa</button>
        </div>
      ))}
    </div>
  );
};

export default UserName;