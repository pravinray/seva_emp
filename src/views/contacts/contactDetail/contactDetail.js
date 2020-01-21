import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {Config} from '../../../services/config';
import {globalStyles} from '../../../styles/global';

import PhoneGrid from '../../../components/phoneGrid';
import AddressGrid from '../../../components/addressGrid';
import EmailGrid from '../../../components/emailGrid';
import {ContactHeader} from '../../../components/header';

export default class ContactDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {item} = this.props.navigation.state.params;
    return (
      <ScrollView style={styles.container} onWillFocus={this._scrollToTop}>
        <ContactHeader navigation={this.props.navigation} />
        <ScrollView style={styles.body}>
          <View style={styles.profilePictureGrid}>
            <View style={styles.imageBorder}>
              <Image
                source={Config.images.profile_pic}
                style={styles.profilePicture}
              />
            </View>
          </View>
          <View style={styles.nameGrid}>
            <Text style={styles.userName}>
              {(item.first_name + ' ' + item.last_name).toUpperCase()}
            </Text>
            <Text style={styles.userPost}>{item.job_title}</Text>
          </View>
          <View style={styles.phoneGrid}>
            <Text style={{...globalStyles.boldText, ...styles.fieldMainTitle}}>
              Phone Number Details:
            </Text>
            <View style={globalStyles.horiZontalRow} />
            <PhoneGrid
              fieldTitle="Work Number: "
              fieldValue={
                item.contact_no.country_code + '-' + item.contact_no.work_number
              }
            />
            <PhoneGrid
              fieldTitle="Personal Number: "
              fieldValue={
                item.contact_no.country_code +
                '-' +
                item.contact_no.personal_number
              }
            />
          </View>
          <View style={styles.addressGrid}>
            <Text style={{...globalStyles.boldText, ...styles.fieldMainTitle}}>
              Address Details:
            </Text>
            <View style={globalStyles.horiZontalRow} />
            <AddressGrid
              fieldTitle="Permanent Address"
              fieldValue={item.address.permanent}
            />
            <AddressGrid
              fieldTitle="Temporary Address"
              fieldValue={item.address.temporary}
            />
          </View>
          <View style={styles.dobGrid}>
            <Text style={{...globalStyles.boldText, ...styles.fieldMainTitle}}>
              Date of Birth Details:
            </Text>
            <View style={globalStyles.horiZontalRow} />
            <View style={styles.fieldBox}>
              <Text style={styles.dobFieldTitle}>Date of Birth:</Text>
              <Text style={styles.dobFieldValue}>
                {item.date_of_birth.day} / {item.date_of_birth.month} /{' '}
                {item.date_of_birth.year}
              </Text>
            </View>
          </View>
          <View style={styles.emailGrid}>
            <Text style={{...globalStyles.boldText, ...styles.fieldMainTitle}}>
              Email Details:
            </Text>
            <View style={globalStyles.horiZontalRow} />
            <EmailGrid fieldValue={item.email[0]} />
            <EmailGrid fieldValue={item.email[1]} />
          </View>
        </ScrollView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 4,
  },
  profilePictureGrid: {
    marginTop: 25,
    height: 200,
    alignItems: 'center',
  },
  imageBorder: {
    height: 175,
    width: 175,
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 40,
    shadowOpacity: 1,
    elevation: 7,
    alignItems: 'center',
  },
  profilePicture: {
    height: 170,
    width: 170,
    borderRadius: 40,
    marginTop: 5,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
  },
  nameGrid: {
    height: 100,
    alignItems: 'center',
  },
  userName: {
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: -15,
  },
  userPost: {
    fontSize: 22,
    fontWeight: 'normal',
  },
  phoneGrid: {
    height: 150,
    backgroundColor: '#fff',
  },
  addressGrid: {
    height: 150,
    backgroundColor: '#fff',
  },
  dobGrid: {
    height: 120,
    backgroundColor: '#fff',
  },
  emailGrid: {
    height: 200,
    backgroundColor: '#fff',
  },
  fieldMainTitle: {
    padding: 10,
    fontSize: 20,
    alignSelf: 'flex-start',
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  },
  fieldBox: {
    flexDirection: 'row',
  },
  dobFieldTitle: {
    fontSize: 16,
    flexDirection: 'row',
    opacity: 0.5,
    paddingTop: 10,
    paddingLeft: 10,
    flex: 1,
  },
  dobFieldValue: {
    flex: 1,
    fontSize: 16,
    paddingTop: 10,
  },
});
