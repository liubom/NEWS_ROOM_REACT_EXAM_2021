import {useEffect, useState} from "react";

import ('./Weather.css');

const Weather = (props) => {

    const [temp, setTemp] = useState('');

    useEffect(() => {
        fetch("http://api.weatherstack.com/current?access_key=c5a133241628e4a3a957a1b4821b5bcd&query=Sofia", {})
            .then(response => {
                return response.json();
            }).then(data => setTemp(data.current))
            .catch(err => {
                console.error(err);
            });
    }, []);

    let temperature = temp.temperature;
    let icon = temp.weather_icons;
    let time = temp.observation_time;

    if (temp) {
        return (
            <div className='weather'>
                <p className='weather_text'>Current Weather in Sofia</p>
                <div className='weather_details'>
                    <p className='weather_det_time'>Observation Time {time}</p>
                    <p className='weather_det_text'>Temperature: <span className='degree'>{temperature} &#8451;</span></p>
                    <p><img className='weather_img' src={icon[0]} alt={temperature}/></p>
                </div>
            </div>
        )
    }

    return (
        <>
        </>
    )

}

export default Weather;