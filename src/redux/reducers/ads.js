import axios from "axios";
export const ADS_LOAD_START = "ADS_LOAD_START";
export const ADS_LOAD_SUCCESS = "ADS_LOAD_SUCCESS";
export const ADS_LOAD_ERROR = "ADS_LOAD_ERROR";

const initialState = {
  ads: null,
  loading: false,
  success: "",
  error: {},
};

export default function adsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADS_LOAD_START:
      return {
        ...state,
        loading: true,
        error: {},
      };
    case ADS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        ads: action.payload,
      };
    case ADS_LOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: "unable to get ads",
      };

    default:
      return state;
  }
}

export const getAds = () => async (dispatch) => {
  try {
    dispatch({
      type: ADS_LOAD_START,
    });
    const res = await axios.get(`http://209.97.162.0/ads/list`);
    dispatch({
      type: ADS_LOAD_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ADS_LOAD_ERROR,
    });
  }
};
