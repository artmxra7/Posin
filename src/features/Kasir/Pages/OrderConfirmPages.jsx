import React, { useState } from "react";
import { ModalPayment } from "../../../components/ui";
const OrderConfirm = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const orderData = {
     
    order: [
      {
        id: 4,
        name: "Roti Bakar",
        price: 45000,
        image:
          "https://www.tokomesin.com/wp-content/uploads/2017/09/cara-membuat-roti-bakar-tokomesin6.jpg",
        quantity: 2,
      },
      {
        id: 3,
        name: "French Fries Original",
        price: 45000,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/83/French_Fries.JPG",
        quantity: 4,
      },
    ],
    subtotal: 270000,
    tax: 27000,
    voucher: 0,
    total_price: 297000,
    error: false,
  };

  return (
    <>
      <div className="container mx-auto flex items-center justify-between mb-4">
        <div>
          <h3>Order: #95954</h3>
        </div>
        <div class="flex items-center gap-2 print:hidden">
          <button class="button bg-primary hover:bg-primary-mild text-neutral h-12 rounded-xl px-5 py-2 button-press-feedback">
            Bayar
          </button>
        </div>
      </div>
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="gap-4 flex flex-col  xl:w-[65rem] lg:flex-row">
            <div className="gap-4 flex flex-col flex-auto">
              <div className="card card-border shadow-md">
                <div className="card-body">
                  <h4 className="mb-4">Konfirmasi Order</h4>
                  {/* Order Items */}
                  <div className="flex flex-col gap-4">
                    {orderData.order.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-xl bg-gray-50 dark:bg-gray-700 p-4"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="heading-text font-bold">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              Qty: {item.quantity}
                            </p>
                          </div>
                          <div className="ml-auto">
                            <p className="heading-text font-bold">
                              Rp {item.price * item.quantity}.00
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-[320px] xl:w-[420px] gap-4 flex flex-col">
            <div className="card card-border">
              <div className="card-body">
                <h4 className="mb-4">Pembayaran</h4>
                {/* Pilihan Metode Pembayaran */}
                <div className="space-y-4">
                  {/* Tunai */}
                  <div
                    className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer 
                ${
                  paymentMethod === "Tunai"
                    ? "bg-blue-100 border-blue-500"
                    : "hover:bg-gray-100 border-gray-300"
                } 
                border`}
                    onClick={() => setPaymentMethod("Tunai")}
                  >
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/012/184/580/non_2x/cash-payment-outline-color-icon-vector.jpg"
                      alt="Tunai"
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h5 className="text-lg font-medium">Tunai</h5>
                    </div>
                    {paymentMethod === "Tunai" && (
                      <span className="text-white bg-blue-500 py-1 px-2 rounded-full text-xs font-semibold">
                        Dipilih
                      </span>
                    )}
                  </div>

                  {/* QRIS */}
                  <div
                    className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer 
                ${
                  paymentMethod === "QRIS"
                    ? "bg-blue-100 border-blue-500"
                    : "hover:bg-gray-100 border-gray-300"
                } 
                border`}
                    onClick={() => setPaymentMethod("QRIS")}
                  >
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/002/258/271/small_2x/template-of-qr-code-ready-to-scan-with-smartphone-illustration-vector.jpg"
                      alt="QRIS"
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h5 className="text-lg font-medium">QRIS</h5>
                    </div>
                    {paymentMethod === "QRIS" && (
                      <span className="text-white bg-blue-500 py-1 px-2 rounded-full text-xs font-semibold">
                        Dipilih
                      </span>
                    )}
                  </div>
                </div>

                {/* Tampilkan pilihan yang dipilih */}
                {paymentMethod && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">
                      Metode Pembayaran yang Dipilih:{" "}
                      <strong>{paymentMethod}</strong>
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div class="card card-border" role="presentation">
              <div class="card-body">
                <h4 className="mb-4">Ringkasan Harga</h4>
                <div className="mt-6 border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-medium">Subtotal</span>
                    <span className="font-semibold">
                      Rp {orderData.subtotal}.00
                    </span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-lg font-medium">Tax (10%)</span>
                    <span className="font-semibold">Rp {orderData.tax}.00</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-lg font-medium">
                      Potongan Voucher
                    </span>
                    <span className="font-semibold">
                      Rp {orderData.voucher}.00
                    </span>
                  </div>
                  <div className="flex justify-between mt-4 text-xl font-bold">
                    <h4>Total</h4>
                    <h4>Rp {orderData.total_price}.00</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalPayment />
    </>
  );
};

export default OrderConfirm;
