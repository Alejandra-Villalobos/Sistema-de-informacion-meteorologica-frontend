import axios from "axios";

const baseURL = "http://localhost:8080";

const getInstrumentByStationName = ({ name }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + `/instrumento/${name}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data.message);
      });
  });
};


export { getInstrumentByStationName };