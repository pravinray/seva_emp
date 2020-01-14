import React, {PureComponent} from 'react';
import {View, FlatList} from 'react-native';

import Header from '../../common/header';
import EmpItem from './empItem';
const empList = require('../../model/empList.json');

export default class Contact extends PureComponent {
  render() {
    return (
      <View>
        <Header title="Contact" />
        <FlatList
          data={empList}
          renderItem={({item}) => <EmpItem item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
