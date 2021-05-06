import "./ManageMyAds.scss";

import bg from "../../../../assets/dashboard/empty_ads.svg";

const ManageMyAds = () => {
  return (
    <>
      <div className="manage">
        <h1>Hi Rayhan!</h1>
        <p>
          You currently have <span>0 active ads.</span> View your
          <span>inactive ads here.</span>
        </p>

        <div className="manage__ads">
          <div>
            <p>Have something you want to sell?</p>
            <img width="300px" src={bg} alt="" /> <br />
            <button className="btn">Post an ad</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageMyAds;
