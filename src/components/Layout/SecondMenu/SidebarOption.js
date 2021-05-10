import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import ShopTwoIcon from "@material-ui/icons/ShopTwo";
import NaturePeopleIcon from "@material-ui/icons/NaturePeople";
import WorkIcon from "@material-ui/icons/Work";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import WhereToVoteIcon from "@material-ui/icons/WhereToVote";

let options = [
  {
    content: [
      {
        id: 1,
        name: "Cars and vehicles",
        icon: (
          <span className="secondMenu_icon" style={{ marginRight: "8px" }}>
            <EmojiTransportationIcon />
          </span>
        ),
        children: [
          { content: [{ name: "Motorbikes", id: 2, link: "/" }] },
          { content: [{ name: "Scooters", id: 3, link: "/" }] },
          { content: [{ name: "Vans", id: 4, link: "/" }] },
          { content: [{ name: "Accessories", id: 5, link: "/" }] },
          { content: [{ name: "Parts", id: 6, link: "/" }] },
          { content: [{ name: "Wanted", id: 7, link: "/" }] },
          { content: [{ name: " Other vehicles", id: 8, link: "/" }] },
          { content: [{ name: "Truck", id: 9, link: "/" }] },
          {
            content: [{ name: "Campervans and motorhomes", id: 10, link: "/" }],
          },
          { content: [{ name: "Caravan", id: 11, link: "/" }] },
          { content: [{ name: " Tractors", id: 12, link: "/" }] },
          { content: [{ name: "Scooters", id: 13, link: "/" }] },
        ],
      },
    ],
  },
  {
    content: [
      {
        id: 2,
        name: "For purchase",
        icon: (
          <span className="secondMenu_icon1" style={{ marginRight: "8px" }}>
            <ShopTwoIcon />
          </span>
        ),
        children: [
          { content: [{ name: "Books and textbooks", id: 2, link: "/" }] },
          { content: [{ name: "Antiques", id: 3, link: "/" }] },
          { content: [{ name: "Garments", id: 4, link: "/" }] },
          { content: [{ name: "Baby and children", id: 5, link: "/" }] },
          { content: [{ name: "Other", id: 6, link: "/" }] },
          { content: [{ name: "Swap", id: 7, link: "/" }] },
          { content: [{ name: " Wanted", id: 8, link: "/" }] },
          { content: [{ name: "Leisure and travel", id: 9, link: "/" }] },
          {
            content: [{ name: "Free stuff", id: 10, link: "/" }],
          },
          {
            content: [{ name: "Home, Garden and cleaning", id: 11, link: "/" }],
          },
          { content: [{ name: " Property clearance", id: 12, link: "/" }] },
          { content: [{ name: "Beauty", id: 13, link: "/" }] },

          {
            content: [
              {
                name: "Jubbah and hats",
                id: 14,
                link: "/",
              },
            ],
          },
          {
            content: [{ name: "Footwear and accessories", id: 15, link: "/" }],
          },
          {
            content: [{ name: "Computers and software", id: 16, link: "/" }],
          },
          {
            content: [{ name: "  DIY and Materials", id: 17, link: "/" }],
          },
          {
            content: [{ name: "Sports", id: 18, link: "/" }],
          },
          {
            content: [{ name: "Health and wellness", id: 18, link: "/" }],
          },
        ],
      },
    ],
  },
  {
    content: [
      {
        id: 3,
        name: "Property",
        icon: (
          <span className="secondMenu_icon2" style={{ marginRight: "8px" }}>
            <NaturePeopleIcon />
          </span>
        ),
        children: [
          { content: [{ name: "For sale", id: 2, link: "/" }] },
          { content: [{ name: "Rent", id: 3, link: "/" }] },
          { content: [{ name: "Share", id: 4, link: "/" }] },
          { content: [{ name: "Swap", id: 5, link: "/" }] },
          { content: [{ name: "Commercial", id: 6, link: "/" }] },
          { content: [{ name: "Parking", id: 7, link: "/" }] },
          { content: [{ name: " Free stuff", id: 8, link: "/" }] },
          { content: [{ name: "International", id: 9, link: "/" }] },
          {
            content: [{ name: "Property clearance", id: 10, link: "/" }],
          },
          {
            content: [{ name: "Holiday home", id: 11, link: "/" }],
          },
          { content: [{ name: "Holiday rental", id: 12, link: "/" }] },
          { content: [{ name: "Student accommodation", id: 13, link: "/" }] },

          {
            content: [
              {
                name: "Wanted",
                id: 14,
                link: "/",
              },
            ],
          },
          {
            content: [{ name: "Land and plots", id: 15, link: "/" }],
          },
        ],
      },
    ],
  },
  {
    content: [
      {
        id: 3,
        name: "Jobs",
        icon: (
          <span className="secondMenu_icon3" style={{ marginRight: "8px" }}>
            <WorkIcon />
          </span>
        ),
        children: [
          { content: [{ name: "Accountancy", id: 2, link: "/" }] },
          { content: [{ name: "Admin,Secretarial & PA", id: 3, link: "/" }] },
          { content: [{ name: "Agriculture & Farming", id: 4, link: "/" }] },
          { content: [{ name: "Animals", id: 5, link: "/" }] },
          { content: [{ name: "Arts & Heritage", id: 6, link: "/" }] },
          { content: [{ name: "Charity", id: 7, link: "/" }] },
          { content: [{ name: "Computing & IT", id: 8, link: "/" }] },
          { content: [{ name: "International", id: 9, link: "/" }] },
          {
            content: [{ name: "Construction & Property", id: 10, link: "/" }],
          },
          {
            content: [{ name: "Driving & Automotive", id: 11, link: "/" }],
          },
          { content: [{ name: "Engineering ", id: 12, link: "/" }] },
          { content: [{ name: "Financial Services", id: 13, link: "/" }] },

          {
            content: [
              {
                name: "Gardening",
                id: 14,
                link: "/",
              },
            ],
          },
          {
            content: [{ name: "Health & Beauty", id: 15, link: "/" }],
          },

          {
            content: [{ name: "Healthcare & Medical", id: 16, link: "/" }],
          },
          {
            content: [{ name: "Hospitality & Catering", id: 17, link: "/" }],
          },
          {
            content: [{ name: "HouseKeeping & Cleaning ", id: 18, link: "/" }],
          },
          { content: [{ name: "HR", id: 19, link: "/" }] },

          {
            content: [
              {
                name: "Legal",
                id: 20,
                link: "/",
              },
            ],
          },
          {
            content: [{ name: "Leisure & Tourism", id: 21, link: "/" }],
          },

          {
            content: [
              { name: "Manufacturing & Industrial", id: 22, link: "/" },
            ],
          },
          {
            content: [
              { name: " Marketing, Advertising & PR", id: 23, link: "/" },
            ],
          },
          {
            content: [
              { name: " Media, Digital & Creative ", id: 24, link: "/" },
            ],
          },
          { content: [{ name: "Performing Arts", id: 25, link: "/" }] },

          {
            content: [
              {
                name: " Purchasing & Procurement",
                id: 26,
                link: "/",
              },
            ],
          },
          {
            content: [{ name: "Recruitment", id: 27, link: "/" }],
          },

          {
            content: [{ name: "Retail & FMCG", id: 28, link: "/" }],
          },
          {
            content: [{ name: "Sales", id: 29, link: "/" }],
          },
          {
            content: [{ name: "Scientific & Research ", id: 30, link: "/" }],
          },
          { content: [{ name: "Security", id: 31, link: "/" }] },

          {
            content: [
              {
                name: "Social & Care Work",
                id: 32,
                link: "/",
              },
            ],
          },
          {
            content: [{ name: "Sport, Fitness & Leisure", id: 21, link: "/" }],
          },
        ],
      },
    ],
  },
  {
    content: [
      {
        id: 3,
        name: "Services",
        icon: (
          <span className="secondMenu_icon4" style={{ marginRight: "8px" }}>
            <AddShoppingCartIcon />
          </span>
        ),
        children: [
          { content: [{ name: "Home cooking and baking", id: 2, link: "/" }] },
          { content: [{ name: "Home services", id: 3, link: "/" }] },
          {
            content: [{ name: "Tradesmen and construction", id: 4, link: "/" }],
          },
          { content: [{ name: "Farm & Fresh Food", id: 5, link: "/" }] },
          { content: [{ name: "Catering & Restaurant", id: 6, link: "/" }] },
          { content: [{ name: "Home & Office Repair", id: 7, link: "/" }] },
          { content: [{ name: "Movers & Packers", id: 8, link: "/" }] },
          { content: [{ name: "Domestic Help", id: 9, link: "/" }] },
          {
            content: [{ name: "Health & Beauty", id: 10, link: "/" }],
          },
          {
            content: [{ name: "Event Services", id: 11, link: "/" }],
          },
          {
            content: [
              { name: "Electronics & Computer Repair ", id: 12, link: "/" },
            ],
          },
          { content: [{ name: "Other Services", id: 13, link: "/" }] },

          {
            content: [
              {
                name: "Computer, software and web",
                id: 14,
                link: "/",
              },
            ],
          },
          {
            content: [{ name: "Drivers & Taxi", id: 15, link: "/" }],
          },

          {
            content: [{ name: "Car Rental", id: 16, link: "/" }],
          },
          {
            content: [{ name: "Travel & Visa", id: 17, link: "/" }],
          },
          {
            content: [{ name: "Hijama", id: 18, link: "/" }],
          },
          { content: [{ name: "Tuition", id: 19, link: "/" }] },

          {
            content: [
              {
                name: "Hajj and umrah",
                id: 20,
                link: "/",
              },
            ],
          },
          {
            content: [{ name: "Mentoring", id: 21, link: "/" }],
          },

          {
            content: [{ name: "Weddings and nikaah", id: 22, link: "/" }],
          },
          {
            content: [{ name: "Business", id: 23, link: "/" }],
          },
          {
            content: [{ name: "Office", id: 24, link: "/" }],
          },
          { content: [{ name: "Telecom", id: 25, link: "/" }] },

          {
            content: [
              {
                name: "Legal",
                id: 26,
                link: "/",
              },
            ],
          },
          {
            content: [{ name: "Halal finance", id: 27, link: "/" }],
          },

          {
            content: [{ name: "Food and drink", id: 28, link: "/" }],
          },
          {
            content: [{ name: "Motor", id: 29, link: "/" }],
          },
          {
            content: [{ name: " Health and wellness ", id: 30, link: "/" }],
          },
          { content: [{ name: "Transport", id: 31, link: "/" }] },

          {
            content: [
              {
                name: "Online classes",
                id: 32,
                link: "/",
              },
            ],
          },
          {
            content: [{ name: " Sports groups", id: 21, link: "/" }],
          },
        ],
      },
    ],
  },

  {
    content: [
      {
        id: 3,
        name: "Wholesale",
        icon: (
          <span className="secondMenu_icon5" style={{ marginRight: "8px" }}>
            <WhereToVoteIcon />
          </span>
        ),
        children: [
          { content: [{ name: "Agents and brokers", id: 2, link: "/" }] },
          {
            content: [
              {
                name: "Manufacturers sale branches and offices",
                id: 3,
                link: "/",
              },
            ],
          },
          {
            content: [{ name: "Antiques & Reproductions", id: 4, link: "/" }],
          },
          { content: [{ name: "Aromatherapy Products", id: 5, link: "/" }] },
          { content: [{ name: "Art & Craft Materials", id: 6, link: "/" }] },
          { content: [{ name: "Baby & Nursery Goods", id: 7, link: "/" }] },
          { content: [{ name: "Badges & Pins", id: 8, link: "/" }] },
          { content: [{ name: "Bags & Handbags", id: 9, link: "/" }] },
          {
            content: [{ name: "Hats & Headwear", id: 10, link: "/" }],
          },
          {
            content: [{ name: "Health & Beauty", id: 11, link: "/" }],
          },
          {
            content: [{ name: "Home & Garden", id: 12, link: "/" }],
          },
          { content: [{ name: "Housewares", id: 13, link: "/" }] },

          {
            content: [
              {
                name: "Jewellery Wholesalers",
                id: 14,
                link: "/",
              },
            ],
          },
          {
            content: [{ name: "Keyrings", id: 15, link: "/" }],
          },

          {
            content: [{ name: "Kitchenware", id: 16, link: "/" }],
          },
          {
            content: [{ name: "Labelling", id: 17, link: "/" }],
          },
          {
            content: [{ name: "Basketware", id: 18, link: "/" }],
          },
          {
            content: [
              {
                name: "Bath Products and Bathroom Accessories",
                id: 19,
                link: "/",
              },
            ],
          },

          {
            content: [
              {
                name: "Batteries",
                id: 20,
                link: "/",
              },
            ],
          },
          {
            content: [{ name: "Bedding and Bed Linen", id: 21, link: "/" }],
          },

          {
            content: [{ name: "Belts & Buckles", id: 22, link: "/" }],
          },
          {
            content: [{ name: "Books", id: 23, link: "/" }],
          },
          {
            content: [{ name: "Candles Suppliers", id: 24, link: "/" }],
          },
          { content: [{ name: "Celebration & Occasions", id: 25, link: "/" }] },

          {
            content: [
              {
                name: "Gadgets & Innovations",
                id: 26,
                link: "/",
              },
            ],
          },
          {
            content: [{ name: "Garden & Leisure", id: 27, link: "/" }],
          },

          {
            content: [{ name: "Gifts & Giftware", id: 28, link: "/" }],
          },
          {
            content: [{ name: " Golf Wholesalers", id: 29, link: "/" }],
          },
          {
            content: [{ name: "Lamps & Lighting", id: 30, link: "/" }],
          },
          { content: [{ name: "Leather Goods", id: 31, link: "/" }] },

          {
            content: [
              {
                name: "Lifestyle",
                id: 32,
                link: "/",
              },
            ],
          },
          {
            content: [{ name: "Maternity", id: 21, link: "/" }],
          },
        ],
      },
    ],
  },
];

export default options;
