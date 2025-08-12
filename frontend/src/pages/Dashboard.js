import React, { useEffect, useState } from "react";
import { getProtectedData } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const [data, setData] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
        getProtectedData(token).then((res) => {
            if (res.message) setData(res.message);
            else navigate("/login");
        });
    }, [navigate]);

    return (
        <div className="container">
            <h2>Dashboard</h2>
            <p>{data}</p>
            <button onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
            }}>Logout</button>
        </div>
    );
}
