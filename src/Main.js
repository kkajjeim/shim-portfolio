import React, { useState } from "react";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

import K from "./assets/k.png";
import J from "./assets/j1.png";
import iconServer from "./assets/server_icon.png";
import iconBrowser from "./assets/browser_icon.png";
import iconJS from "./assets/js.png";
import iconTS from "./assets/ts.png";
import iconRedux from "./assets/redux.png";
import iconReact from "./assets/react.png";
import iconNode from "./assets/node.png";
import iconExpress from "./assets/express.png";
import iconMysql from "./assets/sql.png";

import mainIllust from "./assets/drawkit-server-woman-colour.svg";
import supportIllust from "./assets/drawkit-developer-woman-colour.svg";

import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }

  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container"
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  render() {
    return (
      <div className="main">
        {/* logo */}
        <div
          style={{
            position: "fixed",
            zIndex: "990",
            paddingTop: "40px",
            paddingLeft: "15%",
            paddingRight: "20%",
            fontFamily: "Raleway",
            fontWeight: "400"
          }}
        >
          KYUNGJU
          <span style={{ color: "#6BD5E1", fontWeight: "900" }}> SHIM</span>
          {/*  <img src={K} alt="K" style={{ width: "37px" }} />
          <img src={J} alt="J" style={{ width: "37px", marginLeft: "-7px" }} /> */}
        </div>
        {/* Navbar */}
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
          <nav
            className="uk-navbar-container"
            uk-navbar
            style={{
              position: "relative",
              zIndex: "980",
              backgroundColor: "white",
              fontWeight: "400",
              paddingTop: "9px",
              paddingRight: "15%",
              paddingBottom: "3px"
            }}
          >
            <div className="uk-navbar-right uk-flex uk-flex-right@s">
              <ul className="uk-navbar-nav">
                <li>
                  <Link
                    activeClass="active"
                    className="test1"
                    to="test1"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test2"
                    to="test2"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test3"
                    to="test3"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test4"
                    to="test4"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* About */}
        <div className="about">
          <Element name="test1" className="element"></Element>
          <div
            className="about_contents"
            style={{
              width: "100%",
              maxHeight: "50%",
              display: "flex",
              backgroundColor: "#F3F3F3"
            }}
          >
            <div
              className="about_contents_text"
              style={{
                width: "100%",
                marginTop: "7%",
                marginBottom: "7%",
                fontFamily: "Noto Sans KR",
                fontWeight: "100",
                fontSize: "2em",
                marginLeft: "15%"
              }}
            >
              <p style={{ marginBottom: "10px" }}>안녕하세요, </p>
              <p>
                웹 개발자 <span style={{ fontWeight: "300" }}>심경주</span>
                입니다.
              </p>
            </div>
            <div
              className="about_contents_image"
              style={{
                textAlign: "right"
              }}
            >
              <img
                src={mainIllust}
                alt="illustration"
                style={{
                  width: "40%",
                  position: "absolute",
                  top: "6%",
                  right: "15%"
                }}
              />
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="skills">
          <Element name="test2" className="element"></Element>
          <div className="skills_container" style={{ padding: "7% 15%" }}>
            <div className="skills_container_head">
              <p style={{ fontSize: "1.8em", marginBottom: "15px" }}>
                Technical Skills
              </p>
              <p style={{ fontSize: "1em" }}>
                프로젝트를 진행하며 경험하고 학습한 기술스택입니다.
              </p>
            </div>
            <div
              className="skills_container_body"
              style={{ marginTop: "100px" }}
            >
              <div
                className="skills_container_body_front"
                style={{ display: "flex" }}
              >
                <div style={{ textAlign: "center" }}>
                  <img
                    src={iconBrowser}
                    alt="browser"
                    style={{ width: "70px", height: "70px", opacity: "0.8" }}
                  />
                  <p
                    style={{
                      width: "100%",
                      marginTop: "17px",
                      fontSize: "1.1em",
                      fontWeight: "300"
                    }}
                  >
                    Front-end
                  </p>
                </div>
                <div
                  style={{
                    marginLeft: "8%",
                    borderLeft: "1px dotted gray",
                    height: "110px"
                  }}
                ></div>
                <div
                  className="front_icons"
                  style={{
                    width: "60%",
                    marginLeft: "4%",
                    display: "flex",
                    justifyContent: "space-around"
                  }}
                >
                  <div className="js" style={{ textAlign: "center" }}>
                    <img src={iconJS} alt="js" style={{ width: "60px" }} />
                    <p style={{ marginTop: "10px" }}>JavaScript</p>
                    <p
                      style={{
                        marginTop: "5px",
                        fontWeight: "900",
                        fontSize: "0.7em",
                        fontStyle: "italic",
                        color: "gray"
                      }}
                    >
                      mainly
                    </p>
                  </div>
                  <div className="react" style={{ textAlign: "center" }}>
                    <img
                      src={iconReact}
                      alt="react"
                      style={{ width: "60px" }}
                    />
                    <p style={{ marginTop: "10px" }}>React</p>
                    <p
                      style={{
                        marginTop: "5px",
                        fontWeight: "900",
                        fontSize: "0.7em",
                        fontStyle: "italic",
                        color: "gray"
                      }}
                    >
                      mainly
                    </p>
                  </div>
                  <div className="redux" style={{ textAlign: "center" }}>
                    <img src={iconRedux} alt="js" style={{ width: "60px" }} />
                    <p style={{ marginTop: "14px" }}>Redux</p>
                    <p
                      style={{
                        marginTop: "5px",
                        fontWeight: "900",
                        fontSize: "0.7em",
                        fontStyle: "italic",
                        color: "gray"
                      }}
                    >
                      experienced
                    </p>
                  </div>
                  <div className="ts" style={{ textAlign: "center" }}>
                    <img src={iconTS} alt="js" style={{ width: "60px" }} />
                    <p style={{ marginTop: "10px" }}>TypeScript</p>
                    <p
                      style={{
                        marginTop: "5px",
                        fontWeight: "900",
                        fontSize: "0.7em",
                        fontStyle: "italic",
                        color: "gray"
                      }}
                    >
                      experienced
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="skills_container_body_back"
                style={{ display: "flex", marginTop: "70px" }}
              >
                <div style={{ textAlign: "center" }}>
                  <img
                    src={iconServer}
                    alt="server"
                    style={{ width: "70px", height: "70px", opacity: "0.8" }}
                  />
                  <p
                    style={{
                      width: "100%",
                      marginTop: "17px",
                      fontSize: "1.1em",
                      fontWeight: "300"
                    }}
                  >
                    Back-end
                  </p>
                </div>
                <div
                  style={{
                    marginLeft: "8%",
                    borderLeft: "1px dotted gray",
                    height: "110px"
                  }}
                ></div>
                <div
                  className="front_icons"
                  style={{
                    width: "60%",
                    marginLeft: "4%",
                    display: "flex",
                    justifyContent: "space-around"
                  }}
                >
                  <div className="js" style={{ textAlign: "center" }}>
                    <img src={iconNode} alt="node" style={{ width: "60px" }} />
                    <p style={{ marginTop: "10px" }}>Node.js</p>
                    <p
                      style={{
                        marginTop: "5px",
                        fontWeight: "900",
                        fontSize: "0.7em",
                        fontStyle: "italic",
                        color: "gray"
                      }}
                    >
                      mainly
                    </p>
                  </div>
                  <div className="react" style={{ textAlign: "center" }}>
                    <img
                      src={iconExpress}
                      alt="express"
                      style={{ width: "60px", marginTop: "23px" }}
                    />
                    <p style={{ marginTop: "35px" }}>Express</p>
                    <p
                      style={{
                        marginTop: "5px",
                        fontWeight: "900",
                        fontSize: "0.7em",
                        fontStyle: "italic",
                        color: "gray"
                      }}
                    >
                      experienced
                    </p>
                  </div>
                  <div className="redux" style={{ textAlign: "center" }}>
                    <img src={iconMysql} alt="js" style={{ width: "60px" }} />
                    <p style={{ marginTop: "10px" }}>MySQL</p>
                    <p
                      style={{
                        marginTop: "5px",
                        fontWeight: "900",
                        fontSize: "0.7em",
                        fontStyle: "italic",
                        color: "gray"
                      }}
                    >
                      experienced
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Projects */}
        <div className="projects">
          <Element name="test3" className="element"></Element>

          <div className="projects_container" style={{ padding: "6% 15%" }}>
            <div
              className="projects_container_head"
              style={{ textAlign: "right" }}
            >
              <p style={{ fontSize: "1.8em", marginBottom: "15px" }}>
                Projects
              </p>
              <p style={{ fontSize: "1em" }}>
                프로젝트를 진행하며 경험하고 학습한 기술스택입니다.
              </p>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div className="contacts" style={{ marginTop: "1000px" }}>
          <Element name="test4" className="element">
            test 4
          </Element>
        </div>
      </div>
    );
  }
}

export default Main;
