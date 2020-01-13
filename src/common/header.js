import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Config } from '../common/config'

export default function Header({ title }) {
    return (
        <View style={styles.header}>
            <View style={styles.headerTitle}>
                <Text style={styles.headerText}>{Config.settings.app_title} | {title} </Text>
            </View>
        </View>
    )
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
    }
});