import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import {
  Home,
  About,
  Events,
  Gallery,
  Contact,
  Ngo,
  Login,
} from "./components";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./logo.png";
import { icons, otherIcons } from "./helpers";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeLink: "Home",
      loggedIn: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll() {
    var top = window.scrollY;

    var header = document.getElementsByClassName("menu-header");
    var offset = 20;
    if (top > offset) {
      //  header[0].classList.remove("top");
      header[0].classList.add("scrolled");
    } else {
      header[0].classList.remove("scrolled");
      //  header[0].classList.add("top");
    }
  }
  setLoggedIn = (val) => {
    this.setState((prevState) => ({ ...prevState, loggedIn: val }));
  };
  render() {
    const routes = [
      { name: "HOME", to: "/", nameCamelCase: "Home" },
      { name: "ABOUT US", to: "/about", nameCamelCase: "About Us" },

      { name: "EVENTS", to: "/events", nameCamelCase: "Events" },

      { name: "PHOTO GALLERY", to: "/gallery", nameCamelCase: "Gallery" },

      { name: "CONTACT US", to: "/contact", nameCamelCase: "Contact Us" },

      { name: "MOTHER NGO", to: "/ngo", nameCamelCase: "Mother NGO" },
    ];
    const changeState = (name) => {
      this.setState({ activeLink: name });
    };
    var socialMediaIcons = [];
    for (const key in icons) {
      var obj = { icon: icons[key], link: "" };
      if (key === "Facebook") obj.link = "https://www.facebook.com/aadawal/";
      else if (key === "Instagram")
        obj.link = "https://instagram.com/rsmaadawal?utm_medium=copy_link";
      else obj.link = "https://youtube.com/channel/UCwsoPqn_7N67QIMrDD55yiA";

      socialMediaIcons.push(obj);
    }
    const Call = otherIcons["Call"];

    return (
      <Router className="container">
        <div className="app">
          <div className="menu-header">
            <img className="logo" src={logo} alt="Logo" />

            <div className="menuBtns">
              {routes.map((route, i) => {
                return (
                  <button key={i}>
                    <NavLink
                      to={route.to}
                      className={({ isActive }) => {
                        if (
                          isActive &&
                          this.state.activeLink !== route.nameCamelCase
                        )
                          changeState(route.nameCamelCase);
                        return isActive ? "menuBtn menuBtnActive" : "menuBtn";
                      }}
                    >
                      {route.name}
                    </NavLink>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="content">
            <div className="danceImg">
              <div className="blackLayer"></div>
            </div>
            <div className="navBar">
              <div className="activeLink"> {this.state.activeLink}</div>

              <Login
                editAllowed={this.state.loggedIn}
                setEditAllowed={this.setLoggedIn}
              />
            </div>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/events" element={<Events />}></Route>
              <Route
                exact
                path="/gallery"
                element={<Gallery editAllowed={this.state.loggedIn} />}
              ></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
              <Route exact path="/ngo" element={<Ngo />}></Route>
            </Routes>
          </div>
        </div>
        <footer>
          <div>© Copyright Aadawal. All rights reserved.</div>
          <div className="call">
            <Call />
            +91 94147-37972, +91 94132-63136
          </div>
          <div className="follow">
            Follow us on
            {socialMediaIcons.map((icon, i) => {
              return (
                <a
                  href={icon.link}
                  key={i}
                  className="socialMediaBtn"
                  target="_blank"
                >
                  <icon.icon />
                </a>
              );
            })}
          </div>
        </footer>
      </Router>
    );
  }
}

export default App;
// import React, { Component } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import FilesUploadComponent from "./components/files-upload-component";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <FilesUploadComponent />
//       </div>
//     );
//   }
// }

// export default App;
