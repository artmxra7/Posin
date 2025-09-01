import ButtonMenu from "./ButtonMenu";
const TableCard = () => {
  const orders = [
    {
      id: "#92627",
      status: "Paid",
      date: "09/07/2022",
      customer: "Tara Fletcher",
      amount: "$279.00",
    },
    {
      id: "#92509",
      status: "Pending",
      date: "26/06/2022",
      customer: "Joyce Freeman",
      amount: "$831.00",
    },
    {
      id: "#91631",
      status: "Paid",
      date: "18/06/2022",
      customer: "Brittany Hale",
      amount: "$142.00",
    },
    {
      id: "#90963",
      status: "Paid",
      date: "11/06/2022",
      customer: "Luke Cook",
      amount: "$232.00",
    },
    {
      id: "#89332",
      status: "Pending",
      date: "02/06/2022",
      customer: "Eileen Horton",
      amount: "$597.00",
    },
    {
      id: "#89107",
      status: "Failed",
      date: "17/04/2022",
      customer: "Frederick Adams",
      amount: "$72.00",
    },
    {
      id: "#89021",
      status: "Paid",
      date: "13/04/2022",
      customer: "Lee Wheeler",
      amount: "$110.00",
    },
  ];

  const statusColors = {
    Paid: "ml-2 rtl:mr-2 capitalize font-semibold text-emerald-500",
    Pending: "ml-2 rtl:mr-2 capitalize font-semibold text-amber-500",
    Failed: "ml-2 rtl:mr-2 capitalize font-semibold text-red-500",
  };
  return (
    <div className="card card-border">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h4>Recent Orders</h4>
          <ButtonMenu />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-3 text-left">Order</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Customer</th>
                <th className="px-6 py-3 text-left">Amount Spent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 font-medium">{order.id}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                        statusColors[order.status]
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-current"></span>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{order.date}</td>
                  <td className="px-6 py-4">{order.customer}</td>
                  <td className="px-6 py-4 font-medium">{order.amount}</td>
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
