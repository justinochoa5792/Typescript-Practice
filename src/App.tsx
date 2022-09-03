import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
// Components
import Home from "./Components/Home";
import Login from "./Components/Login";
import Contact from "./Contact";
// Redux
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/contact"> Contact </Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
