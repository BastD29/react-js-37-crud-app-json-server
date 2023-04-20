import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  console.log({ id });

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`http://localhost:8000/users/${id}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    getUser();
  }, [id]);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default User;
