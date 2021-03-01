import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StudentNavigationDrawerHeader from './StudentDrawerHeader'
import StudentHomeTab from './StudentTabs/StudentHomeTab';
import StudentVacantPosition from './StudentTabs/StudentVacantPosition';
import StudentSidebarMenu from './StudentSidebarMenu';
import MainHomeScreen from './MainHomeScreen'
import StudentResume from './StudentTabs/StudentResume';
import StudentListOfCompanies from './StudentTabs/StudentListOfCompanies';
import { connect } from 'react-redux';
import { signOut } from '../../store/action';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const studentMainHomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={MainHomeScreen}
        options={{
          title: 'Home', headerLeft: () => (
            <StudentNavigationDrawerHeader navigationProps={navigation} />
          ), headerStyle: { backgroundColor: 'orange' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }
        }} />
    </Stack.Navigator>
  );
};

const studentVacantPositionStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Vacant Positions"
      screenOptions={{
        headerLeft: () => (<StudentNavigationDrawerHeader navigationProps={navigation} />),
        headerStyle: { backgroundColor: 'orange' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen name="Vacant Positions" component={StudentVacantPosition} options={{ title: 'Vacant Positions' }} />
    </Stack.Navigator>
  );
};

const studentResume = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="My Resume"
      screenOptions={{
        headerLeft: () => (<StudentNavigationDrawerHeader navigationProps={navigation} />),
        headerStyle: { backgroundColor: 'orange' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen name="My Resume" component={StudentResume} options={{ title: 'My Resume' }} />
    </Stack.Navigator>
  );
};

const studentListOfCompanies = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="List of Companies"
      screenOptions={{
        headerLeft: () => (<StudentNavigationDrawerHeader navigationProps={navigation} />),
        headerStyle: { backgroundColor: 'orange' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen name="List of Companies" component={StudentListOfCompanies} options={{ title: 'List of Companies' }} />
    </Stack.Navigator>
  );
};







const StudentDrawer = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        drawerToCSM: { props },
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: { marginVertical: 5, color: 'white' },
        labelStyle: {
          color: '#d8d8d8'
        },
      }} screenOptions={{ headerShown: false }} drawerContent={(props) => <StudentSidebarMenu {...props} />}>
      <Drawer.Screen name="Home" options={{ drawerLabel: 'Home' }} component={studentMainHomeStack} />
      <Drawer.Screen name="Vacant Positions" options={{ drawerLabel: 'Vacant Positions' }} component={studentVacantPositionStack} />
      <Drawer.Screen name="My Resume" options={{ drawerLabel: 'My Resume' }} component={studentResume} />
      <Drawer.Screen name="List of Companies" options={{ drawerLabel: 'List of Companies' }} component={studentListOfCompanies} />
    </Drawer.Navigator>
  );
};

const mapStateToProps = (state) => ({
  aut: state.aut,
  app: state.app,
})

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentDrawer);
