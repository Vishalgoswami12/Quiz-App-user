import React from "react";
import { NavLink } from "react-router-dom";
// import Image from "./Componenets/Image";




function App() {

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <div className="header">

      <NavLink activeClassName = "active" to="/" >
       <button>Home</button>
      </NavLink>

      <NavLink activeClassName = "active" to="/AddQuestion" >
       <button>AddQuestion</button>
      </NavLink>

      <NavLink activeClassName = "active" to="/TakeQuiz!" >
       <button>TakeQuiz</button>
      </NavLink>
      
     
      </div>
      {/* <Image/> */}
    </div>
  );
}

export default App;
