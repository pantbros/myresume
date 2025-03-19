import React, { useEffect, useState } from "react";

function PortfolioExperience({ portInfoNumber, portInfoTitle }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const targetNumber = parseInt(portInfoNumber.replace(/[^0-9]/g, '')); // Remove any non-numeric characters like 'k'
    const increment = targetNumber / 100; // Controls how fast the number increases

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < targetNumber) {
          return Math.min(prevCount + increment, targetNumber); // Increment the count
        }
        clearInterval(interval); // Stop the interval when we reach the target
        return targetNumber;
      });
    }, 30); // Update the count every 30 milliseconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [portInfoNumber]);

  return (
    <div className="flex items-center gap-4 w">
      <p className="text-7xl font-bold">{Math.floor(count).toLocaleString()}</p> {/* Formatting the count */}
      <span className="inline-block h-[50%] border-r-[1px] border-emerald-950" />
      <p>{portInfoTitle}</p>
    </div>
  );
}

export default PortfolioExperience;
