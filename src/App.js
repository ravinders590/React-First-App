import React,{useState,useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './weather';

function App() {

  const [myweather, setweather] = useState('delhi');
  const [getweather, getweatherDetails] = useState({});

  const getweatherinfo = async (res) => {
    try{
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${myweather}&lang=en&units=metric&appid=617249fd23c2ea1af450b8c6807271b7`;
     
      
      const res = await fetch(url);
      const data = await res.json();

      const {temp,pressure,humidity} = data.main;
      const {lon,lat} = data.coord;
      const {speed} = data.wind;
      const {country,sunset} = data.sys;
      const {main:weathermood,description} = data.weather[0];
      const {name} = data;
      const myweatherdata = {
        temp,
        pressure,
        humidity,
        name,
        country,
        speed,
        sunset,
        description,
        weathermood
      }
      getweatherDetails(myweatherdata);
        let zoom = 10;
        let longnitude = parseInt(lon);
        let latitude = parseInt(lat);
       let map_url = `https://tile.openweathermap.org/map/clouds/${zoom}/${longnitude}/${latitude}.png?appid=617249fd23c2ea1af450b8c6807271b7`;
       let map_res = await fetch(map_url);
      const map_data = await map_res.json();

      console.log(map_data);

    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    getweatherinfo();
  },[])

  return (
    <>
    <div className="weather-forcast" style={{backgroundImage:`url(bg.jpg)`}}>
        <div className="weather-forcast-info">
          <div className="search">
            <input type="text" id="search" placeholder="Search..." value={myweather} onChange={(e)=>setweather(e.target.value)} className="form-control" />
            <button type="button" className="search-btn btn btn-primary" onClick={getweatherinfo}>Search</button>
          </div>
          <Weather getweather = {getweather} />
        </div>
      </div>
      
    </>
  );
}

export default App;
