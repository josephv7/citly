import axios from "axios";

const signup = (payload) => axios.post("/api/v1/signup", payload);

export default {
    signup
}
