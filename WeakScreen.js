import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { IconButton, Colors } from 'react-native-paper';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

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
    return (
      <View style={{flex: 1, backgroundColor: this.state.backgroundColor}}>
        <View style={styles.buttonContainer}>
          <IconButton icon="back" color={Colors.white} size={30} onPress={() => {
            this.props.navigation.goBack();
          }}/>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({ 
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});

export default WeakScreen;