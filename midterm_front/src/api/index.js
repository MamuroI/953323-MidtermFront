import axios from "axios";

export const URL = 'http://localhost:8080'

export const client = axios.create({
    baseURL: URL,
})
