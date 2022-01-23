import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// token last 12 hours
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDVmMDU3YWMwMTMzNzI1OGE5OWI2OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mjk3NTE0NCwiZXhwIjoxNjQzMDE4MzQ0fQ.TMwpFS62Ipp_0KdDUk0DlFcEKFylsADnXP8WX0WWehI"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})