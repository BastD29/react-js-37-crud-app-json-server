import React, { useState, useEffect } from "react";

function GetUsers() {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8000/users");
  //       const data = await response.json();
  //       setUsers(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8000/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </li>
      ))}
    </ul>
  );
}

export default GetUsers;
