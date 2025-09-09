import {
  Home,
  BarChart3,
  Clipboard,
  Settings,
  Package,
  Contact,
  Computer,
} from "lucide-react";

export const menuItems = [
  {
    to: "/dashboard",
    icon: Home,
    label: "Dashboard",
  },
  {
    to: "/kasir",
    icon: Computer,
    label: "Kasir",
  },
  {
    to: "/transaksi",
    icon: BarChart3,
    label: "Transaksi",
  },
  {
    label: "Produk",
    icon: Package,
    collapse: true,
    children: [
      { to: "/produk/daftar-produk", label: "List Produk" },
      { to: "/produk/penjualan", label: "Tambah Produk" },
    ],
  },
  {
    label: "Laporan",
    icon: Clipboard,
    collapse: true,
    children: [
      { to: "/laporan/baru", label: "Baru" },
      { to: "/laporan/penjualan", label: "Penjualan" },
    ],
  },
  {
    to: "/kontak",
    icon: Contact,
    label: "Kontak",
    collapse: true,
    children: [
      { to: "/kontak/baru", label: "Supplier" },
      { to: "/kontak/penjualan", label: "Kostumer" },
    ],
  },
  {
    to: "/pengaturan",
    icon: Settings,
    label: "Pengaturan",
  },
];
