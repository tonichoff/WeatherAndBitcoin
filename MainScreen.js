import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { OPEN_WEATHER_API_KEY } from './Config';

import WeatherData from './WeatherData';
import WeatherComponent from './WeatherComponent';

class MainScreen extends Component {
  state = {
    weatherIsLoaded: false,
    weatherToday: null,
    weatherWeak: null,
  };

  constructor(props) {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.weatherIsLoaded ? (
          <WeatherComponent
            todayWeather={this.state.weatherToday}
            weakWeather={this.state.weatherWeak}
            navigation={this.props.navigation}
          />
        ) : (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Fetching The Weather</Text>
          </View>
        )}
      </View>
    );
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.getWeather(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        this.setState({
          error: 'Error Gettig Weather Condtions',
        });
      }
    );
  }

  async getWeather(lat = 0, lon = 0) {
    try {
      var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&exclude=minutely,hourly,alerts&units=metric`;
      var response = await fetch(url);
      var json = await response.json();
      console.log(json);
      var todayWeather = new WeatherData(
          json.current.weather[0].main,
          json.current.temp,
          json.current.temp,
          json.current.humidity,
          json.current.wind_speed
      );
      var weakWeather = [];
      for (var i = 0; i < 7; ++i) {
        weakWeather.push(new WeatherData(
          json.daily[i].weather[0].main,
          json.daily[i].temp.min,
          json.daily[i].temp.max,
          json.daily[i].humidity,
          json.daily[i].wind_speed
        ));
      }
      this.setState({
        weatherIsLoaded: true,
        weatherToday: todayWeather,
        weatherWeak: weakWeather
      });
    } catch (error) {
      console.log(error);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDE4',
  },
  loadingText: {
    fontSize: 30,
  },
});

export default MainScreen;
