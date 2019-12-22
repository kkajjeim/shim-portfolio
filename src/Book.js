import React from "react";
import { Link } from "react-router-dom";

const Book = () => {
  return (
    <div className="book">
      <div
        style={{
          position: "fixed",
          zIndex: "990",
          paddingTop: "39px",
          paddingLeft: "15%",
          paddingRight: "20%",
          fontFamily: "Raleway",
          fontWeight: "400"
        }}
      >
        KYUNGJU
        <span style={{ color: "#6BD5E1", fontWeight: "900" }}> SHIM</span>
        <i
          class="fas fa-caret-right"
          style={{ color: "#FED385", marginLeft: "10px", marginRight: "10px" }}
        ></i>
        <span style={{ color: "#FED385", fontWeight: "900" }}>PROJECTS</span>
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/booktogether">PROJECT 01 서로모임</Link>
              </li>
              <li>
                <Link to="/travelcalculator">PROJECT 02 여행계산기</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div>서로모임 페이지</div>
    </div>
  );
};

export default Book;
