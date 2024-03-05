import React from "react";
import ReactDOM from "react-dom/client";
import "./Assets/styles/globals.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routing/Router.tsx";
import { AdminProvider } from "./lib/adminContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AdminProvider>
      <RouterProvider router={router} />
    </AdminProvider>
  </React.StrictMode>
);
