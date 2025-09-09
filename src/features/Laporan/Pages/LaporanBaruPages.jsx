import React from 'react';
import {TableCard} from '@/components/ui'

const LaporanBaruPages = () => {
  const transactionData = [
    {
      order: "001",
      status: "Completed",
      date: "2025-09-09",
      customer: "Andi",
      amountSpent: 39600,
    },
    {
      order: "002",
      status: "Completed",
      date: "2025-09-09",
      customer: "Siti",
      amountSpent: 27500,
    },
    {
      order: "003",
      status: "Completed",
      date: "2025-09-09",
      customer: "Budi",
      amountSpent: 47025,
    },
  ];
  return (
    <div className="">
      <TableCard title="Laporan Baru" data={transactionData} isButton={false}/>
    </div>
  );
};

export default LaporanBaruPages;