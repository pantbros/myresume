import React from "react";

function PortfolioExperience({portInfoNumber, portInfoTitle}){
    return (
        <div className="flex items-center gap-4 w">
              <p className="text-7xl font-bold">{portInfoNumber}</p>
              <span className="inline-block h-[50%] border-r-[1px] border-emerald-950"/>
              <p>{portInfoTitle}</p>
        </div>
    )
};

export default PortfolioExperience;