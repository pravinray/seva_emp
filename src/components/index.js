import React from 'react'
import { View, Text, Image } from 'react-native'

import { globalStyles } from '../styles/global'

import Header from '../common/header'

export default function Index() {
    return (
        <View>
            <Header title="Home" />
            <View style={globalStyles.container}>
                <Image source={require('../assets/seva.png')} />
            </View>
        </View>
    )
}
