export const fetchDataService = async (api_url) => {
  const response = await fetch(api_url,{    
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) {
    
    throw new Error('Network response was not ok');
  }
  return response.json();
};