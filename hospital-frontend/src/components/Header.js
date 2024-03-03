import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginPage from "./../pages/LoginPage";

function Header() {
  const uname = sessionStorage.getItem("uname");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({ type: "LogOut" });
    sessionStorage.clear();
    alert("user log out successfully");
    navigate("/");
  };
  return (
    <>
      <>
        {/* ======= Top Bar ======= */}
        <div id="topbar" className="d-flex align-items-center fixed-top">
          <div className="container d-flex justify-content-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope" />{" "}
              <a href="mailto:contact@example.com">RahulTawde1983@gmail.com</a>
              <i className="bi bi-phone" /> +91 9404001711
            </div>
          </div>
        </div>
        {/* ======= Header ======= */}
        <header id="header" className="fixed-top">
          <nav>
            {/* <h3 className='float-left m-2'>Welcome ! {uname}</h3> */}
          </nav>
          <div className="container d-flex align-items-center">
            <div className="brand">
              <img src="assets/img/logo.png" />
            </div>
            <h1 className="logo me-auto">
              <a href="/">TAWDE NURSING HOME</a>
            </h1>

            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li>
                  <a className="nav-link scrollto active" href="#hero">
                    Home
                  </a>
                </li>

                <li>
                  <a className="nav-link scrollto " href="#About">
                    About
                  </a>
                </li>

                <li>
                  <a className="nav-link scrollto" href="#services">
                    Services
                  </a>
                </li>

                <li>
                  <a className="nav-link scrollto" href="#doctors">
                    Doctors
                  </a>
                </li>

                <li>
                  <a className="nav-link scrollto" href="#question">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#gallery">
                    Gallery
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#feedback">
                    Feedback
                  </a>
                </li>

                <li>
                  <a className="nav-link scrollto" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>

            {/* <a href="#appointment" className="appointment-btn scrollto">
              <span className="d-none d-md-inline">Make an</span> Appointment
            </a> */}
            {
              (uname == null)?(
            <Link to="/login" className="appointment-btn ">
              <span className="d-none d-md-inline"> Login</span>
            </Link>
  ):(
            <button
              onClick={() => logout()}
              className="appointment-btn btn-primary btn-sm float-right btn"
            >
              
              <span className="d-none d-md-inline"> Logout</span>
            </button>
  )

            }

          </div>
        </header>
      </>
    </>
  );
}
export default Header;
