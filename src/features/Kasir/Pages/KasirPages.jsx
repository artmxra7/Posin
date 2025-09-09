import { useState, useEffect } from "react";
import { Banknote } from "lucide-react";
import { useDispatch } from "react-redux";
import { setOrder } from "../../../store/Order/OrderSlice";
import { useSidebar } from "../../../components/layout/context/SidebarContext";
function KasirPages() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Sosis Bakar Mayo",
      price: 45000,
      image:
        "https://wiratech.co.id/wp-content/uploads/2022/06/sosis-bakar-mayo-_1_.webp",
    },
    {
      id: 2,
      name: "French Fries Balado",
      price: 45000,
      image:
        "https://www.jagel.id/api/listimage/v/French-Fries-Balado-0-65560e5480e90cb5.jpg",
    },
    {
      id: 3,
      name: "French Fries Original",
      price: 45000,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/83/French_Fries.JPG",
    },
    {
      id: 4,
      name: "Roti Bakar",
      price: 45000,
      image:
        "https://www.tokomesin.com/wp-content/uploads/2017/09/cara-membuat-roti-bakar-tokomesin6.jpg",
    },
    {
      id: 5,
      name: "Gabin Goreng",
      price: 45000,
      image:
        "https://awsimages.detik.net.id/community/media/visual/2022/08/29/resep-gabin-tape_43.jpeg?w=1200",
    },
    {
      id: 6,
      name: "Singkong Goreng",
      price: 45000,
      image:
        "https://aslimasako.com/storage/post/new-title-06022025-072339.jpg",
    },
    {
      id: 7,
      name: "Mie Goreng Biasa",
      price: 45000,
      image: "https://assets.unileversolutions.com/v1/123561172.png",
    },
    {
      id: 8,
      name: "Mie Rebus",
      price: 45000,
      image:
        "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/303/2024/02/20/1505877492607-2681554553.jpg",
    },
    {
      id: 9,
      name: "Kopi Susu",
      price: 45000,
      image:
        "https://img-global.cpcdn.com/recipes/9aa7438201fbd11f/680x781cq80/kopi-susu-rumahan-foto-resep-utama.jpg",
    },
    {
      id: 10,
      name: "Kopi Hitam",
      price: 45000,
      image:
        "https://curupekspress.bacakoran.co/upload/9b4aae77d6c40e18fd1515d558b74448.jpg",
    },
    {
      id: 11,
      name: "Kopi Gula Aren",
      price: 45000,
      image:
        "https://awsimages.detik.net.id/community/media/visual/2024/10/16/es-kopi-susu-gula-aren.jpeg?w=1200",
    },
    // Tambahkan item lainnya di sini
  ]);
  const { hideSidebar } = useSidebar();
  const [order, setOrderKasir] = useState([]);
  const dispatch = useDispatch();
  const [voucher, setVoucher] = useState("");
  useEffect(() => {
    // Menyembunyikan sidebar ketika halaman Login dimuat
    hideSidebar();
  }, [hideSidebar]);
  const addToOrder = (item) => {
    // Cek jika item sudah ada dalam order, update jumlahnya
    const existingItem = order.find((orderItem) => orderItem.id === item.id);
    if (existingItem) {
      setOrderKasir(
        order.map((orderItem) =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        )
      );
    } else {
      setOrderKasir([...order, { ...item, quantity: 1 }]);
    }
  };

  const removeFromOrder = (item) => {
    // Mengurangi jumlah item dalam order atau menghapusnya jika jumlahnya mencapai 0
    const existingItem = order.find((orderItem) => orderItem.id === item.id);
    if (existingItem.quantity > 1) {
      setOrderKasir(
        order.map((orderItem) =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity - 1 }
            : orderItem
        )
      );
    } else {
      setOrderKasir(order.filter((orderItem) => orderItem.id !== item.id));
    }
  };

  const calculateSubtotal = () => {
    return order.reduce(
      (subtotal, item) => subtotal + item.price * item.quantity,
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

  const handlePayClick = () => {
    const subtotal = calculateSubtotal();
    const tax = calculateTax(subtotal);
    const discount = applyVoucher(subtotal);
    const total = subtotal + tax - discount;

    const orderSummary = {
      order: order, // Pastikan 'order' ini adalah array atau objek yang valid
      subtotal: subtotal,
      tax: tax,
      voucher: discount,
      total_price: total,
    };

    console.log("Order Summary yang dikirim ke Redux:", orderSummary); // Log sebelum dispatch

    dispatch(setOrder(orderSummary)); // Dispatch ke Redux
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
              <p className="mt-2 text-center heading-text font-bold">
                {item.name}
              </p>
                <p className="text-center text-sm">
                  Rp {item.price.toLocaleString()}
                </p>
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
                    <td className="heading-text font-bold px-4 py-2">
                      {item.name}
                    </td>
                    <td className="text-center px-4 py-2 heading-text font-bold">
                      Rp {(item.price * item.quantity).toLocaleString()}
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
            <div className="flex justify-between mt-4 font-semibold">
              <span>Subtotal</span>
              <span>Rp {calculateSubtotal().toLocaleString()}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Pajak (10%)</span>
              <span>
                Rp {calculateTax(calculateSubtotal()).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between mt-2">
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
              <button
                className="bg-primary-deep text-white py-3 px-8 rounded-lg hover:bg-purple-400 flex items-center justify-center space-x-3 w-full"
                onClick={handlePayClick}
              >
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
