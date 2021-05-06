import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
// import slider
import ProductSlider from "../../../shared/ProductSlider/ProductSlider";
import Readmore from "../../../HOC/Readmore";
//  css file import
import "./ProductInfo.scss";
import AdsSuggetions from "../AdsSuggetions/AdsSuggetions";

// fake data
const fields1 = [
  { field: "Brand", value: "Ford" },
  { field: "Variant", value: "1.5 Petrol Trend" },
  { field: "Fuel", value: "Petrol" },
  { field: "KM driven", value: "36,000 km" },
];
const fields2 = [
  { field: "Model", value: "Ecosport" },
  { field: "Year", value: "2015" },
  { field: "Transmission", value: "Manual" },
  { field: "No. of Owners", value: "1st" },
];
const Description = [
  {
    Description:
      "Finance facility is available on model 2011 and above.We are a carwale franchisee  certigied dealer.Every car is fully inspected and certified.Easy financing options available Prices are very slightly negotiable. on cars also available. our office  is in south delhi safdrjung enclave. Saturday is a weekly off.Call time is preferable from 10am to 7pm.",
    field: [
      { fields: "ABS", value: "Yes" },
      { fields: "Accidental", value: "No" },
      { fields: "Adjustable Steering", value: "Yes" },
      { fields: "Air Conditioning", value: "No" },
      { fields: "Alloy Wheels", value: "Yes" },
    ],
  },
];
const ProductInfo = () => {
  return (
    <section className="ProductInfo">
      <ProductSlider />
      <div className="ProductInfo--content">
        <div className="ProductInfo--content--details">
          <h2>Details</h2>
          <Grid container direction="row" justify="center" alignItems="center">
            {fields1.map((data) => (
              <>
                <Grid item lg={3} md={3} sm={6} xs={6}>
                  <p>{data.field}</p>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={6}>
                  <h6>{data.value}</h6>
                </Grid>
              </>
            ))}
            {fields2.map((data) => (
              <>
                <Grid item lg={3} md={3} sm={6} xs={6}>
                  <p>{data.field}</p>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={6}>
                  <h6>{data.value}</h6>
                </Grid>
              </>
            ))}
          </Grid>
        </div>
        <div className="ProductInfo--content--description">
          <h2 style={{ marginBottom: "10px" }}>Description</h2>
          {Description.map((data) => (
            <>
              <Typography variant="h6">
                <Readmore number="150">{data.Description}</Readmore>
              </Typography>
              <Typography variant="h5" style={{ margin: "10px 0" }}>
                <strong style={{ fontWeight: "600" }}>
                  ADDITIONAL VEHICLE INFORMATION{" "}
                </strong>
              </Typography>
              {data.field.map((info) => (
                <Typography variant="subtitle1">
                  <strong style={{ fontWeight: "600", marginRight: "6px" }}>
                    {info.fields} :{" "}
                  </strong>{" "}
                  {info.value}
                </Typography>
              ))}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
