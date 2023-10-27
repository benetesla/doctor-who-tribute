import React from "react";
import ReactDOMClient from "react-dom/client";
import { DoctorWhoTribute } from "./screens/DoctorWhoTribute";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<DoctorWhoTribute />);
