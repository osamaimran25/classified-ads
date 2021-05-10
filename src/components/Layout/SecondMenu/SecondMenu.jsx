import { Link } from "react-router-dom";
import "./SecondMenu.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DashboardDrawer from "./MenuDowar";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import SmsIcon from "@material-ui/icons/Sms";
import {
  purchaseOne,
  purchaseTwo,
  purchaseThree,
  purchaseFour,
  CarsAndVehiclesOne,
  CarsAndVehiclesTwo,
  CarsAndVehiclesThree,
  CarsAndVehiclesFour,
  PropertyOne,
  PropertyTwo,
  PropertyThree,
  PropertyFour,
} from "./MenuList";

import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import ShopTwoIcon from "@material-ui/icons/ShopTwo";
import NaturePeopleIcon from "@material-ui/icons/NaturePeople";
import WorkIcon from "@material-ui/icons/Work";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import WhereToVoteIcon from "@material-ui/icons/WhereToVote";
import ReactDrawer from "../SecondMenu/ReactDrawer";
const drawarMenu = (
  <List component="nav" aria-label="main mailbox folders">
    <ListItem button>
      <ListItemIcon>
        <EmojiTransportationIcon />
      </ListItemIcon>
      <ListItemText primary="Cars ane vehicles" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShopTwoIcon />
      </ListItemIcon>
      <ListItemText primary="For purchase" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <NaturePeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Property" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="Jobs" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AddShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Services" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <WhereToVoteIcon />
      </ListItemIcon>
      <ListItemText primary="Wholesale" />
    </ListItem>
  </List>
);

