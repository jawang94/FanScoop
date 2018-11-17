import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const TabBarIcon2 = props => (
    <MaterialCommunityIcons
        name="account"
        size={26}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
);

export default TabBarIcon2;
