import React, { Component } from 'react';
import Weather from './Components/Weather';
import Titles from './Components/Titles';
import Form from './Components/Form';
import "./App.css";

const API_KEY = 'f55a90e150347eb9731ecde7f000fc07';

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temp: undefined,
    temp_max: undefined,
    temp_min: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined

  }

  getWeather = async(e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);

    const data = await api_call.json();

    console.log(data);

    if(city && country) {

    this.setState ({
      city: data.name,
      country: data.sys.country,
      temp: data.main.temp,
      temp_max: data.main.temp_max,
      temp_min: data.main.temp_min,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ''
    })
  } else {
    this.setState({
      error:'Please input a city and country...'
    })

  }

}




  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                  </div>
                  <div className="col-xs-6 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                  city={this.state.city}
                  country={this.state.country}
                  temperature={this.state.temp}
                  temp_max={this.state.temp_max}
                  temp_min={this.state.temp_min}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    );
  }

};

export default App;
