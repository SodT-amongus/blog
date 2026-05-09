import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BlogContextProvider } from "./context/BlogContext";
import { UserContentProvider } from "./context/UserContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContentProvider>
      <BlogContextProvider>
        <App />
      </BlogContextProvider>
    </UserContentProvider>
  </React.StrictMode>,
);
