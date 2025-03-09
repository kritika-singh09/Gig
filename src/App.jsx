import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./components/page1/Dashboard";
// import Dashboard from "./components/page2/Dashboard";
function App() {
  return (
    <Router> 
    <Routes>
     <Route path="/login"element={<Login/>}/>
      <Route path="/signup"element={<Signup/>}/>
      <Route path="/" element={<Dashboard />} />
      {/* <Route path="/"element={<Dashboard/>}/> */}
    </Routes>
    </Router>
  );
}

export default App;


