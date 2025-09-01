import { useState } from "react";
import SelectBar from "./SelectBar";
import ProgressCircle from "./ProgressCircle";

const SalesTargetCard = ({ props }) => {
  const [mode, setMode] = useState("monthly");
  const optionsSelect = [
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
    { value: "annually", label: "Annually" },
  ];
  return (
    <div className="card card-border">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h4>Sales Target</h4>
          <SelectBar
            options={optionsSelect}
            defaultValue={optionsSelect[0]}
            onChange={(opt) => setMode(opt.value)}
          />
        </div>
        <div className="flex items-center justify-between mt-8">
          <div className="flex flex-col">
            <h2>
              1.3K
              <span className="opacity-60 text-base font-bold">
                {" "}
                / 1.8K Units
              </span>
            </h2>
            <div className="mt-1">Made this month year</div>
          </div>
          <div>
            <div className="progress circle">
              <div className="progress-circle">
                <span className="progress-circle-info">
                  <span className="progress-info heading-text font-bold circle">
                    75%
                  </span>
                </span>
                <ProgressCircle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesTargetCard;
