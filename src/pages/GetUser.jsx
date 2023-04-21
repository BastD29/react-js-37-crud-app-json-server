import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function GetUser() {
  let params = useParams();

  const [user, setUser] = useState({});

  // const fetchUser = async (id) => {
  //   try {
  //     const response = await fetch(`http://localhost:8000/users/${id}`);
  //     const data = await response.json();
  //     console.log("data:", data);
  //     setUser(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUser(params.userId);
  // }, [params.userId]);

  useEffect(() => {
    const fetchUser = async (id) => {
      try {
        const response = await fetch(`http://localhost:8000/users/${id}`);
        const data = await response.json();
        console.log("data:", data);
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser(params.userId);
  }, [params.userId]);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default GetUser;
