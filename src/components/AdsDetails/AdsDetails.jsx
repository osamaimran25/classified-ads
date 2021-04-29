import React from "react";
import ProductInfo from "./ProductInfo/ProductInfo";
import SellerInfo from "./SellarInfo/SellerInfo";
import { Grid } from "@material-ui/core";
// import css file
import "./AdsDetailsStyle.scss";
import Layout from "../Layout";
const AdsDetails = () => {
  return (
    <Layout>
      <div className="AdsDetails">
        <div className="AdsDetails-content">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item lg={8}>
              <ProductInfo />
            </Grid>
            <Grid item lg={4}>
              <SellerInfo />
            </Grid>
          </Grid>
        </div>
      </div>
    </Layout>
  );
};

export default AdsDetails;
