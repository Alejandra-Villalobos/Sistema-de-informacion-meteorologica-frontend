import axios from "axios";

const baseURL = "http://localhost:8080";

const getAllStationsService = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + "/estacion")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data.message);
      });
  });
};


export { getAllStationsService };