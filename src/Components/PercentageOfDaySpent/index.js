import React, { useState, useEffect } from "react";

const Index = ({ document, employ, time }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const docPerEmp = document / employ;
    const percent = (docPerEmp * time) / (8 * 60);
    const newVal = percent * 100;
    setVal(newVal);
  }, [document, employ, time]);
  return (
    <div className="result-item">
      <h3>
        Percentage of day spent processing documents (per employee) :{val}%
      </h3>
    </div>
  );
};

export default Index;
