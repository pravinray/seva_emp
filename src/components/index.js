import React from 'react'
import { View, Text, Image } from 'react-native'

import { globalStyles } from '../styles/global'

import Header from '../common/header'
import { Config } from '../common/config'

export default function Index() {
    return (
        <View>
            <Header title="Home" />
            <View style={globalStyles.container}>
                <Image source={Config.settings.app_logo} />
            </View>
        </View>
    )
}
