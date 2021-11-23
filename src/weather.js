import React,{useState,useEffect} from 'react';

function Weather ({getweather}){

	const[weatherstates,setweathermood] = useState("");

	const {
        temp,
        pressure,
        humidity,
        name,
        country,
        speed,
        sunset,
        weathermood,
        description
      } = getweather;

    useEffect(()=>{
    	
    	if(weathermood){

    		switch(weathermood){
    			case "Haze":
    			setweathermood('wi-day-fog');
    			break;
    			case "Mist":
          case "Fog":
    			setweathermood('wi-fog');
    			break;
    			case "Clouds":
    			setweathermood('wi-day-cloudy');
    			break;
    			case "Clear":
    			setweathermood('wi-day-sunny');
    			break;
    			case "Smoke":
    			setweathermood('wi-smoke');
    			break;
    			default:
    			setweathermood('wi-day-sunny');
    			break;
    		}

    	}


  },[weathermood])

    const timeset = new Date(sunset*1000);
    let format = timeset.getHours() >= 12 ? 'pm' : 'am';
    let textformat = timeset.getHours() >= 12 ? 'Sunset' : 'Sunrise';
	const newtime = `${timeset.getHours()} : ${timeset.getMinutes()} ${format}`;

	return (
    <>	
		<div className="weather-data-card">
        <div className="show-weather-icon">
          <i className={`wi ${weatherstates}`}></i>
        </div>
        <div className="weather-temp-info">
          <div className="weather-temp">
            <span className="temp">{temp}&deg;</span>
            <div className="temp-type">
              <span className="weather-type">{weathermood}</span>
              <span className="state">{name}, {country}</span>
            </div>
          </div>
          <div className="date">{new Date().toLocaleString()}</div>
        </div>
        <div className="weather-extra-info">
        	<ul>
        		<li>
        			<i className={"wi wi-sunset"}></i>
        			{newtime}
        			<span>{textformat}</span>
        		</li>
        		<li>
        			<i className={"wi wi-humidity"}></i>
        			{humidity}
        			<span>Humidity</span>
        		</li>
        		<li>
        			<i className={"wi wi-rain"}></i>
        			{pressure}
        			<span>Pressure</span>
        		</li>
        		<li>
        			<i className={"wi wi-strong-wind"}></i>
        			{speed}
        			<span>Speed</span>
        		</li>
        	</ul>
        </div>
        <div className="weather-description">
        	<p>This time weather very {description}.</p>
        </div>
      </div>
    </>
  );
}
export default Weather;