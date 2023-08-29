import React from "react";
import "./Loginpage.css";
import facebook_logo from "../../assets/facebook_logo.svg";
function Loginpage() {
  return (
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
                <p>Forgotten Password ?</p>
              </div>
              <hr />
              <div className="btn_crt_acc">
                <button className="create-account">Create new account</button>
              </div>
            </div>
            <div className="celebrity-page">
              <b>Create a page</b> for a celebrity,brand or business.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Loginpage;
