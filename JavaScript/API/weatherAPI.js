
const urlGeoLocation = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={335af534491b02aaffd2ef3fe834c1ae}'
//const urlGeoLocation = 'http://api.openweathermap.org/geo/1.0/zip?zip={18614},{USA}&appid={335af534491b02aaffd2ef3fe834c1ae}'

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


