import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { Header } from '../../common/header'

export default class Contact extends Component {
    render() {
        return (
            <View>
                <Header title="Contact" />
                <Text>Contact default page setup</Text>
            </View>
        )
    }
}