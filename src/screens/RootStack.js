import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from "./TabScreen";
import {Chat} from "../screens/ChatScreen";

// import CameraStackScreen from "./CameraStack";
import RectangleScannerScreen from "../components/RectangleScannerScreen";
import MenuResultScreen from "./MenuResultScreen";

const Stack = createStackNavigator();
const CameraStack = createStackNavigator();
const ChatStack = createStackNavigator();

function RootStack(){
    return(
        <Stack.Navigator>
          <Stack.Screen
            name = "BottomTab"
            component = {TabNavigation}
            options={({navigation, route}) => ({
                headerShown: false,
              })}
           />
           <Stack.Screen
            name = "CameraScreens"
            component = {CameraStackScreen}
            options={({navigation, route}) => ({
                headerShown: false,
              })}
           /> 
           <Stack.Screen
            name = "ChatScreen"
            component = {ChatStackScreen}
            options = {({navigation, route}) => ({
              headerShown: true,
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontSize: 15
              },
              headerTitle: "챗봇 이름",
            })}
           />           

        </Stack.Navigator>
    )
}

const CameraStackScreen = () => {
    return(
      <Stack.Navigator>
        <CameraStack.Screen 
          name = 'RectangleScanner'
          options={({navigation, route}) => ({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
          })}
          component = {RectangleScannerScreen} />
        <CameraStack.Screen 
          name = 'MenuResult'
          options={({navigation, route}) => ({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
          })}
          component = {MenuResultScreen} />
      </Stack.Navigator>
    )
  }

  const ChatStackScreen = () => {
    return(
      <Stack.Navigator>
        <ChatStack.Screen 
          name = "Chat" 
          component={Chat}
          options = {(navigation, route)=> ({
            headerShown: false,
            headerTitle: '',
            tabBarStyle: {display: 'none'},
          })}
           />
      </Stack.Navigator>
    );
  };

export default RootStack;