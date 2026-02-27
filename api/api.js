export const weatherRequest = async (API_URL) => {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data; 
  } catch (error) {
    console.log(`Ошибка запроса: ${error}`);
    throw error;
  }
};