import React, { useState, useEffect } from "react";

const Index = ({ document, time, automation }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const timePerDay = (document * time * automation) / 100;
    const timePerYear = timePerDay * 240;
    const newVal = timePerYear / 60;
    setVal(newVal);
  }, [document, time, automation]);
  return (
    <div className="result-item">
      <h3>
        Time saved automating your document process (per year) : {val} Employee
        Hrs
      </h3>
    </div>
  );
};

export default Index;
