import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { OPEN_WEATHER_API_KEY } from './Config';

import WeatherData from './WeatherData';
import WeatherComponent from './WeatherComponent';

class MainScreen extends Component {
  state = {
    weatherIsLoaded: true,
    weather: new WeatherData(
      'Rain',
      10,
      13,
      90,
      5
    )
  }

  constructor(props) {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.weatherIsLoaded ?
          (<WeatherComponent weather={this.state.weather} />) :
          (<View style={styles.loadingContainer}><Text style={styles.loadingText}>Fetching The Weather</Text></View>)
        }
      </View>
    );
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error Gettig Weather Condtions'
        });
      }
    );
  }

  async getWeather(lat = 0, lon = 0) {
    try {
      var url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${OPEN_WEATHER_API_KEY}&units=metric`;
      var response = await fetch(url);
      var json = await response.json();
      this.setState({
        weatherIsLoaded: true,
        weather: new WeatherData(json.weather[0].main, json.main.temp_min, json.main.temp_max, json.main.humidity, json.wind.speed)
      });
    } catch (error) {
      console.log(error);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDE4'
  },
  loadingText: {
    fontSize: 30
  }
});

export default MainScreen;