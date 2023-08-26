import React from "react";
import { Link } from "react-router-dom";
import "./Loginpage.css";
import facebook_logo from "../assets/facebook_logo.svg";
function Loginpage() {
  return (
    // <div className="Login">
    //   <div className="loginMain">
    //     <div className="fscebook">
    //       <div className="facebooktext">facebook</div>
    //       <div className="title">
    //         Facebook helps you connect and share with the people in your life.
    //       </div>
    //     </div>
    //   </div>
    //   <div className="loginContainer">
    //     <div className="Logindetails">
    //       <input type="email" placeholder="Email address or phone number" />
    //       <br></br>
    //       <input type="Password" placeholder="Password" />
    //       <br></br>

    //       <button className="btn">
    //         <Link to="/HeaderArea">Login</Link>
    //       </button>
    //     </div>
    //     <div className="forget">
    //       <a href="forget">Forgotten account?</a>
    //       <br></br>
    //       <button className="btns">Create New Account</button>
    //     </div>
    //     <p></p>
    //     <br></br>
    //     <div className="page">
    //       <a href="createpage">
    //         <b>Create a page</b>
    //       </a>{" "}
    //       for a celebrity,brand or business.
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="content">
        <div className="flex-div">
          <div className="name-content">
            <img
              src={facebook_logo}
              style={{ height: "106px" }}
              alt="Facebook"
            />
            <h2 className="name-content-subHeader">
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
          <div className="form">
            <div className="form-content">
              <div className="email">
                <input
                  className="input_email"
                  type="text"
                  placeholder="Email address or phone number"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div className="email">
                <input
                  className="input_email"
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="login_btn">
                <button className="login">Log In</button>
              </div>
              <div className="forget_pw">
                <a>Forgotten Password ?</a>
              </div>
              <hr />
              <div className="btn_crt_acc">
                <button className="create-account">Create new account</button>
              </div>
            </div>
            <div className="celebrity-page">
              <a>
                <b>Create a page</b>
              </a>{" "}
              for a celebrity,brand or business.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Loginpage;
