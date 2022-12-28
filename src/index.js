//1
let now = new Date();
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let monthes = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "Nowember",
  "December"
];

let currentMonth = monthes[now.getMonth()];
let currentDate = now.getDate();
let currentDay = days[now.getDay()];
let currentHours = now.getHours();
let currentMinutes = now.getMinutes();

h3.innerHTML = `${currentMonth}, ${currentDate}`;
h4.innerHTML = `${currentDay}, ${currentHours}:${currentMinutes}`;

function showCurrentTemp(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}
function search(city) {
  let apiKey = "515c9ddbeb3cda9061acfab71031839e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(showCurrentTemp);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city").value;
  search(city);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

search("Kyiv");
