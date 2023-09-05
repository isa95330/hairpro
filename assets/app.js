import React from "react";
import ReactDOM from "react-dom/client";
import TestComp from "../assets/Components/TestComp";
import "./bootstrap.js";
import "../assets/css/app.css";

const root = ReactDOM.createRoot(document.getElementById("testcomp"));
root.render(<TestComp />);
