import { commonUrl, header } from "./common-util";

const getAllProvinces = (countryName) => {
  return new Promise((resolve, reject) => {
    Axios.get(commonUrl + "/locations/province/" + countryName + "/")
      .then((res) => {
        console.log(res);
        if (res) {
          resolve(res.data);
        }
      })
      .catch((e) => reject(e));
  });
};

const searchAds = (body) => {
  return new Promise((resolve, reject) => {
    Axios.get(commonUrl + "/search/ads", body, { headers: header })
      .then((res) => {
        if (res) {
          resolve(res.data);
        }
      })
      .catch((e) => reject(e));
  });
};

const searchCategory = (body) => {
  return new Promise((resolve, reject) => {
    Axios.get(commonUrl + "/search/category", body, { headers: header })
      .then((res) => {
        if (res) {
          resolve(res.data);
        }
      })
      .catch((e) => reject(e));
  });
};

export const AdService = {
  searchCategory: (body) => searchCategory(body),
  searchAds: (body) => searchAds(body),
};
