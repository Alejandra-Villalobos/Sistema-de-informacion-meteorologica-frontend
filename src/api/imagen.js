import axios from "axios";

const baseURL = "http://localhost:8080";

const getAllImagesByStationId = ({ id }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + `/imagen/${id}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data.message);
      });
  });
};


export { getAllImagesByStationId };