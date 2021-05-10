import React from 'react'
import Logo from "./icons/logo.png";
import OutlinedButtons from "./components/login_button";
import ContainedButtons from "./components/register_button";
import Route from "react-router-dom/Route";
import "./App.css";
import { BrowserRouter as Router,Switch } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import ReactNotifications from 'react-notifications-component';
//import OutlinedButtons from "./components/login_button";
import Navbar from './components/Navbar';
import Profile_Editable from './components/Profile_Editable'
import Profile from "./components/Profile";
import Main from "./components/main";
const App = () => {
  return (
    <div>
      <ReactNotifications />
    <Router>
      
      <Switch>
    <Route path ="/" exact render={
      () =>{
        return(
          <div className="image_div">
            <span><img src={Logo} alt="icon pic" /></span>
            <div>
            <h1 className="mainheading">XYZ.com</h1>
            <p>An Interactive Web Application</p>
            </div>
            <div className="info">
            <h1 className="divheading">What is Lorem Ipsum?</h1>
            <p align="justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <h2>LETS GET STARTED !</h2>
            <OutlinedButtons />
            <ContainedButtons />
            </div>
        </div>
        );
      }
    }/>
    <Route path="/signup" exact component={SignUp}/>
    <Route path="/login" exact component={Login}/>
    <Route path="/main"><Main /></Route>
    <Route path="/edit">
    <Profile_Editable email= {localStorage.getItem("email")} /> 
    </Route>
    <Route path= "/profile" exact >
      <Profile email= {localStorage.getItem("email")}/>
      </Route>
    </Switch>
  </Router>  
  
  </div>
  )
}

export default App;