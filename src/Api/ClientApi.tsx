import axios from "axios";

export const clientApi = axios.create({
    baseURL: 'https://fierce-beyond-73642.herokuapp.com/api'
});