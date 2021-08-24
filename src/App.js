import "./App.css";
import React, { useState } from "react";
import NofDocuments from "./Components/NofDocuments";
import NofEmployeesFreed from "./Components/NofEmployeesFreed";
import PercentageOfDaySpent from "./Components/PercentageOfDaySpent";
import TimeSavedPerDay from "./Components/TimeSavedPerDay";
import TimeSavedPerYear from "./Components/TimeSavedPerYear";

function App() {
  const [document, setDocument] = useState(0);
  const [employ, setEmploy] = useState(0);
  const [time, setTime] = useState(0);
  const [automation, setAutomation] = useState(1);

  console.log("document", document);
  console.log("employ", employ);
  console.log("time", time);
  console.log("automation", automation);

  return (
    <div className="App">
      <div className="input_box">
        <div className="input">
          <label htmlFor="document">Average Number Document Per Day</label>
          <input
            type="text"
            name="document"
            value={document}
            onChange={(e) => setDocument(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="employ">Give Nof Employees</label>
          <input
            type="text"
            name="employ"
            value={employ}
            onChange={(e) => setEmploy(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="time">Average Time Required Per one Document</label>
          <input
            type="text"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="automation">Give Automation Factor</label>
          <input
            type="range"
            min="1"
            max="100"
            name="automation"
            value={automation}
            onChange={(e) => setAutomation(e.target.value)}
          />
          Your Automation Factor : {automation}
        </div>
      </div>
      {document && employ && time && automation ? (
        <div className="results">
          <NofDocuments document={document} employ={employ} />
          <PercentageOfDaySpent
            document={document}
            employ={employ}
            time={time}
          />
          <TimeSavedPerDay
            document={document}
            time={time}
            automation={automation}
          />
          <TimeSavedPerYear
            document={document}
            time={time}
            automation={automation}
          />
          <NofEmployeesFreed
            document={document}
            time={time}
            automation={automation}
          />
        </div>
      ) : null}
    </div>
  );
}

export default App;
