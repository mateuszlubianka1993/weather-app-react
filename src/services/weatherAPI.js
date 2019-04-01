const apiUrl = search => `https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=26df753807a025c66570efc01c24fb39&units=metric`;

const fetchData = inputValue => fetch(apiUrl(inputValue))
  .then((response) => {
    if (response.ok) {
      return response;
    }
    throw Error('Something went wrong, try again');
  })
  .then(response => response.json());

export { fetchData };
