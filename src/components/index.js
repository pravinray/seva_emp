import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

import { globalStyles } from '../styles/global'

import { Header } from '../common/header'
import { Config } from '../common/config'

export default class Index extends Component {
    render() {
        return (
            <View>
                <Header title="Home" />
                <View style={globalStyles.container}>
                    <Image source={Config.settings.app_logo} />
                </View>
            </View>
        )
    }
}
