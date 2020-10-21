import axios from "axios";

const fetchLogs = (id) => axios.get(`/api/v1/log/${id}`);

export default fetchLogs;
