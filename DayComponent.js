import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { weatherConditions } from './WeatherConditions';

class DayComponent extends Component {
  constructor(props) {
    super();
    this.dayInfo = props.dayInfo;
  }

  render() {
    var tempText = this.dayInfo.min == this.dayInfo.max ? `${this.dayInfo.min}` : `${this.dayInfo.min}-${this.dayInfo.max}`;
    return (
      <View style={styles.dayContainer}>
        <Text style={styles.text}>
          {this.dayInfo.date.getDate().toString().padStart(2, "0")}.
          {(this.dayInfo.date.getMonth() + 1).toString().padStart(2, "0")}
        </Text>
        <MaterialCommunityIcons size={50} name={weatherConditions[this.dayInfo.type].icon} color={'#fff'}/>
        <Text style={styles.text}>{tempText}˚</Text>
        <Text style={styles.text}>{this.dayInfo.windSpeed} м.с.</Text> 
      </View>
    );
  }
}

var styles = StyleSheet.create({ 
  dayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 24,
    color: '#fff'
  },
});

export default DayComponent;