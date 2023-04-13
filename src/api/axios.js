import axios from "axios"
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

axios.get(`${API_URL}/api`)