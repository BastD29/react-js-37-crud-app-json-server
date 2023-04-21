import React from "react";
import { Route, Routes } from "react-router-dom";

import PostUser from "./pages/PostUser";
import GetUsers from "./pages/GetUsers";
import GetUser from "./pages/GetUser";
import UpdateUser from "./pages/UpdateUser";
import DeleteUser from "./pages/DeleteUser";

export default function App() {
  return (
    <Routes>
      <Route path="/post" element={<PostUser />} />
      <Route path="/users" element={<GetUsers />} />
      <Route path="/users/delete" element={<DeleteUser />} />
      <Route path="/users/:userId" element={<GetUser />} />
      <Route path="/users/:userId/update" element={<UpdateUser />} />
    </Routes>
  );
}
