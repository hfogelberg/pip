console.log("ENV: " + process.env.NODE_ENV);
let isLocal = false;
if (process.env.NODE_ENV === "development") {
  isLocal = true;
}

const API_ROOT_URL = isLocal
  ? "http://localhost:3000/api"
  : "https://pip.henrikfogelberg.com/api";

console.log("API endpoint: " + API_ROOT_URL);

module.exports = {
  API_ROOT_URL
};
