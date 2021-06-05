import React from "react";
// import css file
import "./SellerInfo.scss";

const SellerInfo = () => {
  return (
    <div className="SellerInfo">
      <div className="SellerInfo--price">
        <div className="SellerInfo--price--content">
          <div className="SellerInfo--price--content--icon">
            <h2>₹ 3,90,000</h2>
            <div>
              <button>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 1024 1024"
                  data-aut-id="icon"
                  className=""
                  fill-rule="evenodd"
                >
                  <path
                    className="rui-77aaa"
                    d="M768 853.333c-47.104 0-85.333-38.229-85.333-85.333s38.229-85.333 85.333-85.333c47.104 0 85.333 38.229 85.333 85.333s-38.229 85.333-85.333 85.333zM256 597.333c-47.104 0-85.333-38.229-85.333-85.333s38.229-85.333 85.333-85.333c47.104 0 85.333 38.229 85.333 85.333s-38.229 85.333-85.333 85.333zM768 170.667c47.104 0 85.333 38.229 85.333 85.333s-38.229 85.333-85.333 85.333c-47.104 0-85.333-38.229-85.333-85.333s38.229-85.333 85.333-85.333zM768 597.333c-52.437 0-98.688 24.107-130.005 61.312l-213.675-123.392c1.067-7.637 2.347-15.275 2.347-23.253 0-4.779-1.024-9.259-1.408-13.909l218.283-126.037c31.104 33.408 75.179 54.613 124.459 54.613 94.251 0 170.667-76.416 170.667-170.667s-76.416-170.667-170.667-170.667c-94.251 0-170.667 76.416-170.667 170.667 0 14.208 2.261 27.819 5.504 41.003l-205.867 118.912c-30.763-45.013-82.389-74.581-140.971-74.581-94.251 0-170.667 76.416-170.667 170.667s76.416 170.667 170.667 170.667c55.467 0 104.235-26.88 135.424-67.84l209.195 120.747c-2.048 10.539-3.285 21.333-3.285 32.427 0 94.251 76.416 170.667 170.667 170.667s170.667-76.416 170.667-170.667c0-94.251-76.416-170.667-170.667-170.667z"
                  ></path>
                </svg>
              </button>
              <button>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 1024 1024"
                  data-aut-id="icon"
                  className=""
                  fill-rule="evenodd"
                >
                  <path
                    className="rui-77aaa"
                    d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <p>2014 - 37,000 km</p>
          <h6>Hyundai Grand i10 Sportz 1.2 Kappa VTVT, 2014, Petrol</h6>
          <div className="SellerInfo--price--content--locationDate">
            <p>Safdarjung, Delhi, Delhi</p>
            <p>Apr 12</p>
          </div>
        </div>
      </div>
      <div className="SellerInfo--SellerDescription">
        <h2>Seller description</h2>
        <div className="SellerInfo--SellerDescription--profile">
          <div className="SellerInfo--SellerDescription--profile--imgContent">
            <div className="SellerInfo--SellerDescription--profile--imgContent--text">
              <img
                src="https://apollo-singapore.akamaized.net/v1/files/06a119jpdsji1-IN/image;s=120x120"
                alt="seller img"
              />
              <div>
                <h4>fairdeal car palace</h4>
                <p>Member since Oct 2012</p>
              </div>
            </div>
            <div>
              <svg
                width="18px"
                height="18px"
                viewBox="0 0 1024 1024"
                data-aut-id="icon"
                className=""
                fill-rule="evenodd"
              >
                <path
                  className="rui-77aaa"
                  d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <button className="SellerInfo--SellerDescription--button">
          Chat with Seller
        </button>
        <div className="SellerInfo--SellerDescription--number">
          <span>
            <svg
              width="26px"
              height="26px"
              viewBox="0 0 1024 1024"
              data-aut-id="icon"
              className=""
              fill-rule="evenodd"
            >
              <path
                className="rui-77aaa"
                d="M784.555 852.395c-331.435-14.635-598.315-281.515-612.949-612.949l149.973-59.989 91.691 183.424-70.997 35.499v26.453c0 141.653 115.243 256.896 256.896 256.896h26.453l11.861-23.637 23.68-47.36 183.381 91.733-59.989 149.931zM918.101 643.456l-256.939-128.469-57.472 19.2-30.037 60.032c-74.069-11.093-132.736-69.803-143.872-143.872l60.075-30.037 19.157-57.429-128.427-256.939-54.187-20.608-214.187 85.632-26.88 39.808c0 401.365 326.571 727.893 727.936 727.893l39.765-26.88 85.632-214.187-20.608-54.187z"
              ></path>
            </svg>
          </span>
          <span>*******</span>
          <span>Show number</span>
        </div>
      </div>
      <div className="SellerInfo--map">
        <h2>Posted in</h2>
        <p>Safdarjung, Delhi, Delhi</p>
        <img
          src="https://maps.googleapis.com/maps/api/staticmap?center=28.563%2C77.191&language=en&size=640x256&zoom=15&scale=1&lang=en&channel=olx-latam-ar-web-dev&key=AIzaSyAChxbDof4fywIkC6U-7MCgXBpUp4t2DiA&signature=lOvqAA8U6_GQWVSJF0aqT3Sc870="
          alt=""
        />
      </div>
    </div>
  );
};

export default SellerInfo;
