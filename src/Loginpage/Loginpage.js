import React from "react";
import {Link} from 'react-router-dom'
import './Loginpage.css'
function Loginpage(){
    return(
        <div className="Login">
        <div className="fscebook">
        <div className="facebooktext">
            facebook
        </div>
            <div className="title">
                Facebook helps you connect and share 
                <br></br>with the people in your life.
            </div>
        </div>
        <div className="loginContainer">
            <div className="Logindetails">
                <input type="email" placeholder="Email address or phone number"/>
                <br></br>
                <input type="Password" placeholder="Password"/>
                <br></br>

                <button className="btn">
                    <Link to="/HeaderArea">Login</Link>
                </button>
            </div>
            <div className="forget">
                <a href="forget">Forgotten account?</a>
                <br></br>
            <button className="btns">
                    Create New Account
            </button>
            </div>
            <p></p>
            <br></br>
        <div className="page">
                <a href="createpage"><b>Create a page</b></a> for a celebrity,brand or business. 
            </div>
        </div>
       </div>
    )
}
export default Loginpage;