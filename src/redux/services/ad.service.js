import Axios from "axios";
import { commonUrl, header } from "./common-util";

const createService = (body) => {
  const imageArray = body.image;
  let formData = new FormData();
  imageArray.forEach((el, i) => {
    formData.append(`image_0${i + 1}`, el);
  });
  body.items = Object.values(body.items);
  delete body.image;
  for (const [key, value] of Object.entries(body)) {
    if (key === "items") {
      const valueItem = value?.map((el) => {
        el.value = el.value ? el.value : "";
        return el;
      });
      formData.append(key, JSON.stringify(valueItem));
    } else {
      formData.append(key, value);
    }
  }
  return new Promise((resolve, rej) => {
    Axios.defaults.xsrfCookieName = "csrftoken";
    Axios.defaults.xsrfHeaderName = "X-CSRFToken";
    Axios.post(commonUrl + "/myads/", formData, { headers: header })
      .then((res) => {
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
        if (res) {
          resolve(res.data);
        }
      })
      .catch((err) => reject(err));
  });
};

const getSubCategory = (id) => {
  return new Promise((resolve, reject) => {
    Axios.get(commonUrl + `/category/${id}/subcategory/`, {
      headers: header,
    })
      .then((res) => {
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

const getLocation = (text) => {
  return new Promise((resolve, reject) => {
    Axios.get(commonUrl + "/locations/search/" + text + "/")
      .then((res) => {
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
  getLocation: (text) => getLocation(text),
  getSubCategory: (id) => getSubCategory(id),
};
