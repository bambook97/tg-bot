import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/home/Home.tsx";
import Admin from "../Pages/admin/Admin.tsx";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/admin", element: <Admin /> },
]);
