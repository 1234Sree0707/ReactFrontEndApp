import React, { useState } from "react";
import {
  getHistoryByAction,
  getHistoryByType,
  getCount,
} from "../services/api";

function HistoryPanel() {
  const [searchValue, setSearchValue] = useState("");
  const [history, setHistory] = useState([]);
  const [countValue, setCountValue] = useState(null);
  const [message, setMessage] = useState("");

  const handleHistoryByAction = async () => {
    try {
      const value = searchValue.trim().toUpperCase();

      console.log(
        "Calling:",
        `http://localhost:8080/api/quantities/history/action/${value}`
      );

      const data = await getHistoryByAction(value);

      console.log("Response:", data);

      if (data.length === 0) {
        setMessage("No records found");
        setHistory([]);
      } else {
        setMessage("");
        setHistory(data);
      }

    } catch (error) {
      console.error("Error:", error);
      setMessage("Error fetching history");
    }
  };

  const handleHistoryByType = async () => {
    try {
      const value = searchValue.trim().toLowerCase();

      const data = await getHistoryByType(value);

      if (data.length === 0) {
        setMessage("No records found");
        setHistory([]);
      } else {
        setMessage("");
        setHistory(data);
      }

    } catch (error) {
      console.error(error);
      setMessage("Error fetching history");
    }
  };

  const handleCount = async () => {
    try {
      const value = searchValue.trim().toUpperCase();

      const data = await getCount(value);

      setCountValue(data);

    } catch (error) {
      console.error(error);
      setMessage("Error fetching count");
    }
  };

  return (
    <div>
      <h2>History and Count</h2>

      <input
        placeholder="Enter action (ADD) or type (length)"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleHistoryByAction}>
        History by Action
      </button>

      <button onClick={handleHistoryByType}>
        History by Type
      </button>

      

      <br />
      <br />


      {message && (
        <p style={{ color: "red" }}>
          {message}
        </p>
      )}

      {history.length > 0 && (
        <div>
          <h3>History Results</h3>

          {history.map((item, index) => (
            <div key={index}>
              <p>
                <strong>Action:</strong> {item.action}
              </p>

              <p>
                <strong>Expression:</strong> {item.expression}
              </p>

              <p>
                <strong>Result:</strong> {item.result}
              </p>

              <p>
                <strong>Type:</strong> {item.type}
              </p>

              <p>
                <strong>Timestamp:</strong> {item.timestamp}
              </p>

              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HistoryPanel;