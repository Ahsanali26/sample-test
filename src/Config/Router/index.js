import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, ProfilePage } from "../../Pages";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive element={<Home /> } />
        <Route path="/profile/:id" caseSensitive element={<ProfilePage /> } />
      </Routes>
    </Router>
  );
};

export default AppRouter;