import React from 'react';
import Logo from "../icons/logo.png";
import OutlinedButtons from "./login_button";
import ContainedButtons from "./register_button";
const Index = () => {
    return ( 
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

export default Index;