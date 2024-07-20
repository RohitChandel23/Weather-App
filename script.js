const apiKey="44dfa499f3c1efdb7ee5196a02509f4d";
const apiUrl ="https:api.openweathermap.org/data/2.5/weather?units=metric"; //"https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";
const searchBox=document.querySelector(".search-input");
const searchBtn=document.querySelector(".search-button")
const cname = document.querySelector(".search-input");

const imgobj = document.querySelector(".photo") 






async function checkWeather(city){
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`); //(apiUrl  + `&appid=${apiKey}`);

    var data = await response.json();

    //display data
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    
 

    const p = document.querySelector(".prac")
p.innerHTML=data.weather[0].main;
const ans = data.weather[0].main;

    imgobj.src=`images/${ans}.png`;
    
    
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(cname.value);

})




