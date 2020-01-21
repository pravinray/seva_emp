import React, {Component} from 'react';
import {View, FlatList, ActivityIndicator, StyleSheet} from 'react-native';

import {Header} from '../../components/header';
import {SearchBar} from 'react-native-elements';
import EmpItem from './employeeItem';
const empList = require('../../services/empList.json');

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
    };
  }

  renderSeparator = () => {
    return <View style={styles.container} />;
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = empList.filter(item => {
      const itemData = `${item.first_name.toUpperCase()} ${item.last_name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  _onItemClick = id => {
    this.props.navigation.navigate('ContactDetails', {id});
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{flex: 1}}>
        <Header title="Contact" />
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <EmpItem
              onItemClick={() => this._onItemClick(item.id)}
              item={item}
            />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 1,
    width: '86%',
    backgroundColor: '#CED0CE',
    marginLeft: '14%',
  },
  loading: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  
});
