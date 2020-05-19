import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PayScreen from './screens/Pay';
import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="Wallet" component={WalletScreen}></Tab.Screen>
      <Tab.Screen name="Pay" component={PayScreen}></Tab.Screen>
    </Tab.Navigator>
  );
}