const initialState = {
  ads: null,
  loading: false,
  success: "",
  error: {},
  addStatus: false,
  categories: null,
  subCategory: null,
  categoriesField: null,
  location: [],
};

export default function adsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ADS_LOAD_START":
      return {
        ...state,
        loading: true,
        error: {},
      };
    case "ADS_LOAD_SUCCESS":
      return {
        ...state,
        loading: false,
        ads: action.payload,
      };
    case "ADS_LOAD_ERROR":
      return {
        ...state,
        loading: false,
        error: "unable to get ads",
      };
    case "ADS_ADD":
      return {
        ...state,
        loading: true,
        addStatus: action.payload,
      };
    case "AD_CATEGORY":
      return {
        ...state,
        categories: action.payload,
        loading: true,
      };
    case "AD_CATEGORY_FIELD":
      return {
        ...state,
        categoriesField: action.payload,
        loading: true,
      };
    case "AD_LOCATION":
      return {
        ...state,
        location: action.payload,
        loading: true,
      };
    case "AD_SUB_CATEGORY":
      return {
        ...state,
        subCategory: action.payload,
        loading: true,
      };
    default:
      return state;
  }
}
