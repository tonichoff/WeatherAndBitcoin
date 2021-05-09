import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { IconButton, Colors } from 'react-native-paper';

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
    var button =
    (<View style={styles.buttonContainer}>
      <IconButton icon="back" color={Colors.white} size={30} onPress={() => {
        this.props.navigation.goBack();
      }}/>
    </View>);
    if (this.state.weather == null) {
      return (
        <View style={{flex: 1, justifyContent: 'flex-start', backgroundColor: this.state.backgroundColor}}>{button}</View>
      );
    }
    return (
      <View style={{flex: 1, backgroundColor: this.state.backgroundColor}}>
        {button}
        <View style={styles.daysContainer}>
          <View><DayComponent dayInfo={this.state.weather[0]}/></View>
          <View><DayComponent dayInfo={this.state.weather[1]}/></View>
          <View><DayComponent dayInfo={this.state.weather[2]}/></View>
          <View><DayComponent dayInfo={this.state.weather[3]}/></View>
          <View><DayComponent dayInfo={this.state.weather[4]}/></View>
          <View><DayComponent dayInfo={this.state.weather[5]}/></View>
          <View><DayComponent dayInfo={this.state.weather[6]}/></View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({ 
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  daysContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center'
  }
});

export default WeakScreen;