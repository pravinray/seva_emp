import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default class EmpItem extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {first_name, last_name, job_title} = this.props.item;
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <Image
            source={require('../../assets/seva.png')}
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