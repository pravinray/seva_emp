import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';

import {Header} from '../../components/header';
import EmpItem from './employeeItem';
const empList = require('../../services/empList.json');

export default class Contact extends Component {

  constructor(props) {
    super(props);
  }

  _onItemClick = (item) => {
    this.props.navigation.navigate('ContactDetails', {item})
  }

  render() {
    return (
      <View>
         <Header title="Contact" />
        <FlatList
          data={empList}
          renderItem={({item}) => <EmpItem onItemClick={() => this._onItemClick(item)} item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}