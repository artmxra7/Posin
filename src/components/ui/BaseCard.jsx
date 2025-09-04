import React from "react";

const BaseCard = ({ title }) => {
  const Title = title;
  return (
    <div className="card card-border">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h4>{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default BaseCard;
