// import axios from "axios";
// import {
//   ADS_LOAD_ERROR,
//   ADS_LOAD_START,
//   ADS_LOAD_SUCCESS,
// } from "../actionTypes";

// export const getAds = () => (dispatch) => {
//   try {
//     dispatch({
//       type: ADS_LOAD_START,
//     });

//     const res = axios.get(`http://209.97.162.0/ads/list`);

//     console.log(res);

//     dispatch({
//       type: ADS_LOAD_SUCCESS,
//       payload: res.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: ADS_LOAD_ERROR,
//     });
//   }
// };
