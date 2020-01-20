import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
const empList = require('../../services/empList.json');

export default class EmployeeItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      job_title: '',
    };
  }

  render() {
    const {first_name, last_name, job_title} = this.props.item;
    return (
      <TouchableOpacity onPress={this.props.onItemClick}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/images/profile_pic.jpg')}
            style={styles.roundImage}
          />
          <View style={styles.itemList}>
            <Text style={{fontSize: 22}}>{first_name + ' ' + last_name}</Text>
            <Text style={{fontSize: 15}}>{job_title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#EBEBEB',
    marginVertical: 5,
    marginHorizontal: 15,
    padding: 5,
    borderRadius: 5,
  },
  itemList: {
    flex: 0.8,
    fontSize: 22,
    marginLeft: 20,
  },
  roundImage: {
    flex: 0.2,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
});
