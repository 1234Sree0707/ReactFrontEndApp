import React from "react";

function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div>
      <h2>Result</h2>

      <p>
        <strong>Action:</strong>{" "}
        {result.action}
      </p>

      <p>
        <strong>Expression:</strong>{" "}
        {result.expression}
      </p>

      <p>
        <strong>Result:</strong>{" "}
        {
          result.action === "COMPARE"
            ? result.resultString
            : result.result
        }
      </p>

      <p>
        <strong>Timestamp:</strong>{" "}
        {result.timestamp}
      </p>
    </div>
  );
}

export default ResultCard;