import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import "./Main.css";

// Little helpers ...
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

class Main extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={3}>
        <ParallaxLayer
          offset={1}
          factor={0.8}
          speed={1}
          style={{ backgroundColor: "#ff5851" }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#1c323d" }}
        />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover"
          }}
        />

        <ParallaxLayer
          className="firstLayer"
          factor={1}
          offset={0}
          speed={1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              color: "#1C1A20",
              width: "50%"
            }}
          >
            <div
              style={{
                fontSize: "3em",
                fontFamily: "Raleway, sans-serif",
                fontWeight: "bolder",
                marginBottom: "30px",
                color: "#ff5851"
              }}
            >
              HELLO
            </div>
            <div
              style={{
                backgroundColor: "#27555d",
                width: "100%",
                height: "1px"
              }}
            ></div>
            <div
              style={{
                marginTop: "50px",
                fontFamily: "Noto Sans KR",
                fontWeight: "100"
              }}
            >
              <p>
                안녕하세요, 웹 개발자{" "}
                <span style={{ fontWeight: "300" }}>심경주</span>입니다.
              </p>
            </div>

            <div
              className="scroll"
              style={{
                marginTop: "15%",
                fontFamily: "Libre Baskerville",
                fontStyle: "italic",
                fontSize: "0.7em"
              }}
            >
              <p>scroll down</p>
            </div>
          </div>

          {/* <img src={url("server")} style={{ width: "20%" }} /> */}
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.5}
          onClick={() => this.parallax.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "-50px"
          }}
        >
          <div>
            <p
              style={{
                textAlign: "left",
                fontSize: "1.8em",
                fontFamily: "Raleway, sans-serif",
                fontWeight: "bolder"
              }}
            >
              TECHNICAL SKILLS
            </p>
            <div style={{ textAlign: "left" }}>
              <div>
                <span
                  style={{
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "1em"
                  }}
                >
                  mainly
                </span>{" "}
                <div style={{ border: "0.5px solid" }}></div>
                <div style={{ marginTop: "20px" }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                    style={{
                      width: "100px",
                      height: "auto",
                      marginRight: "40px"
                    }}
                    alt="js_logo"
                  />
                  <img
                    src="http://daynin.github.io/clojurescript-presentation/img/react-logo.png"
                    style={{
                      width: "100px",
                      height: "auto",
                      marginRight: "40px"
                    }}
                    alt="react_logo"
                  />
                  <img
                    src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png"
                    style={{
                      width: "100px",
                      height: "auto",
                      marginRight: "40px",
                      paddingBottom: "15px"
                    }}
                    alt="nodejs_logo"
                  />
                </div>
              </div>
              <div style={{ marginTop: "30px" }}>
                <span
                  style={{
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "1em"
                  }}
                >
                  experienced
                </span>
                <div style={{ border: "0.5px solid" }}></div>
                <div style={{ marginTop: "20px" }}>
                  <img
                    src="https://images.velog.io/post-images/ashnamuh/5d715390-aaa3-11e9-9dfd-b10d906fc372/tsblog.png"
                    style={{
                      width: "100px",
                      height: "auto",
                      marginRight: "40px"
                    }}
                    alt="ts_logo"
                  />
                  <img
                    src="https://raw.githubusercontent.com/1ambda/1ambda.github.io/master/assets/images/redux/redux_logo.png?width=30%&height=30%"
                    style={{
                      width: "100px",
                      height: "auto",
                      marginRight: "40px"
                    }}
                    alt="redux_logo"
                  />
                  <img
                    src="https://sitest-wp.s3.amazonaws.com/blog/wp-content/uploads/2017/07/express.png"
                    style={{
                      width: "100px",
                      height: "auto",
                      marginRight: "40px",
                      paddingBottom: "35px"
                    }}
                    alt="express_logo"
                  />
                  <img
                    src="http://emekaokwor.com/images/mysql.png"
                    style={{
                      width: "100px",
                      height: "auto"
                    }}
                    alt="mysql_logo"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <img src={url("bash")} style={{ width: "40%" }} /> */}
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          onClick={() => this.parallax.scrollTo(0)}
        >
          <div style={{ width: "80%", display: "flex" }}>
            <div
              style={{
                display: "inline-block",
                textAlign: "left",
                fontFamily: "Raleway, sans-serif",
                fontSize: "2.4em",
                fontWeight: "bolder",
                color: "white"
              }}
            >
              CONTACT
            </div>
            <div
              style={{
                display: "inline-block",
                marginLeft: "10%",
                textAlign: "left",
                fontFamily: "Raleway, sans-serif",
                fontSize: "0.8em",
                fontWeight: "400",
                color: "white"
              }}
            >
              kyungju.shim@gmail.com
              <div style={{ marginTop: "5%" }}>
                <i class="fab fa-github"></i>
                <i class="fab fa-medium" style={{ marginLeft: "5%" }}></i>
              </div>
            </div>
          </div>

          {/* <img src={url("clients-main")} style={{ width: "40%" }} /> */}
        </ParallaxLayer>
      </Parallax>
    );
  }
}

export default Main;
