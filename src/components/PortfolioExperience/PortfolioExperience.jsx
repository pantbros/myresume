import React, { useEffect, useState } from "react";

function PortfolioExperience({ portInfoNumber, portInfoTitle }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const targetNumber = parseInt(portInfoNumber.replace(/[^0-9]/g, ''));
    const increment = targetNumber / 100;

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < targetNumber) {
          return Math.min(prevCount + increment, targetNumber);
        }
        clearInterval(interval);
        return targetNumber;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [portInfoNumber]);

  return (
    <div className="flex md:items-center gap-1 text-center md:text-left md:gap-4 w flex-col md:flex-row">
      <p className="text-7xl font-bold">{Math.floor(count).toLocaleString()}</p> {/* Formatting the count */}
      <span className="inline-block md:h-[50px] border-b-[1px] md:border-l-[1px] border-emerald-950" />
      <p>{portInfoTitle}</p>
    </div>
  );
}

export default PortfolioExperience;