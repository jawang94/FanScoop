import React from 'react';
import { Platform } from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TabBarIcon2 from '../components/TabBarIcon2';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import RouteScreen from '../screens/RouteScreen';

const HomeStack = createStackNavigator({
    // Route: RouteScreen,
    Home: HomeScreen,
    Confirmation: ConfirmationScreen
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Trips',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-car` : 'md-car'}
        />
    )
};

const LinksStack = createStackNavigator({
    Links: LinksScreen
});

LinksStack.navigationOptions = {
    tabBarLabel: 'Community',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'}
        />
    )
};

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
    tabBarLabel: 'Account',
    tabBarIcon: ({ focused }) => (
        // <TabBarIcon
        // focused={focused}
        // name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
        // />
        <TabBarIcon2 focused={focused} />
    )
};

export default createBottomTabNavigator({
    HomeStack,
    LinksStack,
    SettingsStack
});
