import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { UserContentProvider } from "./context/UserContext";
import { BlogContextProvider } from "./context/BlogContext";

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
