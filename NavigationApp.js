import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import language from './components/language/index';
import qrcode from './components/qrcode/index';
import steps from './components/steps/index';
import qualify from './components/qualify/index';

export const NavigationApp = StackNavigator({
	language: { screen: language },
	qrcode: { screen: qrcode },
	steps: { screen: steps },
	qualify: { screen: qualify },
},


	{ navigationOptions: {
        //header: null
    }}
);