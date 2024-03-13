//Question->Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)

function fetchData(callback, location) {
  const response = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=7f33da9903c18929243e9675953957c4`
  );
  callback(response);
}

function showResults(response) {
  response.then((data) => data.json()).then((data) => console.log(data));
}
fetchData(showResults, "Agra");
