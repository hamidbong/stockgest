const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/auth";

export const registerUser = async (username, password) => {
    const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });
    return res.json();
};

export const loginUser = async (username, password) => {
    const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });
    return res.json();
};

export const getProtectedData = async (token) => {
    const res = await fetch(`${API_URL}/protected`, {
        headers: { "Authorization": `Bearer ${token}` }
    });
    return res.json();
};
