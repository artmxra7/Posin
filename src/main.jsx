import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@styles/global.css";
import App from "./app/App";
import Login from "./features/auth/pages/login";
import DashboardPages from "./features/Dashboard/Pages/DashboardPages";
import Layout from "./components/layout/layout";
import TransaksiPages from "./features/Transaksi/Pages/TransaksiPages.jsx";
import OrderConfirmPages from "./features/Kasir/Pages/OrderConfirmPages";
import KasirPages from "./features/Kasir/Pages/KasirPages";
import { Provider } from "react-redux"; // Import Redux Provider
import store from "./store/store";
import { SidebarProvider } from "./components/layout/context/SidebarContext.jsx";
import LaporanPenjualanPages from "./features/Laporan/Pages/LaporanPenjualanPages.jsx";
import LaporanBaruPages from "./features/Laporan/Pages/LaporanBaruPages.jsx";
import DaftarProdukPages from "./features/Produk/Pages/DaftarProdukPages.jsx";

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
        path: "/produk/daftar-produk",
        element: <DaftarProdukPages />,
      },
      {
        path: "/kasir",
        element: <KasirPages />,
      },
      {
        path: "/laporan/penjualan",
        element: <LaporanPenjualanPages />,
      },
      {
        path: "/laporan/baru",
        element: <LaporanBaruPages />,
      },
      {
        path: "/transaksi",
        element: <TransaksiPages />,
      },
      {
        path: "/kasir/confirm",
        element: <OrderConfirmPages />,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <Provider store={store}>
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </Provider>
  </StrictMode>
);
