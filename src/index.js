import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { firebaseConfig } from "./firebase.config";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const root = ReactDOM.createRoot(document.getElementById("root"));
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
