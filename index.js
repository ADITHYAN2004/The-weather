const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const key = "211b09d042ee8f7f2636ead3995e4c5a";
const weather=document.querySelector(".weather-img");
const wind=document.querySelector(".wind-text-change");
const humi=document.querySelector(".humi-text-change");
const cityname=document.querySelector(".place-name");
const tem=document.querySelector(".temp");
const search=document.querySelector(".btn");
const serchcity= document.querySelector(".search-field");


async function checkWeather(city) {
    console.log(city)
    
  const response = await fetch(apiUrl + city +`&appid=${key}`);
  const data = await response.json();
    if(response.status==404){
      document.querySelector(".weather").style.display="none"
      document.querySelector(".humi-wind").style.display="none"
      document.querySelector(".error").style.display="block"
    }
    else{
  console.log(data)
  tem.innerHTML=Math.round((data.main).temp)+"°C";
  cityname.innerHTML=data.name;
  humi.innerHTML=(data.main).humidity+"%";
  wind.innerHTML=(data.wind).speed+" Km/Hr";

 switch(data.weather[0].main){
    case "Clouds":weather.src="./images/clouds.png" 
    break;
    case "Clear":weather.src="./images/clear.png" 
    break;
    case "Dizzle":weather.src="./images/drizzle.png" 
    break;
    case "Mist":weather.src="./images/mist.png" 
    break;
    case "Rain":weather.src="./images/rain.png" 
    break;
    case "Snow":weather.src="./images/snow.png" 
    break;
 }
 document.querySelector(".weather").style.display="flex"
  document.querySelector(".humi-wind").style.display="flex"
}
}


search.addEventListener('click',()=>{ 
 
    checkWeather(serchcity.value);
   
   
  
  
})


