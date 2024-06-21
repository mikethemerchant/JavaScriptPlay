
const urlGeoLocation = 'https://reqres.in/api/users'

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


