import axios from "axios";
import { clientId, clientSecret, apiUrl } from "@/config";

export const services = {
    convertToken,
    getProfile,

    listActivities,
    listProjects,
};

async function convertToken(code) {
    let res = await axios.post(`${apiUrl}/auth/convert-token/`, {
        grant_type: "convert_token",
        backend: "github",
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
    });
    return res.data;
}

async function getProfile() {
    let accessToken = localStorage.getItem("accessToken");
    let res = await axios.get(`${apiUrl}/me/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
    });
    return res.data;
}

async function listActivities(page) {
    let accessToken = localStorage.getItem("accessToken");
    let res = await axios.get(`${apiUrl}/awards/?page=${page}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
    });
    return res.data;
}

async function listProjects() {
    let accessToken = localStorage.getItem("accessToken");
    let res = await axios.get(`${apiUrl}/repos/all/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
    });
    return res.data;
}
