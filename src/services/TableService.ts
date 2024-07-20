const api_url = "http://localhost:8080/tables";

export const fetchTables = async () => {
  const response = await fetch(api_url,{    
    method: "get",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) {
    
    throw new Error('Network response was not ok');
  }
  return response.json();
};