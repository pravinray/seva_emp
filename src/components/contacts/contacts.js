import React, {PureComponent} from 'react';
import {View, FlatList} from 'react-native';

import Header from '../../common/header';
import EmpItem from './employeeItem';
const empList = require('../../model/empList.json');

export default class Contact extends PureComponent {

  constructor(props) {
    super(props);
  }

  _onItemClick = (id) => {
    this.props.navigation.navigate('ContactDetails', {id})
  }

  render() {
    return (
      <View>
        <Header title="Contact" />
        <FlatList
          data={empList}
          renderItem={({item}) => <EmpItem onItemClick={() => this._onItemClick(item.id)} item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}