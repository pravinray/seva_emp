import React, {Component} from 'react';
import {View} from 'react-native';

import {Header} from '../../components/header';
import SearchBar from '../../components/searchBar';

export default class Contact extends Component {
  render() {
    return (
      <View>
        <Header title="Contact" />

        <SearchBar />
      </View>
    );
  }
}
