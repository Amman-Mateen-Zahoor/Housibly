import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import TestScreen from '../screens/BannerPractice';

const Stack = createNativeStackNavigator();

const Rootnavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>     
        <Stack.Screen name='splash' component={Splash}/> 
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name ='test' component={TestScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Rootnavigation

const styles = StyleSheet.create({})