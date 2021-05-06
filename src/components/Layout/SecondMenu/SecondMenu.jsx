import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./SecondMenu.scss";
import BeenhereIcon from "@material-ui/icons/Beenhere";
import DashboardDrawer from "./MenuDowar";
import {
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import SmsIcon from "@material-ui/icons/Sms";
const drawarMenu = (
  <List component="nav" aria-label="main mailbox folders">
    <ListItem button>
      <ListItemIcon>
        <SmsIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SmsIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SmsIcon />
      </ListItemIcon>
      <ListItemText primary="Dropdown menu" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SmsIcon />
      </ListItemIcon>
      <ListItemText primary="feedback" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SmsIcon />
      </ListItemIcon>
      <ListItemText primary="contact" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SmsIcon />
      </ListItemIcon>
      <ListItemText primary="All ads" />
    </ListItem>
  </List>
);

const SecondMenu = () => {
  return (
    <nav className="megaMenu">
      <div className="mega__wrapper">
        {/* <div className="mega__logo">
          <Link onClick={() => null}>Logo</Link>
        </div> */}
        {/* <input type="radio" name="slider" id="mega__menu-btn" />
        <input type="radio" name="slider" id="mega__close-btn" /> */}
        {/* <Hidden mdUp>
          <DashboardDrawer>{drawarMenu}</DashboardDrawer>
        </Hidden> */}
        <ul className="mega__nav-links">
          <label for="mega__close-btn" className="btn mega__close-btn">
            <i className="fas fa-times"></i>
          </label>
          <li>
            <Link onClick={() => null}>Home</Link>
          </li>
          <li>
            <Link onClick={() => null}>About</Link>
          </li>
          <li>
            <Link onClick={() => null} className="mega__desktop-item">
              <span>Dropdown Menu</span>
              <ArrowDropDownIcon />
            </Link>
            {/* <input type="checkbox" id="mega__showDrop" /> */}
            <label for="mega__showDrop" className="mega__mobile-item">
              Dropdown Menu
            </label>
            <ul className="mega__drop-menu">
              <li>
                <Link onClick={() => null}>
                  <span>
                    <BeenhereIcon />
                  </span>
                  Drop menu 1
                </Link>
              </li>
              <li>
                <Link onClick={() => null}>
                  <span>
                    <BeenhereIcon />
                  </span>
                  Drop menu 2
                </Link>
              </li>
              <li>
                <Link onClick={() => null}>
                  <span>
                    <BeenhereIcon />
                  </span>
                  Drop menu 3
                </Link>
              </li>
              <li>
                <Link onClick={() => null}>
                  <span>
                    <BeenhereIcon />
                  </span>
                  Drop menu 4
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link onClick={() => null} className="mega__desktop-item">
              <span style={{ marginLeft: "6px" }}>Mega Menu</span>
              <ArrowDropDownIcon />
            </Link>
            {/* <input type="checkbox" id="mega__showMega" /> */}
            <label for="mega__showMega" className="mega__mobile-item">
              Mega Menu
            </label>
            <div className="mega__mega-box">
              <div className="mega__content">
                <div className="mega__row">
                  {/* <!-- <img src="img.jpg" alt=""> --> */}
                </div>
                <div className="mega__row">
                  <header>Design Services</header>
                  <ul className="mega__mega-links">
                    <li>
                      <Link onClick={() => null}>
                        <span>
                          <BeenhereIcon />
                        </span>
                        Graphics
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => null}>
                        <span>
                          <BeenhereIcon />
                        </span>
                        Vectors
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => null}>
                        <span>
                          <BeenhereIcon />
                        </span>
                        Business cards
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => null}>
                        <span>
                          <BeenhereIcon />
                        </span>
                        Custom logo
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mega__row">
                  <header>Email Services</header>
                  <ul className="mega__mega-links">
                    <li>
                      <Link onClick={() => null}>
                        <span>
                          <BeenhereIcon />
                        </span>
                        Personal Email
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => null}>
                        <span>
                          <BeenhereIcon />
                        </span>
                        Business Email
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => null}>
                        <span>
                          <BeenhereIcon />
                        </span>
                        Mobile Email
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => null}>
                        <span>
                          <BeenhereIcon />
                        </span>
                        Web Marketing
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mega__row">
                  <header>Security services</header>
                  <ul className="mega__mega-links">
                    <li>
                      <Link onClick={() => null}>
                        <span>
                          <BeenhereIcon />
                        </span>
                        Site Seal
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => null}>
                        <span>
                          <BeenhereIcon />
                        </span>
                        VPS Hosting
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => null}>
                        <span>
                          <BeenhereIcon />
                        </span>
                        Privacy Seal
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => null} className="dropMenu__icon">
                        <span>
                          <BeenhereIcon />
                        </span>
                        Website design
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link onClick={() => null}>Feedback</Link>
          </li>
        </ul>
        <label for="mega__menu-btn" className="mega__btn mega__menu-btn">
          <i className="fas fa-bars"></i>
        </label>
      </div>
    </nav>
  );
};

export default SecondMenu;
