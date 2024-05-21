const apiUrls = {
  localhost: {
    API_URL: "http://localhost:8000/api/v1",
  },
  staging: {
    API_URL: "https://amazingserver.arba-dev.uk/api/v1",
  },
  production: {
    API_URL: "https://onlyjs-api-364f1a7eab85.herokuapp.com/api/v1/",
  },
};

// export default baseUrls[
//   process.env.REACT_APP_ENV === "localhost"
//     ? "localhost"
//     : process.env.REACT_APP_ENV === "production"
//     ? "production"
//     : "staging"
// ];

export default apiUrls["production"];
