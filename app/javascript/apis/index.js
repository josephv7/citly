import axios from "axios";

axios.defaults.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  
  const setAuthTokenHeader = token => {
    axios.defaults.headers = {
      "X-Auth-Token": `${token}`,
    };
  };

  export default setAuthTokenHeader
