import React, { useState, useEffect } from "react";

const Index = ({ document, employ }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const newVal = document / employ;
    setVal(newVal);
  }, [document, employ]);
  return (
    <div className="result-item">
      <h3>Number of documents Per Employee Per Day : {val}</h3>
    </div>
  );
};

export default Index;
