import { BaseURL } from "./constants";

const checkResponse = (response) => {
  if (!response.ok) {
    return Promise.reject(`Error: ${response.status}`);
  }

  return response.json();
};

const getItems = (type) => {
  return fetch(`${BaseURL}/${type}`).then(checkResponse);
};

export { getItems };
