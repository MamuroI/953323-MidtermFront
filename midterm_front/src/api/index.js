import axios from "axios";

export const URL = ''

export const client = axios.create({
    baseURL: URL,
})
