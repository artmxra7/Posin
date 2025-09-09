import React, { useState } from 'react'; 
import ButtonMenu from "./ButtonMenu";
import editIcon from "@/assets/images/svg/icon-edit-pencil.svg";
import deleteIcon from "@/assets/images/svg/icon-delete-trash.svg";

const TableCardProduct = ({ title, headers, data, isButtonVisible }) => {
  const titleName = title;
  // Status colors for styling the status column
  const statusColors = {
    Paid: "ml-2 rtl:mr-2 capitalize font-semibold text-emerald-500",
    Pending: "ml-2 rtl:mr-2 capitalize font-semibold text-amber-500",
    Failed: "ml-2 rtl:mr-2 capitalize font-semibold text-red-500",
  };

  const ButtonVisible = ({ isVisible }) => {
    return isVisible ? <ButtonMenu /> : null;
  };
  // Fungsi untuk menangani dropdown toggle
  const handleDropdownToggle = (index) => {
    setDropdownOpen(prevState => prevState === index ? null : index); // toggle the dropdown for specific row
  };

  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Fungsi untuk menangani perubahan status
  const handleStatusChange = (rowIndex, newStatus) => {
    console.log(`Status pada baris ${rowIndex} diubah menjadi: ${newStatus}`);
    // Update status data, bisa diimplementasikan lebih lanjut untuk update state atau data
  };
  // Function to handle button actions
  const handleActionClick = (action, product) => {
    console.log(action, product);
    // Implement your actions here (e.g., Edit, Delete, etc.)
  };
  return (
    <div className="card card-border">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h4>{titleName}</h4>
          <ButtonVisible isVisible={isButtonVisible} />
        </div>
        <div className="overflow-x-auto mt-3">
          <table className="table-default table-hover">
            <thead>
              <tr>
                {headers.map(({ key, label }) => (
                  <th colspan="1" key={key}>
                    <div class="cursor-pointer select-none point">{label}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {data.map((row, index) => (
                <tr key={index}>
                  {headers.map(({ key }) => (
                    <td key={key} className="px-6 py-4 w-[150px]">
                      {key === "status" ? (
                        <div className="dropdown-toggle dropdown-toggle-default relative">
                          <button
                            onClick={() => handleDropdownToggle(index)}
                            className={`button bg-white border border-gray-300  ring-primary hover:border-primaryhover:ring-1 hover:text-primary text-gray-600 h-12 rounded-xl px-5 py-2 button-press-feedback ${statusColors[row[key]]}`}
                          >
                            {row[key]}
                          </button>
                          {dropdownOpen === index && (
                            <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md z-40"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="menu">
                              <ul className='dropdown-menu'>
                                <li
                                  onClick={() => handleStatusChange(index, 'Active')}
                                  className="menu-item menu-item-hoverable px-4 py-2 hover:bg-gray-100"
                                >
                                  Active
                                </li>
                                <li
                                  onClick={() => handleStatusChange(index, 'Inactive')}
                                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                >
                                  Inactive
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      ) : key === "product_image" ? (
                        <div className="flex">
                          {row[key] ? (
                            <img
                              src={row[key]}
                              alt="Product"
                              className="w-20 h-20 object-cover rounded"
                            />
                          ) : (
                            <span className="text-gray-400 italic">
                              No Image
                            </span>
                          )}
                        </div>
                      ) : key === "action" ? (
                        <div className="flex space-x-3">
                          <button
                            onClick={() => handleActionClick("Edit", row)}
                            className=""
                          >
                            <img
                              src={editIcon}
                              alt="edit"
                              className="w-6 h-6"
                            />
                          </button>
                          <button
                            onClick={() => handleActionClick("Delete", row)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <img
                              src={deleteIcon}
                              alt="delete"
                              className="w-6 h-6"
                            />
                          </button>
                        </div>
                      ) : (
                        <span className="font-bold heading-text">
                          <span>{row[key]}</span>
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableCardProduct;
