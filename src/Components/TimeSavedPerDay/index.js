import React, { useState, useEffect } from "react";

const Index = ({ document, time, automation }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const timeInMin = (document * time * automation) / 100;
    const newVal = timeInMin / 60;
    setVal(newVal);
  }, [document, time, automation]);
  return (
    <div className="result-item">
      <h3>
        Time Saved automating your document process (per day) : {val} Employee
        Hours
      </h3>
    </div>
  );
};

export default Index;
