import { BASEURL } from "./constants";

const checkResponse = (response) => {
  if (!response.ok) {
    return Promise.reject(`Error: ${response.status}`);
  }

  return response.json();
};

const getItems = (type) => {
  return fetch(`${BASEURL}/${type}`).then(checkResponse);
};

export { getItems };
