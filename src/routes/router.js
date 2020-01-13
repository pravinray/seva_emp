import React from 'react'

import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import Home from '../components/index'
import Contact from '../components/contacts/contacts'
import ContactDetails from '../components/contactDetail/contactDetail'


const RootNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='ios-home' color={tintColor} size={25} />
                )
            }
        },
        Contact: {
            screen: Contact,
            navigationOptions: {
                tabBarLabel: 'Contact',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='ios-contact' color={tintColor} size={25} />
                )
            }
        },
        ContactDetails: {
            screen: ContactDetails,
            navigationOptions: {
                tabBarLabel: 'Contact Details',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='ios-contact' color={tintColor} size={25} />
                )
            }
        }
    },
    {
        initialRouteName: 'Home'
    },
    {
    tabBarOptions: {
        activeTintColor: '#42f44b',
        inactiveTintColor: 'gray',
        }
    }

);

export default createAppContainer(RootNavigator)