import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavigationDrawerHeader from '../AdminDrawer/AdminDrawerHeader'
import AdminHomeTab from './AdminTabs/AdminHomeTab';
import AdminListOfStudents from './AdminTabs/AdminListOfStudents';
import AdminSidebarMenu from './AdminSidebarMenu';
import AdminMainScreen from './AdminMainHomeScreen';
import AdminListOfCompanies from './AdminTabs/AdminListOfCompanies'
import { connect } from 'react-redux';
import { signOut } from '../../store/action'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const adminMainHomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={AdminMainScreen}
        options={{
          title: 'Home', headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ), headerStyle: { backgroundColor: 'orange' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }
        }} />
    </Stack.Navigator>
  );
};

const adminListOfStudents = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="ListOfStudents"
      screenOptions={{
        headerLeft: () => (<NavigationDrawerHeader navigationProps={navigation} />),
        headerStyle: { backgroundColor: 'orange' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen name="AdminListOfStudents" component={AdminListOfStudents} options={{ title: 'AdminListOfStudents' }} />
    </Stack.Navigator>
  );
};

const adminListOfCompanies = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="List of Companies"
      screenOptions={{
        headerLeft: () => (<NavigationDrawerHeader navigationProps={navigation} />),
        headerStyle: { backgroundColor: 'orange' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen name="List of Companies" component={AdminListOfCompanies} options={{ title: 'List of Companies' }} />
    </Stack.Navigator>
  );
};



const AdminDrawer = (props) => {
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
      }} screenOptions={{ headerShown: false }} drawerContent={(props) => <AdminSidebarMenu {...props} />}>
      <Drawer.Screen name="Home" options={{ drawerLabel: 'Home' }} component={adminMainHomeStack} />
      <Drawer.Screen name="Students" options={{ drawerLabel: 'Students' }} component={adminListOfStudents} />
      <Drawer.Screen name="Companies" options={{ drawerLabel: 'Companies' }} component={adminListOfCompanies} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminDrawer);
