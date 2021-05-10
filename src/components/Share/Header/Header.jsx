/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../img/main-logo.png";
import "./Header.css";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faGoogle,
//   faInstagram,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = ["transparent-header"];
  if (scrolled) {
    navbarClasses.push("scrolled animate__fadeInDownBig");
    navbarClasses.shift();
  }

  return (
    <header className={navbarClasses.join(" ")}>
      <div className="container">
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            {" "}
            <img src={Logo} alt="" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              style={{ width: "100%", justifyContent: "flex-end" }}
              className="ml-auto"
            >
              <Link className="nav-link" href="#">
                Home
              </Link>
              <Link className="nav-link" href="#">
                About
              </Link>
              <Link className="nav-link" href="#">
                Service
              </Link>
              <Link className="nav-link" href="#">
                Team
              </Link>
              <Link className="nav-link" href="#">
                Case Study
              </Link>
              <Link className="nav-link" href="#">
                Testimonials
              </Link>
              <Link className="nav-link" href="#">
                Bolgs
              </Link>
              <Link className="nav-link" href="#">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
