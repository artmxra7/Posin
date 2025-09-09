import React from 'react';
import {TableCardProduct} from '@/components/ui'

const DaftarProdukPages = () => {
  const headers = [
    { key: "sku_code", label: "Kode SKU" },
    { key: "product_image", label: "Product Image" },
    { key: "category", label: "Kategori" },
    { key: "product_name", label: "Nama Produk" },
    { key: "selling_price", label: "Harga Jual" },
    { key: "status", label: "Status" },
    { key: "action", label: "Action" },
  ];
  const transactionData = [
    {
      sku_code: "INV001",
      product_image:
        "https://i1.wp.com/jakpat.net/info/wp-content/uploads/2019/05/cccb39c7ae48e92058f2f99bc36aacd8.jpg?fit=425%2C337&ssl=1",
      status: "Active",
      category: "Mie",
      product_name: "Mie Rebus Biasa",
      selling_price: 39600,
    },
    {
      sku_code: "INV002",
      product_image:
        "https://wiratech.co.id/wp-content/uploads/2022/06/sosis-bakar-mayo-_1_.webp",
      status: "Active",
      category: "Snack",
      product_name: "Sosis Bakar Mayo",
      selling_price: 27500,
    },
    {
      sku_code: "INV003",
      product_image:
        "https://cdn.rri.co.id/berita/Bukittinggi/o/1735223706849-kopi_hitam/3in5t4jv6yugg10.webp",
      status: "Active",
      category: "Minuman",
      product_name: "Kopi Hitam",
      selling_price: 47025,
    },
  ];
  return (
    <div className="">
      <TableCardProduct
        title="Daftar Produk"
        data={transactionData}
        isButton={false}
        headers={headers}
      />
    </div>
  );
};

export default DaftarProdukPages;