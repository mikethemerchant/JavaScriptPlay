
const urlGeoLocation = 'http://api.openweathermap.org/geo/1.0/zip?zip={18614},{USA}&appid={b7d31e8cf3f5ef7a6715984ea445846b}'

const getData = async () => {
    try {
      const response = await fetch(urlGeoLocation);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  getData();


