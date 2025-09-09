import ButtonMenu from "./ButtonMenu";

const TableCard = ({ title, data, isButtonVisible }) => {
  const titleName = title;
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  // Status colors for styling the status column
  const statusColors = {
    Paid: "ml-2 rtl:mr-2 capitalize font-semibold text-emerald-500",
    Pending: "ml-2 rtl:mr-2 capitalize font-semibold text-amber-500",
    Failed: "ml-2 rtl:mr-2 capitalize font-semibold text-red-500",
  };

  const ButtonMenu = ({ isVisible }) => {
    return isVisible ? <button className="btn-menu">Menu</button> : null; // Jika isVisible false, ButtonMenu tidak akan dirender
  };

  return (
    <div className="card card-border">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h4>{titleName}</h4>
          <ButtonMenu isVisible={isButtonVisible} />
        </div>
        <div className="overflow-x-auto mt-3">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
              <tr>
                {headers.map((header, index) => (
                  <th key={index} className="px-6 py-3 text-left">
                    {header.charAt(0).toUpperCase() + header.slice(1)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {data.map((order, index) => (
                <tr key={index}>
                  {headers.map((header) => (
                    <td key={header} className="px-6 py-4">
                      {header === "status" ? (
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                            statusColors[order[header]] || ""
                          }`}
                        >
                          <span className="w-2 h-2 rounded-full bg-current"></span>
                          {order[header]}
                        </span>
                      ) : (
                        order[header]
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

export default TableCard;