const SecondMenu = () => {
  return (
    <div style={{ position: "relative" }}>
      <span className="small_device_dropdown">
        {/* <DashboardDrawer>{drawarMenu}</DashboardDrawer> */}
        <ReactDrawer />
      </span>
      <nav className="megaMenu">
        <div className="mega__wrapper">
          <ul className="mega__nav-links">
            <label for="mega__close-btn" className="btn mega__close-btn">
              <i className="fas fa-times"></i>
            </label>
            <li>
              <Link onClick={() => null} className="mega__desktop-item">
                <span className="secondMenu_icon">
                  <EmojiTransportationIcon
                    style={{ fontSize: "18px", color: "#000" }}
                  />
                </span>
                <span style={{ margin: "0 6px" }}>Cars and vehicles</span>
                <ExpandMoreIcon style={{ fontSize: "18px" }} />
              </Link>
              <div className="mega__mega-box">
                <div className="mega__content">
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {CarsAndVehiclesOne?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {CarsAndVehiclesTwo?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {CarsAndVehiclesThree?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {CarsAndVehiclesFour?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* 2nd menu start here */}

            <li>
              <Link onClick={() => null} className="mega__desktop-item">
                <span className="secondMenu_icon1">
                  <ShopTwoIcon style={{ fontSize: "18px", color: "#000" }} />
                </span>

                <span style={{ margin: "0 6px" }}>For purchase</span>
                <ExpandMoreIcon style={{ fontSize: "18px" }} />
              </Link>
              <div className="mega__mega-box">
                <div className="mega__content">
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {purchaseOne?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {purchaseTwo?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {purchaseThree?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {purchaseFour?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* 3rd menu */}
            <li>
              <Link onClick={() => null} className="mega__desktop-item">
                <span className="secondMenu_icon2">
                  <NaturePeopleIcon
                    style={{ fontSize: "15px", color: "#000" }}
                  />
                </span>

                <span style={{ margin: "0 6px" }}>Property</span>
                <ExpandMoreIcon style={{ fontSize: "18px" }} />
              </Link>
              <div className="mega__mega-box">
                <div className="mega__content">
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {PropertyOne?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {PropertyTwo?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {PropertyThree?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {PropertyFour?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            {/* 4th menu */}
            <li>
              <Link onClick={() => null} className="mega__desktop-item">
                <span className="secondMenu_icon3">
                  <WorkIcon style={{ fontSize: "15px", color: "#000" }} />
                </span>

                <span style={{ margin: "0 6px" }}> Jobs </span>
                <ExpandMoreIcon style={{ fontSize: "18px" }} />
              </Link>
              <div className="mega__mega-box">
                <div className="mega__content">
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      <li>
                        <Link onClick={() => null}>Accountancy</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Admin,Secretarial & PA</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Agriculture & Farming</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Animals</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Arts & Heritage</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Charity</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Computing & IT</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>
                          Construction & Property
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      <li>
                        <Link onClick={() => null}>Driving & Automotive </Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Engineering </Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Financial Services</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Gardening</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Health & Beauty</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Healthcare & Medical </Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Hospitality & Catering</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>
                          HouseKeeping & Cleaning
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      <li>
                        <Link onClick={() => null}>HR</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Legal</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Leisure & Tourism</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>
                          Manufacturing & Industrial
                        </Link>
                      </li>

                      <li>
                        <Link onClick={() => null}>
                          Marketing, Advertising & PR
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>
                          Media, Digital & Creative
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Performing Arts</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>
                          Purchasing & Procurement
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Recruitment</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      <li>
                        <Link onClick={() => null}>Retail & FMCG</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Sales</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Scientific & Research</Link>
                      </li>
                      <li>
                        <Link onClick={() => null} className="dropMenu__icon">
                          Security
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Social & Care Work</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>
                          Sport, Fitness & Leisure
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Teaching & Education</Link>
                      </li>
                      <li>
                        <Link onClick={() => null} className="dropMenu__icon">
                          Transport, Logistics & Delivery
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            {/* 5th menu */}
            <li>
              <Link onClick={() => null} className="mega__desktop-item">
                <span className="secondMenu_icon4">
                  <AddShoppingCartIcon
                    style={{ fontSize: "15px", color: "#000" }}
                  />
                </span>

                <span style={{ margin: "0 6px" }}> Services </span>
                <ExpandMoreIcon style={{ fontSize: "18px" }} />
              </Link>
              <div className="mega__mega-box">
                <div className="mega__content">
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      <li>
                        <Link onClick={() => null}>
                          Home cooking and baking
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Home services</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>
                          Tradesmen and construction
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Farm & Fresh Food</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Catering & Restaurant</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Home & Office Repair</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Movers & Packers</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Domestic Help</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      <li>
                        <Link onClick={() => null}>Health & Beauty</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Event Services</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>
                          Electronics & Computer Repair
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Other Services</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>
                          Computer, software and web
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Drivers & Taxi </Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Car Rental</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Travel & Visa</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      <li>
                        <Link onClick={() => null}>Hijama</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Tuition</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Hajj and umrah</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Mentoring</Link>
                      </li>

                      <li>
                        <Link onClick={() => null}>Weddings and nikaah</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Business</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Office</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Telecom</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Legal</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      <li>
                        <Link onClick={() => null}>Halal finance</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Food and drink</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Motor</Link>
                      </li>
                      <li>
                        <Link onClick={() => null} className="dropMenu__icon">
                          Health and wellness
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Transport</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Online classes</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Private tuition</Link>
                      </li>
                      <li>
                        <Link onClick={() => null} className="dropMenu__icon">
                          Sports groups
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            {/* 6th menu */}
            <li>
              <Link onClick={() => null} className="mega__desktop-item">
                <span className="secondMenu_icon5">
                  <WhereToVoteIcon
                    style={{ fontSize: "15px", color: "#000" }}
                  />
                </span>

                <span style={{ margin: "0 6px" }}> Wholesale </span>
                <ExpandMoreIcon style={{ fontSize: "18px" }} />
              </Link>
              <div className="mega__mega-box">
                <div className="mega__content">
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      <li>
                        <Link onClick={() => null}>Agents and brokers</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>
                          Manufacturers sale branches and offices
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>
                          Antiques & Reproductions
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Aromatherapy Products</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Art & Craft Materials</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Baby & Nursery Goods</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Badges & Pins</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Bags & Handbags</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Hats & Headwear</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Health & Beauty</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Home & Garden</Link>
                      </li>
                      <li>
                        <Link onClick={() => null} className="dropMenu__icon">
                          Housewares
                        </Link>
                      </li>

                      <li>
                        <Link onClick={() => null}>Jewellery Wholesalers</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Keyrings</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Kitchenware</Link>
                      </li>
                      <li>
                        <Link onClick={() => null} className="dropMenu__icon">
                          Labelling
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      <li>
                        <Link onClick={() => null}>Basketware</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>
                          Bath Products and Bathroom Accessories
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Batteries</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Bedding and Bed Linen</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Belts & Buckles</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Books </Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Candles Suppliers</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>
                          Celebration & Occasions
                        </Link>
                      </li>

                      <li>
                        <Link onClick={() => null}>Gadgets & Innovations</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Garden & Leisure</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Gifts & Giftware</Link>
                      </li>
                      <li>
                        <Link onClick={() => null} className="dropMenu__icon">
                          Golf Wholesalers
                        </Link>
                      </li>

                      <li>
                        <Link onClick={() => null}>Lamps & Lighting</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Leather Goods</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Lifestyle</Link>
                      </li>
                      <li>
                        <Link onClick={() => null} className="dropMenu__icon">
                          Maternity
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      <li>
                        <Link onClick={() => null}>Ceramics</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Cleaning Products</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Clearance & Stocklots</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Clocks</Link>
                      </li>

                      <li>
                        <Link onClick={() => null}>Clothing & Fashions</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Collectables Wholesale</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>
                          Computers & Accessories
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Cosmetics</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>
                          Cushions & Soft Furnishings
                        </Link>
                      </li>

                      <li>
                        <Link onClick={() => null}>Food & Drink</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Fridge Magnets</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Footwear</Link>
                      </li>
                      <li>
                        <Link onClick={() => null} className="dropMenu__icon">
                          Furniture
                        </Link>
                      </li>

                      <li>
                        <Link onClick={() => null}>Mirrors</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Mobile Phones</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Motoring & Car</Link>
                      </li>
                      <li>
                        <Link onClick={() => null} className="dropMenu__icon">
                          Outdoor Goods
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      <li>
                        <Link onClick={() => null}>Desk Accessories</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Disposable Tableware</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>
                          Diet and Nutritional Supplements
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => null} className="dropMenu__icon">
                          Display Cabinets
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>e-cigarettes and vapes</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>
                          Electrical Goods and Electronics & Communications
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Ethnic Products</Link>
                      </li>
                      <li>
                        <Link onClick={() => null} className="dropMenu__icon">
                          Eco-friendly Products
                        </Link>
                      </li>

                      <li>
                        <Link onClick={() => null}>
                          Fabric and garments Wholesale
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Fair Trade</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Fashion Accessories</Link>
                      </li>
                      <li>
                        <Link onClick={() => null} className="dropMenu__icon">
                          Floral Items Wholesale
                        </Link>
                      </li>

                      <li>
                        <Link onClick={() => null}>Packaging Suppliers</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Pens & Pen Sets</Link>
                      </li>
                      <li>
                        <Link onClick={() => null}>Pest Control</Link>
                      </li>
                      <li>
                        <Link onClick={() => null} className="dropMenu__icon">
                          Pet Products
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <label for="mega__menu-btn" className="mega__btn mega__menu-btn">
            <i className="fas fa-bars"></i>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default SecondMenu;
