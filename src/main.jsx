import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@styles/global.css";
import App from "./app/App";
import Login from "./features/auth/pages/login";
import DashboardPages from "./features/Dashboard/pages/Dashboard";
import Layout from "./components/layout/layout";
import LaporanPages from "./features/Laporan/Pages/LaporanPages";
import TransaksiPages from "./features/Transaksi/Pages/TransaksiPages";

const root = createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />, // login tanpa layout
  },
  {
    element: <Layout />, // semua child route pakai layout
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/dashboard",
        element: <DashboardPages />,
      },
      {
        path: "/laporan",
        element: <LaporanPages />,
      },
      {
        path: "/transaksi",
        element: <TransaksiPages />,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
