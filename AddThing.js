import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
export default class AddThing extends Component {
  _handleBackPress() {
    this.props.navigator.pop();
  }

  _handleNextPress(nextRoute) {
    this.props.navigator.push(nextRoute);
  }

  render() {
    return(
      <Text style={{marginTop: 200, alignSelf: 'center'}}>
        Thing to add
      </Text>
    );
  }
}
