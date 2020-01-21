import React, {Component} from 'react';
import {StyleSheet, View, Text, Linking} from 'react-native';

export default class AddressGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.fieldBox}>
        <Text style={styles.fieldTitle}>{this.props.fieldTitle}</Text>
        <Text style={styles.fieldValue}>{this.props.fieldValue}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fieldBox: {
    flexDirection: 'row',
  },
  fieldTitle: {
    fontSize: 16,
    flexDirection: 'row',
    opacity: 0.5,
    paddingTop: 10,
    paddingLeft: 10,
    flex: 1,
  },
  fieldValue: {
    flex: 1,
    fontSize: 16,
    paddingTop: 10,
  },
});
