import { Home, BarChart3, ShoppingBag, Settings } from "lucide-react";

export const menuItems = [
  {
    to: "/dashboard",
    icon: Home,
    label: "Dashboard",
  },
  {
    to: "/laporan",
    icon: BarChart3,
    label: "Laporan",
  },
  {
    label: "Transaksi",
    icon: ShoppingBag,
    collapse: true,
    children: [
      { to: "/transaksi/baru", label: "Baru" },
      { to: "/transaksi/laporan", label: "Laporan" },
    ],
  },
  {
    to: "/pengaturan",
    icon: Settings,
    label: "Pengaturan",
  },
];
