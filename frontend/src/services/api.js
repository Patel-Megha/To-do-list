import axios from "axios";

// src/services/api.js
const BASE_URL = import.meta.env.VITE_API_URL; // Change to your backend URL

const API = {
  get: (url) =>
    fetch(`${BASE_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json()),

  post: (url, data) =>
    fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    }).then((res) => res.json()),

  delete: (url) =>
    fetch(`${BASE_URL}${url}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json()),

  patch: (url, data) =>
    fetch(`${BASE_URL}${url}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    }).then((res) => res.json()),
};

export default API;
