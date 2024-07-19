import axios from "axios";

const baseURL = "http://localhost:8080";

const getLastSeven = ({ name }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + `/medicion/${name}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data.message);
      });
  });
};

const getInfoByDate = ({ name, date }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + `/medicion/${name}/${date}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data.message);
      });
  });
};

const getInfoByDateRange = ({ name, date1, date2 }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + `/medicion/${name}/${date1}/${date2}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data.message);
      });
  });
};

export { getLastSeven, getInfoByDate, getInfoByDateRange };
