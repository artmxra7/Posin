import { useState } from "react";

const ModalPayment = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleConfirm = () => {
    // Implement payment confirmation logic here
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600"
      >
        Buka Modal Pembayaran
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-60 z-50 transition-opacity duration-500"
          role="dialog"
          aria-labelledby="modal-title"
          aria-hidden={!isOpen}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-8/9 sm:w-128">
            <div className="flex justify-between items-center">
              <h4 id="modal-title" className="mb-4">
                Masukkan Jumlah Pembayaran
              </h4>
              <button
                onClick={handleClose}
                className="text-gray-600 hover:text-gray-800"
                aria-label="Tutup Modal"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>
            <p className="font-medium">
              Silakan masukkan jumlah pembayaran yang akan dibayar secara tunai.
            </p>
            <div className="mt-4">
              <input
                type="number"
                className="input input-md h-12 focus:ring-primary focus-within:ring-primary focus-within:border-primary focus:border-primary"
                placeholder="Jumlah Pembayaran"
                aria-label="Jumlah Pembayaran"
              />
            </div>
            <div className="flex justify-end mt-6 space-x-4">
              <button
                onClick={handleConfirm}
                className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Konfirmasi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalPayment;
