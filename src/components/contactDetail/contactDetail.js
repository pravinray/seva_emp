import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, Linking, Platform, Alert } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Config } from '../../common/config'
import { ScrollView } from 'react-native-gesture-handler'
import { globalStyles } from '../../styles/global'

class ContactDetails extends Component {

    makeCall = (num) => {
        let phoneNumber = ''
        if (Platform.OS === 'android') {
            phoneNumber = `tel:${num}`
        } else {
            phoneNumber = `telPrompt:${num}`
        }
        Linking.canOpenURL(phoneNumber)
            .then(supported => {
                if (!supported) {
                    Alert.alert("Phone number is not valid")
                } else {
                    return Linking.openURL(phoneNumber)
                }
            })
            .catch(err => console.log(err))
    }
    makeMessage = (num) => {
        let phoneNumber = ''
        if (Platform.OS === 'android') {
            phoneNumber = `sms:${num}`
        } else {
            phoneNumber = `sms:${num}`
        }
        Linking.canOpenURL(phoneNumber)
            .then(supported => {
                if (!supported) {
                    Alert.alert("Phone number is not valid")
                } else {
                    return Linking.openURL(phoneNumber)
                }
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.userProfile}>USER PROFILE</Text>
                    <MaterialCommunityIcons name="close" size={30} style={styles.closeIcon} />
                </View>
                <ScrollView style={styles.body}>
                    <View style={styles.profilePictureGrid}>
                        <View style={styles.imageBorder}>
                            <Image
                                source={Config.settings.app_logo}
                                style={styles.profilePicture}
                            />
                        </View>
                    </View>
                    <View style={styles.nameGrid}>
                        <Text style={styles.userName}>PRADIP DHAKAL</Text>
                        <Text style={styles.userPost}>Developer</Text>
                    </View>
                    <View style={styles.phoneGrid}>
                        <Text style={{ ...globalStyles.boldText, ...styles.fieldMainTitle }}>Phone Number Details:</Text>
                        <View style={globalStyles.horiZontalRow} />
                        <View style={styles.fieldBox}>
                            <Text style={styles.fieldTitle}>Work Number:</Text>
                            <Text style={styles.fieldValue}>+977-9846751280</Text>
                            <MaterialCommunityIcons onPress={() => this.makeCall('9846751280')} style={styles.phoneIcon} name="phone" size={30} />
                            <MaterialCommunityIcons onPress={() => this.makeMessage('9846751280')} style={styles.messageIcon} name="message" size={30} />
                        </View>
                        <View style={styles.fieldBox}>
                            <Text style={styles.fieldTitle}>Personal Number:</Text>
                            <Text style={styles.fieldValue}>+977-9846901138</Text>
                            <MaterialCommunityIcons onPress={() => this.makeCall('9846901138')} style={styles.phoneIcon} name="phone" size={30} />
                            <MaterialCommunityIcons onPress={() => this.makeMessage('9846901138')} style={styles.messageIcon} name="message" size={30} />
                        </View>
                    </View>
                    <View style={styles.addressGrid}>
                        <Text style={{ ...globalStyles.boldText, ...styles.fieldMainTitle }}>Address Details:</Text>
                        <View style={globalStyles.horiZontalRow} />
                        <View style={styles.fieldBox}>
                            <Text style={styles.fieldTitle}>Permanent Address:</Text>
                            <Text style={styles.fieldValue}>Pokhara, Nepal</Text>
                        </View>
                        <View style={styles.fieldBox}>
                            <Text style={styles.fieldTitle}>Temporary Address:</Text>
                            <Text style={styles.fieldValue}>Chabahil, Kathmandu</Text>
                        </View>
                    </View>
                    <View style={styles.dobGrid}>
                        <Text style={{ ...globalStyles.boldText, ...styles.fieldMainTitle }}>Date of Birth Details:</Text>
                        <View style={globalStyles.horiZontalRow} />
                        <View style={styles.fieldBox}>
                            <Text style={styles.fieldTitle}>Date of Birth:</Text>
                            <Text style={styles.fieldValue}>23 / Jun / 1998</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 15,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fcfcfc',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
    },
    userProfile: {
        flex: 3,
        fontSize: 20,
        paddingLeft: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    closeIcon: {
        flex: 0.5,
        alignContent: 'center',
        flexDirection: 'row-reverse',
    },
    body: {
        flex: 4,
    },
    profilePictureGrid: {
        marginTop: 25,
        height: 200,
        alignItems: 'center',
    },
    nameGrid: {
        height: 100,
        alignItems: 'center'
    },
    userName: {
        fontSize: 27,
        fontWeight: 'bold',
        marginTop: -15
    },
    userPost: {
        fontSize: 22,
        fontWeight: 'normal'
    },

    phoneGrid: {
        height: 180,
        backgroundColor: '#fff',
    },

    addressGrid: {
        height: 180,
        backgroundColor: 'white',
    },

    dobGrid: {
        height: 200,
        backgroundColor: '#fff',
    },

    imageBorder: {
        height: 160,
        width: 160,
        borderRadius: 80,
        shadowOpacity: 1,
        elevation: 7,
        alignItems: 'center',
    },
    profilePicture: {
        height: 150,
        width: 150,
        borderRadius: 75,
        marginTop: 5,
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#fff'
    },
    fieldMainTitle: {
        padding: 10,
        fontSize: 20,
    },
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
        color: '#7276f2'
    },
    messageIcon: {
        flex: 0.3,
        paddingTop: 10,
        alignContent: 'center',
        flexDirection: 'row-reverse',
        color: '#8ab2f2'
    }
})

export default ContactDetails;