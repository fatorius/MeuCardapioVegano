import React from 'react';

import { MMKVLoader } from "react-native-mmkv-storage";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstLaunch from "./firstLaunch";
import HomeScreen from "./homeScreen";
import InsertUsername from './createUser/insertUsername';
import InsertTimeToCook from './createUser/insertTimeToCook';
import InsertPrice from './createUser/insertPrice';

const MMKV = new MMKVLoader().initialize();
const Stack = createNativeStackNavigator();

const App = () => {
  let hasAccount = MMKV.getBool("hasAccount");

  let initialScreen = "Home";

  if (!hasAccount){
    initialScreen = "Welcome";
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialScreen}>
        <Stack.Screen name="Welcome" component={FirstLaunch} options={stackScreenOptions}/>
        <Stack.Screen name="Home" component={HomeScreen} options={stackScreenOptions}/>
        <Stack.Screen name="Start1" component={InsertUsername} options={stackScreenOptions}/>
        <Stack.Screen name="Start2" component={InsertTimeToCook} options={stackScreenOptions}/>
        <Stack.Screen name="Start3" component={InsertPrice} options={stackScreenOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

const stackScreenOptions = {
  title: "",
  headerStyle: {
    backgroundColor: "black"
  }
}

export default App;
