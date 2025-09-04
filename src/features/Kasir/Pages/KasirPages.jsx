import { useState } from "react";
import { Banknote  } from "lucide-react";
function KasirPages() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Cumi Tepung",
      price: "Rp 45.000",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxM7kKw-9pwwnEhjYkdMhSAZvk-eBvL0k00kNmO89NosqPtXnCtRikRNjvo8BDUuPIQTe3kdBXy23wt-0KTqDoD1A4fB7qSFTquV0MvCjuJ-1WMhQlFkyHTmaembEtv5Yex5p1aRUx3A/s1600/Minuman+yang+Baik+untuk+Menjaga+Kesehatan.jpg",
    },
    {
      id: 2,
      name: "Cumi Bakar",
      price: "Rp 50.000",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxM7kKw-9pwwnEhjYkdMhSAZvk-eBvL0k00kNmO89NosqPtXnCtRikRNjvo8BDUuPIQTe3kdBXy23wt-0KTqDoD1A4fB7qSFTquV0MvCjuJ-1WMhQlFkyHTmaembEtv5Yex5p1aRUx3A/s1600/Minuman+yang+Baik+untuk+Menjaga+Kesehatan.jpg",
    },
    {
      id: 3,
      name: "Cumi Bakar",
      price: "Rp 50.000",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxM7kKw-9pwwnEhjYkdMhSAZvk-eBvL0k00kNmO89NosqPtXnCtRikRNjvo8BDUuPIQTe3kdBXy23wt-0KTqDoD1A4fB7qSFTquV0MvCjuJ-1WMhQlFkyHTmaembEtv5Yex5p1aRUx3A/s1600/Minuman+yang+Baik+untuk+Menjaga+Kesehatan.jpg",
    },
    {
      id: 4,
      name: "Cumi Bakar",
      price: "Rp 50.000",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxM7kKw-9pwwnEhjYkdMhSAZvk-eBvL0k00kNmO89NosqPtXnCtRikRNjvo8BDUuPIQTe3kdBXy23wt-0KTqDoD1A4fB7qSFTquV0MvCjuJ-1WMhQlFkyHTmaembEtv5Yex5p1aRUx3A/s1600/Minuman+yang+Baik+untuk+Menjaga+Kesehatan.jpg",
    },
    {
      id: 5,
      name: "Cumi Bakar",
      price: "Rp 50.000",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxM7kKw-9pwwnEhjYkdMhSAZvk-eBvL0k00kNmO89NosqPtXnCtRikRNjvo8BDUuPIQTe3kdBXy23wt-0KTqDoD1A4fB7qSFTquV0MvCjuJ-1WMhQlFkyHTmaembEtv5Yex5p1aRUx3A/s1600/Minuman+yang+Baik+untuk+Menjaga+Kesehatan.jpg",
    },
    {
      id: 6,
      name: "Cumi Bakar",
      price: "Rp 50.000",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxM7kKw-9pwwnEhjYkdMhSAZvk-eBvL0k00kNmO89NosqPtXnCtRikRNjvo8BDUuPIQTe3kdBXy23wt-0KTqDoD1A4fB7qSFTquV0MvCjuJ-1WMhQlFkyHTmaembEtv5Yex5p1aRUx3A/s1600/Minuman+yang+Baik+untuk+Menjaga+Kesehatan.jpg",
    },
    {
      id: 7,
      name: "Cumi Bakar",
      price: "Rp 50.000",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxM7kKw-9pwwnEhjYkdMhSAZvk-eBvL0k00kNmO89NosqPtXnCtRikRNjvo8BDUuPIQTe3kdBXy23wt-0KTqDoD1A4fB7qSFTquV0MvCjuJ-1WMhQlFkyHTmaembEtv5Yex5p1aRUx3A/s1600/Minuman+yang+Baik+untuk+Menjaga+Kesehatan.jpg",
    },
    {
      id: 8,
      name: "Cumi Bakar",
      price: "Rp 50.000",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxM7kKw-9pwwnEhjYkdMhSAZvk-eBvL0k00kNmO89NosqPtXnCtRikRNjvo8BDUuPIQTe3kdBXy23wt-0KTqDoD1A4fB7qSFTquV0MvCjuJ-1WMhQlFkyHTmaembEtv5Yex5p1aRUx3A/s1600/Minuman+yang+Baik+untuk+Menjaga+Kesehatan.jpg",
    },
    {
      id: 9,
      name: "Cumi Bakar",
      price: "Rp 50.000",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxM7kKw-9pwwnEhjYkdMhSAZvk-eBvL0k00kNmO89NosqPtXnCtRikRNjvo8BDUuPIQTe3kdBXy23wt-0KTqDoD1A4fB7qSFTquV0MvCjuJ-1WMhQlFkyHTmaembEtv5Yex5p1aRUx3A/s1600/Minuman+yang+Baik+untuk+Menjaga+Kesehatan.jpg",
    },
    {
      id: 10,
      name: "Cumi Bakar",
      price: "Rp 50.000",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxM7kKw-9pwwnEhjYkdMhSAZvk-eBvL0k00kNmO89NosqPtXnCtRikRNjvo8BDUuPIQTe3kdBXy23wt-0KTqDoD1A4fB7qSFTquV0MvCjuJ-1WMhQlFkyHTmaembEtv5Yex5p1aRUx3A/s1600/Minuman+yang+Baik+untuk+Menjaga+Kesehatan.jpg",
    },
    {
      id: 11,
      name: "Cumi Bakar",
      price: "Rp 50.000",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxM7kKw-9pwwnEhjYkdMhSAZvk-eBvL0k00kNmO89NosqPtXnCtRikRNjvo8BDUuPIQTe3kdBXy23wt-0KTqDoD1A4fB7qSFTquV0MvCjuJ-1WMhQlFkyHTmaembEtv5Yex5p1aRUx3A/s1600/Minuman+yang+Baik+untuk+Menjaga+Kesehatan.jpg",
    },
    // Tambahkan item lainnya di sini
  ]);

  const [order, setOrder] = useState([]);

   const [voucher, setVoucher] = useState(""); 
  const addToOrder = (item) => {
    // Cek jika item sudah ada dalam order, update jumlahnya
    const existingItem = order.find((orderItem) => orderItem.id === item.id);
    if (existingItem) {
      setOrder(
        order.map((orderItem) =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        )
      );
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  };

  const removeFromOrder = (item) => {
    // Mengurangi jumlah item dalam order atau menghapusnya jika jumlahnya mencapai 0
    const existingItem = order.find((orderItem) => orderItem.id === item.id);
    if (existingItem.quantity > 1) {
      setOrder(
        order.map((orderItem) =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity - 1 }
            : orderItem
        )
      );
    } else {
      setOrder(order.filter((orderItem) => orderItem.id !== item.id));
    }
  };

   const calculateSubtotal = () => {
     return order.reduce(
       (subtotal, item) =>
         subtotal +
         parseInt(item.price.replace("Rp ", "").replace(".", "")) *
           item.quantity,
       0
     );
   };

   const calculateTax = (subtotal) => {
     return subtotal * 0.1; // Pajak 10%
   };

   const applyVoucher = (subtotal) => {
     if (voucher === "DISKON10") {
       return subtotal * 0.1; // Voucher diskon 10%
     }
     return 0;
   };

   const calculateTotal = () => {
     const subtotal = calculateSubtotal();
     const tax = calculateTax(subtotal);
     const discount = applyVoucher(subtotal);
     return subtotal + tax - discount;
   };
  const orderSummaryHeight = order.length === 0 ? "h-[350px]" : "h-auto";
  return (
    <div className="flex gap-4 p-2">
      <div className="grid grid-cols-2 gap-4 p-2">
        {/* Left Side: Menu Items */}
        <div className="grid grid-cols-4 gap-4 ">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-gray-200 rounded-lg p-4 hover:bg-gray-300"
            >
              <img
                className="w-full h-32 object-cover rounded-lg"
                src={item.image}
                alt={item.name}
              />
              <p className="mt-2 text-center">{item.name}</p>
              <p className="text-center text-sm">{item.price}</p>
              <div className="flex justify-between mt-2">
                <button
                  className="bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600"
                  onClick={() => addToOrder(item)}
                >
                  Tambah
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Order Summary */}
        <div className="bg-white p-4 rounded-lg shadow-lg min-h-[300px] flex flex-col justify-between">
          <h2 className="text-xl font-semibold mb-4">Pesanan</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="w-[40%] text-left px-4 py-2">Nama</th>
                  <th className="text-center px-4 py-2">Harga</th>
                  <th className="text-center px-4 py-2">Jumlah</th>
                </tr>
              </thead>
              <tbody>
                {order.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="font-bold px-4 py-2">{item.name}</td>
                    <td className="text-center px-4 py-2 font-bold">
                      Rp{" "}
                      {(
                        parseInt(
                          item.price.replace("Rp ", "").replace(".", "")
                        ) * item.quantity
                      ).toLocaleString()}
                    </td>
                    <td className="px-4 py-2 flex justify-center items-center space-x-2">
                      <button
                        className="bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 ring-primary dark:ring-white hover:border-primary dark:hover:border-white hover:ring-1 hover:text-primary dark:hover:text-white dark:hover:bg-transparent text-gray-600 dark:text-gray-100 h-8 rounded-lg w-8 inline-flex items-center justify-center text-base"
                        onClick={() => removeFromOrder(item)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 ring-primary dark:ring-white hover:border-primary dark:hover:border-white hover:ring-1 hover:text-primary dark:hover:text-white dark:hover:bg-transparent text-gray-600 dark:text-gray-100 h-8 rounded-lg w-8 inline-flex items-center justify-center text-base"
                        onClick={() => addToOrder(item)}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bagian bawah */}
          <div className="flex flex-col mt-auto">
            <div className="flex justify-between text-sm mt-4">
              <span>Subtotal</span>
              <span>Rp {calculateSubtotal().toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span>Pajak (10%)</span>
              <span>
                Rp {calculateTax(calculateSubtotal()).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span>Voucher</span>
              <input
                type="text"
                value={voucher}
                onChange={(e) => setVoucher(e.target.value)}
                placeholder="Masukkan Kode Voucher"
                className="p-2 border rounded"
              />
            </div>
            <div className="flex justify-between text-xl heading-text font-bold mt-4">
              <span>Total</span>
              <span>Rp {calculateTotal().toLocaleString()}</span>
            </div>
            <div className="mt-6 w-full">
              <button className="bg-primary-deep text-white py-3 px-8 rounded-lg hover:bg-purple-400 flex items-center justify-center space-x-3 w-full">
                <Banknote size={24} />
                <span className="text-lg font-semibold">Bayar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KasirPages;
