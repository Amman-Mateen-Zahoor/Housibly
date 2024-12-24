import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../screens/Splash';


const Rootnavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>     
        <Stack.Screen name='splash' component={Splash}/> 
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Rootnavigation

const styles = StyleSheet.create({})