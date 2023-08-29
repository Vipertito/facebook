import React from "react";
import "./MainArea.css";
import {
  FaAngleDown,
  FaCommentAlt,
  FaFacebookMessenger,
  FaFontAwesomeFlag,
  FaGrin,
  FaMedrt,
  FaRegShareSquare,
  FaRegThumbsUp,
  FaSearch,
  FaUserFriends,
} from "react-icons/fa";
import { MdMoreHoriz, MdVideoCall } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
function MainArea() {
  return (
    <div className="Main">
      <div className="Rside">
        <div className="Profile">
          <img
            src="4.jpg"
            alt="dp"
            style={{ height: "50px", padding: "1rem" }}
          />
          Mainak Banerjee
        </div>
        <div className="Pro">
          <FaUserFriends color="blue" fontSize="2rem" />
          <div>Friends</div>
        </div>
        <div className="Pro">
          <FaFontAwesomeFlag color="green" fontSize="2rem" />
          <div>Pages</div>
        </div>
        <div className="Pro">
          <FaMedrt color="blue" fontSize="2rem" />
          <div>COVID-19 Information Center</div>
        </div>
        <div className="Pro">
          <FaFacebookMessenger color="green" fontSize="2rem" />
          <div>Messenger Kids</div>
        </div>
        <div className="Pro">
          <FaAngleDown color="green" fontSize="2rem" />
          <div>See More</div>
        </div>
        <br></br>
        <div className="Profiles">
          <img
            src="5.jpg"
            alt="logo"
            style={{ height: "35px", padding: "1rem" }}
          />
          React Developer
        </div>
        <div className="Profiles">
          <img
            src="2.jpg"
            alt="logo"
            style={{ height: "35px", padding: "1rem" }}
          />
          MEAN STACK
        </div>
        <div className="Profiles">
          <img
            src="3.jpg"
            alt="logo"
            style={{ height: "35px", padding: "1rem" }}
          />
          JavaScript
        </div>
        <div className="Profiles">
          <img
            src="6.jpg"
            alt="logo"
            style={{ height: "35px", padding: "1rem" }}
          />
          React Developer
        </div>
        <div className="Pross">
          <FaAngleDown color="blue" fontSize="2rem" />
          <div>See More</div>
        </div>
      </div>
      <div className="MainArea">
        <div className="addStory">
          <div className="Story">
            <img
              src="4.jpg"
              alt="IMG"
              className="img-story"
            />
            <div className="footer">Mainak Banerjee</div>
          </div>
          <div className="Story">
            <img
              src="7.jpg"
              alt="IMG"
              className="img-story"
              />
              <div className="footer">Souvik Acharya</div>
          </div>
          <div className="Story">
            <img
              src="8.jpg"
              alt="IMG"
              className="img-story"
              />
              <div className="footer">Sagnik Sen</div>
          </div>
          <div className="Story">
            <img
              src="9.jpg"
              alt="IMG"
              className="img-story"
              />
              <div className="footer">Adyata Singha</div>
          </div>
          <div className="Story">
            <img
              src="10.jpg"
              alt="IMG"
              className="img-story"
              />
              <div className="footer">Avik Saha</div>
          </div>
        </div>
        <div className="message">
          <div className="text">
            <div className="Post">
              <img src="4.jpg" alt="PIC" />
              <input type="Mind" placeholder="What's on your mind, Mainak" />
            </div>
            <div className="Call">
              <div className="ico">
                <div className="icone">
                  <MdVideoCall fontSize="2rem" color="red" />
                  <div>LiveVideo</div>
                </div>
                <div className="icone">
                  <AiFillFileImage fontSize="2rem" color="green" />
                  <div>Photo/Video</div>
                </div>
                <div className="icone">
                  <FaGrin fontSize="2rem" color="orange" />
                  <div>Felling/activity</div>
                </div>
              </div>
            </div>
          </div>
          <div className="Posted">
            <div className="poster">
              <div className="Minee">
                <img
                  src="3.jpg"
                  alt="img"
                  style={{
                    height: "50px",
                    widows: "50px",
                    borderRadius: "50%",
                  }}
                />
                Minee
                <div className="update">Updated his cover image.</div>
              </div>
              <div className="edit">
                <MdMoreHoriz fontSize="1.5rem" />
              </div>
            </div>
            <div className="caption">
              Hey I am Mainak, This is my first social media website ..
            </div>
            <br></br>
            <div className="FacebookImg">
              <img
                src="1.jpg"
                alt="dp"
                style={{ height: "auto", width: "100%" }}
              />
            </div>
            <div className="Comment">
              <div className="Like">
                <FaRegThumbsUp color="grey" />
                Like
              </div>
              <div className="Like">
                <FaCommentAlt color="grey" />
                Comment
              </div>
              <div className="Like">
                <FaRegShareSquare color="grey" />
                Share
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Lside">
        <div className="Contact">
          <div className="Contacts">Contacts</div>

          <div className="chaticon">
            <div className="icons">
              <MdVideoCall fontSize="1.8rem" />
            </div>
            <div className="icons">
              <FaSearch fontSize="1.6rem" />
            </div>
            <div className="icons">
              <MdMoreHoriz fontSize="1.6rem" />
            </div>
          </div>
        </div>
        <div className="concise">
          <div className="Profilee">
            <img
              src="4.jpg"
              alt="logo"
              style={{ height: "35px", padding: "1rem" }}
            />
            Mainak Banerjee
          </div>
          <div className="Profilee">
            <img
              src="5.jpg"
              alt="logo"
              style={{ height: "35px", padding: "1rem" }}
            />
            Souvik Acharya
          </div>
          <div className="Profilee">
            <img
              src="3.jpg"
              alt="logo"
              style={{ height: "35px", padding: "1rem" }}
            />
            Sagnik Sen
          </div>
          <div className="Profilee">
            <img
              src="2.jpg"
              alt="logo"
              style={{ height: "35px", padding: "1rem" }}
            />
            Adyata Singha
          </div>
          <div className="Profilee">
            <img
              src="6.jpg"
              alt="logo"
              style={{ height: "35px", padding: "1rem" }}
            />
            Avik Saha
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainArea;
