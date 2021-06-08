import axios from "axios";
import { AdService } from "../services";

const addAds = (body) => (dispatch) => {
  AdService.createApi(body)
    .then((data) => {
      dispatch({
        type: "ADS_ADD",
        payload: data ? true : false,
      });
    })
    .catch((e) => {
      dispatch({
        type: "ADS_LOAD_ERROR",
        payload: e,
      });
    });
};

export const getAds = () => async (dispatch) => {
  try {
    dispatch({
      type: "ADS_LOAD_START",
    });
    const res = await axios.get(`http://209.97.162.0/ads/list`);
    dispatch({
      type: "ADS_LOAD_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "ADS_LOAD_ERROR",
    });
  }
};

const getCategory = () => (dispatch) => {
  AdService.getCategory()
    .then((data) => {
      dispatch({
        type: "AD_CATEGORY",
        payload: data,
      });
    })
    .catch((e) => {
      dispatch({
        type: "ADS_LOAD_ERROR",
        payload: e,
      });
    });
};

const getCategoryField = (catId) => (dispatch) => {
  AdService.getCategoryField(catId)
    .then((data) => {
      dispatch({
        type: "AD_CATEGORY_FIELD",
        payload: data,
      });
    })
    .catch((e) => {
      dispatch({
        type: "ADS_LOAD_ERROR",
        payload: e,
      });
    });
};

const getSubCategory=(id)=>(dispatch)=>{
  AdService.getSubCategory(id)
  .then((data) => {
    dispatch({
      type: "AD_SUB_CATEGORY",
      payload: data,
    });
  })
  .catch((e) => {
    dispatch({
      type: "ADS_LOAD_ERROR",
      payload: e,
    });
  });
}

const getLocation = (text) => (dispatch) => {
  AdService.getLocation(text)
    .then((data) => {
      dispatch({
        type: "AD_LOCATION",
        payload: data,
      });
    })
    .catch((e) => {
      dispatch({
        type: "ADS_LOAD_ERROR",
        payload: e,
      });
    });
};

const emptyCategoryStatus = (body) => (dispatch) => {
  dispatch({
    type: "ADS_ADD",
    payload: false,
  });
};

export const AdAction = {
  addAds,
  getCategory,
  getCategoryField,
  getLocation,
  emptyCategoryStatus,
  getSubCategory
};
