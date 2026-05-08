const API_BASE = "http://localhost:8080/api/quantities";

export const performOperation = async (action, data) => {
  const response = await fetch(`${API_BASE}/${action}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const getHistoryByAction = async (action) => {
  const response = await fetch(`${API_BASE}/history/action/${action}`);
  return response.json();
};

export const getHistoryByType = async (type) => {
  const response = await fetch(`${API_BASE}/history/type/${type}`);
  return response.json();
};

export const getCount = async (action) => {
  const response = await fetch(`${API_BASE}/count/${action}`);
  return response.json();
};
