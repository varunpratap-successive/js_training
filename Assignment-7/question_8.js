//Question-Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.

async function fetchData1() {
  let response1 = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=agra&units=imperial&appid=7f33da9903c18929243e9675953957c4`
  );
  const data1 = await response1.json();
  return response1;
}
async function fetchData2() {
  let response2 = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=noida&units=imperial&appid=7f33da9903c18929243e9675953957c4`
  );
  const data2 = await response2.json();
  return response2;
}
async function fetchData3() {
  let response3 = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=kanpur&units=imperial&appid=7f33da9903c18929243e9675953957c4`
  );
  const data3 = await response3.json();
  return response3;
}

let res = Promise.all([fetchData1(), fetchData2(), fetchData3()]);
res.then((data) => console.log(data));
