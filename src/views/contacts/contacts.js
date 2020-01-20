import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';

import {Header} from '../../components/header';
import EmpItem from './employeeItem';
import {SearchBar} from '../../components/searchBar';
const empList = require('../../services/empList.json');

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  _onItemClick = id => {
    this.props.navigation.navigate('ContactDetails', {id});
  };

  render() {
    return (
      <View>
        <Header title="Contact" />
        <SearchBar />
        <FlatList
          data={empList}
          renderItem={({item}) => (
            <EmpItem
              onItemClick={() => this._onItemClick(item.id)}
              item={item}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
