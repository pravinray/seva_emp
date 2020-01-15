import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Config } from '../common/config'

export class Header extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.headerTitle}>
                    <Text style={styles.headerText}>{Config.settings.app_title} | {this.props.title} </Text>
                </View>
            </View>
        )
    }
}

export class ContactHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.Contactheader}>
                <Text style={styles.userProfile}>USER PROFILE</Text>
                <MaterialCommunityIcons 
                    onPress={() => this.props.navigation.navigate("Contact")} 
                    name="close" 
                    size={30}
                    style={styles.closeIcon} 
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginBottom: 5,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
        alignContent: 'center'
    },
    headerTitle: {
        flexDirection: 'row'
    },
    Contactheader: {
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
});