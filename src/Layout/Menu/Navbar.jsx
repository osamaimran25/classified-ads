import { Button, Container, Typography } from "@material-ui/core";
import { React, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
// import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li:not(#exceptMenu)");

    hamburger.addEventListener("click", () => {
      // Animate Links
      navLinks.classList.toggle("open");

      links.forEach((link) => {
        link.classList.toggle("fade");
      });
      // Hamburger Animation
      hamburger.classList.toggle("toggle");
    });

    links.forEach((link) =>
      link.addEventListener("click", () => {
        // Animate Links
        navLinks.classList.toggle("open");

        links.forEach((linked) => {
          linked.classList.toggle("fade");
        });
        // Hamburger Animation
        hamburger.classList.toggle("toggle");
      })
    );

    window.addEventListener("resize", (event) => {
      if (event.target.innerWidth < 860) {
        navLinks.classList.remove("open");
        links.forEach((link) => {
          link.classList.remove("fade");
        });
        hamburger.classList.remove("toggle");
      }
    });
  }, []);
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="topNavContainer">
        <Container style={{ zIndex: "9999999" }}>
          <nav id="topNav">
            <div
              className="logo"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Link to="/" style={{ color: "#000", textDecoration: "none" }}>
                <Typography variant="h4"> ClassifiedADS </Typography>
              </Link>
            </div>
            <div className="hamburger">
              <div className="line1" />
              <div className="line2" />
              <div className="line3" />
            </div>
            <ul className="nav-links">
              <li className="customMenu">
                <NavLink activeClassName="activeRoute" to="/">
                  Home
                </NavLink>
              </li>
              <li className="customMenu">
                <NavLink activeClassName="activeRoute" to="/service">
                  Service
                </NavLink>
              </li>
              <li className="customMenu">
                <NavLink activeClassName="activeRoute" to="/about">
                  About
                </NavLink>
              </li>
              <li className="customMenu">
                <NavLink activeClassName="activeRoute" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="customMenu">
                <NavLink activeClassName="activeRoute" to="/portfolio">
                  portfolio
                </NavLink>
              </li>
              <Button variant="contained" color="primary">
                Buy Now
              </Button>
            </ul>
          </nav>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;

// import { Link, NavLink } from 'react-router-dom';
// // images
// import logo from '../../assets/logo.png';
// // styles
// import styles from '../../styles/NavbarStyles.module.scss';

// // load pages by on hover (Eager Loading)
// // const about = () => import('../../routes/About');
// // const home = () => import('../../routes/Home');

// const Navbar = () => (
//     <main className={styles.navbar}>
//         <Link to="/">
//             {/* Image Optimize by lazy loading */}
//             <img loading="lazy" src={logo} alt="logo" height="30px" />
//         </Link>

//         <section>
//             <NavLink
//                 exact
//                 to="/"
//                 //  onMouseOver={() => home()}
//                 activeClassName={styles.selected}
//             >
//                 Home
//             </NavLink>
//             <NavLink
//                 exact
//                 to="/about"
//                 // onMouseOver={() => about()}
//                 activeClassName={styles.selected}
//             >
//                 About
//             </NavLink>
//         </section>
//     </main>
// );

// export default Navbar;
