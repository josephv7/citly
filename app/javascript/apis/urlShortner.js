import axios from "axios";

const shorten = payload => {
    console.log('here')
    axios.post("/api/v1/short_url/", payload)
}

export default {
    shorten
}