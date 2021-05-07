import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton, Colors } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { weatherConditions } from './WeatherConditions';
import WeatherData from './WeatherData';

class WeatherComponent extends Component {  

  constructor(props) {
    super();
    this.todayWeather = props.todayWeather;
    this.weakWeather = props.weakWeather;
  }

  render() {
    var tempLabel = this.todayWeather.min == this.todayWeather.max ? `${this.todayWeather.min}` : `${this.todayWeather.min}-${this.todayWeather.max}`;
    return (
      <View style={[ styles.weatherContainer, { backgroundColor: weatherConditions[this.todayWeather.type].color } ]}>
        <View style={styles.buttonContainer}>
          <IconButton icon="calendar" color={Colors.white} size={30} onPress={() => {
            this.props.navigation.navigate("WeakScreen", {
              backgroundColor: weatherConditions[this.todayWeather.type].color,
              weakWeather: this.weakWeather,
            });
          }}/>
        </View>
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons size={72} name={weatherConditions[this.todayWeather.type].icon} color={'#fff'}/>
          <Text style={styles.tempText}>{tempLabel}˚</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{weatherConditions[this.todayWeather.type].title}</Text>
          <Text style={styles.subtitle}>{weatherConditions[this.todayWeather.type].subtitle}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tempText: {
    fontSize: 72,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 60,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});

export default WeatherComponent;