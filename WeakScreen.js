import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import DayComponent from './DayComponent';

class WeakScreen extends Component {
  state = {
    backgroundColor: null,
    weather: null
  }

  constructor(props) {
    super();
  }

  componentDidMount() {
    this.setState({
      backgroundColor: this.props.route.params.backgroundColor,
      weather: this.props.route.params.weakWeather
    });
  }

  render() {
    if (this.state.weather == null) {
      return (
        <View style={{flex: 1, justifyContent: 'flex-start', backgroundColor: this.state.backgroundColor}}></View>
      );
    }
    var days = [];
    for (var i = 0; i < 7; ++i) {
      days.push((<View><DayComponent dayInfo={this.state.weather[i]}/></View>))
    }
    return (
      <View style={{flex: 1,  backgroundColor: this.state.backgroundColor}}>
        <View style={styles.daysContainer}>
          {days}
          <View><Button styles={styles.backButton} title="Назад" onPress={() => {
            this.props.navigation.goBack();
          }}/></View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({ 
  daysContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
});

export default WeakScreen;