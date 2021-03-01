import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/screens/splash/splash';
import Login from './src/screens/auth/login';
import Register from './src/screens/auth/register';
import AdminDrawer from './src/components/AdminDrawer';
import CompanyDrawer from './src/components/CompanyDrawer';
import StudentDrawer from './src/components/StudentDrawer/index';


const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        <Stack.Screen name="AdminDrawer" component={AdminDrawer} options={{ headerShown: false }} />
        <Stack.Screen name="CompanyDrawer" component={CompanyDrawer} options={{ headerShown: false }} />
        <Stack.Screen name="StudentDrawer" component={StudentDrawer} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
