# Posin Frontend

Posin Frontend adalah aplikasi berbasis **React + Vite** yang digunakan sebagai antarmuka (frontend) untuk sistem POS (Point of Sale). Aplikasi ini dirancang modern, ringan, dan responsif dengan dukungan **TailwindCSS** serta beberapa library UI untuk meningkatkan pengalaman pengguna.  

---

## 🚀 Fitur Utama
- ⚡ Dibangun dengan **React 19 + Vite** untuk performa cepat  
- 🎨 Styling menggunakan **TailwindCSS**  
- 📊 Visualisasi data dengan **Chart.js & react-chartjs-2**  
- 🗂️ Navigasi halaman dengan **React Router DOM v7**  
- 🔍 Komponen pencarian & filter dengan **React Select**  
- 📜 Scroll custom menggunakan **Simplebar**  
- 🖼️ Ikon modern dengan **Lucide React** & **React Icons**  

---

## 📦 Teknologi yang Digunakan
- [React 19](https://react.dev/)  
- [Vite 7](https://vitejs.dev/)  
- [TailwindCSS 4](https://tailwindcss.com/)  
- [Chart.js](https://www.chartjs.org/) + [react-chartjs-2](https://react-chartjs-2.js.org/)  
- [React Router DOM](https://reactrouter.com/)  
- [React Select](https://react-select.com/)  
- [Simplebar](https://github.com/Grsmto/simplebar)  
- [Lucide React](https://lucide.dev/)  
- [React Icons](https://react-icons.github.io/react-icons/)  

---

## 🛠️ Instalasi & Menjalankan Proyek

1. Clone repositori:
   ```bash
   git clone https://github.com/username/posin-frontend.git
   cd posin-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan aplikasi dalam mode development:
   ```bash
   npm run dev
   ```

4. Build untuk produksi:
   ```bash
   npm run build
   ```

5. Preview hasil build:
   ```bash
   npm run preview
   ```

---

## 📂 Struktur Proyek (umum)
```
posin-frontend/
├── public/              # File statis
src/
├── app/                  # Root app (entry utama aplikasi React)
│   └── App.jsx
│
├── assets/               # File statis (gambar, css, dll)
│   ├── images/           # Folder gambar
│   ├── index.css         # Global stylesheet
│   └── react.svg         # Logo React (default Vite)
│
├── components/           # Komponen reusable (button, navbar, modal, dll)
│   └── main.jsx
│
├── config/               # Konfigurasi aplikasi
│   └── menus.js          # Daftar menu navigasi
│
├── features/             # Modul fitur utama aplikasi
│   ├── Transaksi/        # Fitur transaksi POS
│   ├── Laporan/          # Fitur laporan penjualan
│   ├── Dashboard/        # Dashboard utama
│   ├── auth/             # Modul autentikasi (register, dll)
│   ├── login/            # Modul login
│   └── products/         # Modul produk (CRUD barang)
│
├── hooks/                # Custom React hooks
│
├── lib/                  # Helper functions, utilities, service API
│
├── store/                # State management (misalnya Redux/Zustand)
│
├── App.css               # Style global tambahan
├── App.jsx               # Root component utama
└── main.jsx              # Entry point React (mount ke DOM)
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🔍 Scripts yang Tersedia
- `npm run dev` → Menjalankan server development  
- `npm run build` → Build aplikasi untuk production  
- `npm run preview` → Preview hasil build  
- `npm run lint` → Menjalankan ESLint  

---

## 📜 Lisensi
Proyek ini dilisensikan di bawah lisensi **MIT**.  
Silakan digunakan, dimodifikasi, dan dikembangkan sesuai kebutuhan.  
