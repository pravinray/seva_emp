import React, { Component } from 'react'
import { StyleSheet, View, Text, Linking, ToastAndroid, Clipboard } from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class EmailGrid extends Component {
    constructor(props) {
        super(props)
    }

    _makeMail = (email) => {
        let emailAddress = `mailto:${email}`
        Linking.canOpenURL(emailAddress)
            .then(supported => {
                if (!supported) {
                    Alert.alert("Email address is not valid")
                } else {
                    return Linking.openURL(emailAddress)
                }
            })
            .catch(err => console.log(err))
    }
    _CopyToClipboard = (str) => {
        Clipboard.setString(`${str}`)
        ToastAndroid.show('Copied!', ToastAndroid.SHORT);
    }

    render() {
        return (
            <View style={styles.fieldBox}>
                <Text style={styles.fieldTitle}>{this.props.fieldValue}</Text>
                <MaterialCommunityIcons onPress={() => this._CopyToClipboard(this.props.fieldValue)} style={styles.messageIcon} name="content-copy" size={30} />
                <MaterialCommunityIcons onPress={() => this._makeMail(this.props.fieldValue)} style={styles.messageIcon} name="email" size={30} />
            </View>
        )
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
    messageIcon: {
        flex: 0.3,
        paddingTop: 10,
        alignContent: 'center',
        flexDirection: 'row-reverse',
        color: '#8ab2f2'
    }
})