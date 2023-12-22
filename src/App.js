import React, { useEffect } from "react";
import './App.css';
import Header from './Header.js';
import Home from './Home';
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './LoginPage'
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";


function App() {

  const [{},dispatch]=useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      console.log("The use is >>>",authUser)
      if(auth){
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }else{
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
  },[])
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/login" element={<LoginPage></LoginPage>}/>
        <Route path="/" element={[<Header/>,<Home/>]}/>
        <Route path="/checkout" element={[<Header/>,<Checkout />]}/>
      </Routes>
       </div>
       </Router>
      
  );
}

export default App;
