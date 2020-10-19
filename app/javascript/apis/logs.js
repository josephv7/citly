import axios from "axios";

const fetchLogs = (id) => axios.get(`/api/v1/logs/${id}`);

export default fetchLogs;
