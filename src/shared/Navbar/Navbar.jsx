import React from "react";
//  navbar material ui element
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import css file
import "./Navbar.scss";
import NavbarAutocomplete from "../Autocomplete/NavbarAutocomplete";
const Navbar = (props) => {
  // scroll navbar function
  function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  return (
    <div className="navbar">
      <React.Fragment>
        <ElevationScroll {...props}>
          <AppBar className="navbar--appBar">
            <div className="navbar--appBar--content">
              <div className="navbar--appBar--content--logo">
                <svg
                  width="48px"
                  height="48px"
                  viewBox="0 0 1024 1024"
                  data-aut-id="icon"
                  class=""
                  fill-rule="evenodd"
                >
                  <path
                    class="rui-77aaa"
                    d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
                  ></path>
                </svg>
              </div>
              <NavbarAutocomplete />
              <div className="navbar--appBar--content--search">
                <input type="text" />
                <button>
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 1024 1024"
                    data-aut-id="icon"
                    class=""
                    fill-rule="evenodd"
                  >
                    <path
                      class="rui-2h8NR"
                      d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"
                    ></path>
                  </svg>
                </button>
              </div>
              <h2 className="navbar--appBar--content--language">English</h2>
              <button className="navbar--appBar--content--login">Login</button>

              <div></div>
            </div>
          </AppBar>
        </ElevationScroll>
        <Toolbar />
        {/* <Container>
          <Box my={2}>
            {[...new Array(12)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </Box>
        </Container> */}
      </React.Fragment>
    </div>
  );
};

export default Navbar;
