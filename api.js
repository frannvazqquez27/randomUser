export async function fetchUserData() {
  try {
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();
    return data.results[0];
  } catch (error) {
    console.error('Error fetching:', error);
    throw error;
  }
}

export async function fetchCurrentTime(city) {
  const url = `https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?city=${city}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fb5233974amsh0ed628cd8e4c43bp163e69jsn90f9ff634f35',
      'X-RapidAPI-Host': 'world-time-by-api-ninjas.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return {
      hour: data.hour,
      minute: data.minute,
      second: data.second
    };
  } catch (error) {
    console.error('Error fetching current time:', error);
    throw error;
  }
}