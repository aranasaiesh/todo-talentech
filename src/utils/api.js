import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const get = (url) => {
  return axios.get(API_BASE_URL + url);
};

export const post = (url, data) => {
  return axios.post(API_BASE_URL + url, data);
};

export const put = (url, data) => {
  return axios.put(API_BASE_URL + url, data);
};

export const destroy = (url) => {
  return axios.delete(API_BASE_URL + url);
};
