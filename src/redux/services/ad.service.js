import Axios from "axios";
import Cookies from "js-cookie";
import { commonUrl, header } from "./common-util";
const createService = (body) => {
  const imageArray = body.image;
  let formData = new FormData();
  imageArray.forEach((el, i) => {
    const file = new Blob([el], {
      type: el.type,
    });
    formData.append(`image_0${i + 1}`, null);
  });
  body.items = Object.values(body.items);
  delete body.image;
  for (const [key, value] of Object.entries(body)) {
    formData.append(key, key === "items" ? JSON.stringify(value) : value);
  }
  return new Promise((resolve, rej) => {
    Axios.defaults.xsrfHeaderName = "X-CSRFToken";
    Axios.post(commonUrl + "/myads", formData, { headers: header })
      .then((res) => {
        console.log(res);
        if (res) {
          resolve(res);
        }
      })
      .catch((err) => rej(err));
  });
};

const getCategory = () => {
  return new Promise((resolve, reject) => {
    Axios.get(commonUrl + "/category/", {
      headers: header,
    })
      .then((res) => {
        console.log(res);
        if (res) {
          resolve(res.data);
        }
      })
      .catch((err) => reject(err));
  });
};

const getCategoryField = (catId) => {
  return new Promise((resolve, reject) => {
    Axios.get(commonUrl + "/catwithfields/" + catId)
      .then((res) => {
        console.log(res);
        if (res) {
          resolve(res.data);
        }
      })
      .catch((e) => reject(e));
  });
};

export const AdService = {
  createApi: (body) => createService(body),
  getCategory: () => getCategory(),
  getCategoryField: (catId) => getCategoryField(catId),
};
