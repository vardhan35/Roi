import React, { useState, useEffect } from "react";

const Index = ({ document, time, automation }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const timePerDay = (document * time * automation) / 100;
    const timePerYear = timePerDay * 240;
    const hoursPerYear = timePerYear / 60;
    const newVal = hoursPerYear / 1920;
    console.log("timePerYear", hoursPerYear);
    setVal(newVal);
  }, [document, time, automation]);

  return (
    <div className="result-item">
      <h3>
        Number of employees freed up to do more important tasks:{val} Employee
      </h3>
    </div>
  );
};

export default Index;
