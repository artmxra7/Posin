import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./features/auth/pages/login";
import DashboardPages from "./features/Dashboard/Pages/DashboardPages";
import Layout from "./components/layout/layout";
import TransaksiPages from "./features/Transaksi/Pages/TransaksiPages.jsx";
import OrderConfirmPages from "./features/Kasir/Pages/OrderConfirmPages";
import KasirPages from "./features/Kasir/Pages/KasirPages";
import { Provider } from "react-redux";
import store from "./store/store";
import { SidebarProvider } from "./components/layout/context/SidebarContext.jsx";
import LaporanPenjualanPages from "./features/Laporan/Pages/LaporanPenjualanPages.jsx";
import LaporanBaruPages from "./features/Laporan/Pages/LaporanBaruPages.jsx";
import DaftarProdukPages from "./features/Produk/Pages/DaftarProdukPages.jsx";
import TambahProdukPages from "./features/Produk/Pages/TambahProdukPages.jsx";

const root = createRoot(document.getElementById("root"));

// Definisikan elemen JSX sebagai variabel
const loginElement = <Login />;
const layoutElement = <Layout />;
const dashboardElement = <DashboardPages />;
const daftarProdukElement = <DaftarProdukPages />;
const kasirElement = <KasirPages />;
const laporanPenjualanElement = <LaporanPenjualanPages />;
const laporanBaruElement = <LaporanBaruPages />;
const transaksiElement = <TransaksiPages />;
const orderConfirmElement = <OrderConfirmPages />;
const tambahProdukElement = <TambahProdukPages />;

const router = createBrowserRouter([
  {
    path: "/login",
    element: loginElement, // pakai variabel
  },
  {
    element: layoutElement,
    children: [
      {
        path: "/dashboard",
        element: dashboardElement,
      },
      {
        path: "/produk/daftar-produk",
        element: daftarProdukElement,
      },
      {
        path: "/produk/tambah-produk",
        element: tambahProdukElement,
      },
      {
        path: "/kasir",
        element: kasirElement,
      },
      {
        path: "/laporan/penjualan",
        element: laporanPenjualanElement,
      },
      {
        path: "/laporan/baru",
        element: laporanBaruElement,
      },
      {
        path: "/transaksi",
        element: transaksiElement,
      },
      {
        path: "/kasir/confirm",
        element: orderConfirmElement,
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
