import axios from "axios";

const shorten = payload => axios.post("/api/v1/short_url/", payload)
const listUserUrls = userId => axios.get(`/api/v1/url_list?user_id=${userId}`, {
    headers: {
      'Content-Type': 'application/json'
    }})


export default {
    shorten,
    listUserUrls
}