export const postDataService = async (api_url: string, data: any  ) => {
  const response = await fetch(api_url,{    
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    
    const errorDetails = await response.json();
      throw new Error(`Network response was not ok: ${errorDetails.message}`);
  }
  return await response.json();
};