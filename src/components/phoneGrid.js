import React, {Component} from 'react';
import {StyleSheet, View, Text, Linking} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class PhoneGrid extends Component {
  constructor(props) {
    super(props);
  }

  _makeCall = num => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${num}`;
    } else {
      phoneNumber = `telPrompt:${num}`;
    }
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (!supported) {
          Alert.alert('Phone number is not valid');
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch(err => console.log(err));
  };

  _makeMessage = num => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `sms:${num}`;
    } else {
      phoneNumber = `sms:${num}`;
    }
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (!supported) {
          Alert.alert('Phone number is not valid');
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <View style={styles.fieldBox}>
        <Text style={styles.fieldTitle}>{this.props.fieldTitle}</Text>
        <Text style={styles.fieldValue}>{this.props.fieldValue}</Text>
        <MaterialCommunityIcons
          onPress={() => this._makeCall(this.props.fieldValue)}
          style={styles.phoneIcon}
          name="phone"
          size={30}
        />
        <MaterialCommunityIcons
          onPress={() => this._makeMessage(this.props.fieldValue)}
          style={styles.messageIcon}
          name="message"
          size={30}
        />
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
  phoneIcon: {
    flex: 0.3,
    paddingTop: 10,
    alignContent: 'center',
    flexDirection: 'row-reverse',
    color: '#7276f2',
  },
  messageIcon: {
    flex: 0.3,
    paddingTop: 10,
    alignContent: 'center',
    flexDirection: 'row-reverse',
    color: '#8ab2f2',
  },
});
