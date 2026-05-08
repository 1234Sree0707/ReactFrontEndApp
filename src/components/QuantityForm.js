import React, { useState } from "react";
import { performOperation } from "../services/api";
import "../App.css";
function QuantityForm({ setResult }) {
  const [formData, setFormData] = useState({
    thisQuantity: {
      value: "",
      symbol: "",
      label: "",
      type: ""
    },
    thatQuantity: {
      value: "",
      symbol: "",
      label: "",
      type: ""
    }
  });

  const [action, setAction] = useState("add");

  const handleChange = (e, quantityName) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [quantityName]: {
        ...formData[quantityName],
        [name]: value
      }
    });
  };

  const handleSubmit = async () => {
  try {
    const data = await performOperation(action, formData);

    console.log("API response:", data);   // ADD THIS

    setResult(data);
  } catch (error) {
    console.error(error);
  }
};
  return (
    <div>
      <div style={{ backgroundColor: "red" }}>
        <h2 >Perform Operation</h2>
      </div>

      {/* Quantity 1 */}
      <h3>Quantity 1</h3>

      <input className="container2"
        type="number"
        name="value"
        placeholder="Value"
        value={formData.thisQuantity.value}
        onChange={(e) => handleChange(e, "thisQuantity")}
      />

      <input className="container2"
        name="symbol"
        placeholder="Symbol"
        value={formData.thisQuantity.symbol}
        onChange={(e) => handleChange(e, "thisQuantity")}
      />

      <input className="container2"
        name="label"
        placeholder="Label"
        value={formData.thisQuantity.label}
        onChange={(e) => handleChange(e, "thisQuantity")}
      />

      <select className="container2"
        name="type"
        value={formData.thisQuantity.type}
        onChange={(e) => handleChange(e, "thisQuantity")}
      >
        <option value="">Select Type</option>
        <option value="length">length</option>
        <option value="volume">volume</option>
        <option value="weight">weight</option>
        <option value="temperature">temperature</option>
      </select>

      <hr />

      {/* Quantity 2 */}
      <h3>Quantity 2</h3>

      <input className="container3"
        type="number"
        name="value"
        placeholder="Value"
        value={formData.thatQuantity.value}
        onChange={(e) => handleChange(e, "thatQuantity")}
      />

      <input className="container3"
        name="symbol"
        placeholder="Symbol"
        value={formData.thatQuantity.symbol}
        onChange={(e) => handleChange(e, "thatQuantity")}
      />

      <input className="container3"
        name="label"
        placeholder="Label"
        value={formData.thatQuantity.label}
        onChange={(e) => handleChange(e, "thatQuantity")}
      />

      <select className="container3"
        name="type"
        value={formData.thatQuantity.type}
        onChange={(e) => handleChange(e, "thatQuantity")}
      >
        <option value="">Select Type</option>
        <option value="length">length</option>
        <option value="volume">volume</option>
        <option value="weight">weight</option>
        <option value="temperature">temperature</option>
      </select>

      <hr />

      <select className="container2"
        value={action}
        onChange={(e) => setAction(e.target.value)}
      >
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="divide">Divide</option>
        <option value="compare">Compare</option>
        <option value="convert">Convert</option>
      </select>

      <br />
      <br />

      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default QuantityForm;