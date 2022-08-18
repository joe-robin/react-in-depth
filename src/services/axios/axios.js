import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const api_key = "5b93057df36402881a123ef51104987d";

/**
 *
 * @param {String} url Api endpoint
 * @param {Object} params Query parameters
 * @param {Object} headers headers values
 * @returns {Object} Api response
 */
export const Get = ({ endPoint, params = {}, headers = {} }) => {
  return axios
    .get(endPoint, {
      headers: {
        ...headers,
      },
      params: {
        ...params,
        api_key,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

/**
 *
 * @param {String} endPoint Api endpoint
 * @param {Object} data Post object
 * @param {Object} params Query parameters
 * @param {Object} headers headers values
 * @returns {Object} Api response
 */
export const Post = ({ endPoint, params = {}, headers = {}, data = {} }) => {
  return axios
    .post(endPoint, data, {
      headers: {
        ...headers,
      },
      params: {
        ...params,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

/**
 *
 * @param {String} url Api endpoint
 * @param {Object} data Put Object
 * @param {Object} params Query parameters
 * @returns {Object} Api response
 */
export const Put = (url, data, params = {}) => {
  return axios
    .put(url, data, {
      params: {
        ...params,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

/**
 *
 * @param {String} url Api endpoint
 * @param {Object} params Query parameters
 * @returns Api response
 */
export const Delete = (url, params = {}) => {
  return axios
    .delete(url, {
      params: {
        ...params,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
