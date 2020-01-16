import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default class SearchBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={this.props.onChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  input: {
    height: 35,
    flex: 1,
    paddingHorizontal: 1,
    backgroundColor: 'white',
    borderRadius: 4,
  },
});
