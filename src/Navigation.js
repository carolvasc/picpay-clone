import React from 'react';
import { createBottomTabNavigation } from '@react-navigation/bottom-tabs';

import PayScreen from './screens/Pay';
import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';

const Tab = createBottomTabNavigation();

export default function Navigation() {
  return (
    <Tab.Navigation>
      <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="Wallet" component={WalletScreen}></Tab.Screen>
      <Tab.Screen name="Pay" component={PayScreen}></Tab.Screen>
    </Tab.Navigation>
  );
}