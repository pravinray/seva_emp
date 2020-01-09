import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Home from '../components/index'
import Contact from '../components/contacts/contacts'

const RootNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home
        },
        Contact: {
            screen: Contact
        }
    },
    {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#42f44b',
        },
        headerTintColor: '#FFFFFF',
    },
    tabBarOptions: {
        activeTintColor: '#42f44b',
        inactiveTintColor: 'gray',
    },
    headerStyle: {
        backgroundColor: "#eee",
        height: 160,
        headerTintColor: "#444"
    }
    }

);

export default createAppContainer(RootNavigator)