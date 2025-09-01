import React from "react";
import {OverviewCard, SalesTargetCard, TableCard} from '../../../components/ui'

const DashboardPages = () => {

  return (
    <div className="container mx-auto h-full">
      <div>
        <div className="flex flex-col gap-4 max-w-full overflow-x-hidden">
          <div className="flex flex-col xl:flex-row gap-4">
            <div className="flex flex-col gap-4 flex-1 xl:col-span-3">
              <OverviewCard />
              <TableCard />
            </div>
            <div className="flex flex-col gap-4 2xl:min-w-[360px]">
              <SalesTargetCard />
            </div>
          </div>
          <TableCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardPages;
