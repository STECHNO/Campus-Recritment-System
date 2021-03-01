import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CompanyNavigationDrawerHeader from './CompanyDrawerHeader'
// import CompanyHomeTab from './CompanyTabs/CompanyHomeTab';
import CompanyMainScreen from './CompanyMainHomeScreen';
import CompanyListOfStudents from './CompanyTabs/CompanyListOfStudents';
import CompanySidebarMenu from './CompanySidebarMenu';
import CompanyJobPost from './CompanyTabs/CompanyJobPost';
import CompanyJobs from './CompanyTabs/CompanyJobs';
import { connect } from 'react-redux';
import { signOut } from '../../store/action'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const companyHomeTab = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={CompanyMainScreen}
        options={{
          title: 'Home', headerLeft: () => (
            <CompanyNavigationDrawerHeader navigationProps={navigation} />
          ), headerStyle: { backgroundColor: 'orange' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }
        }} />
    </Stack.Navigator>
  );
};

const companyListOfStudentsStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Students"
      screenOptions={{
        headerLeft: () => (<CompanyNavigationDrawerHeader navigationProps={navigation} />),
        headerStyle: { backgroundColor: 'orange' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen name="Students" component={CompanyListOfStudents} options={{ title: 'Students' }} />
    </Stack.Navigator>
  );
};


const postJob = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Post Job"
      screenOptions={{
        headerLeft: () => (<CompanyNavigationDrawerHeader navigationProps={navigation} />),
        headerStyle: { backgroundColor: 'orange' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen name="Post Job" component={CompanyJobPost} options={{ title: 'Post Job' }} />
    </Stack.Navigator>
  );
};

const companyJobs = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="List of Jobs"
      screenOptions={{
        headerLeft: () => (<CompanyNavigationDrawerHeader navigationProps={navigation} />),
        headerStyle: { backgroundColor: 'orange' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen name="List of Jobs" component={CompanyJobs} options={{ title: 'List of Jobs' }} />
    </Stack.Navigator>
  );
};






const CompanyDrawer = (props) => {
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
      }} screenOptions={{ headerShown: false }} drawerContent={(props) => <CompanySidebarMenu {...props} />}>
      <Drawer.Screen name="Home" options={{ drawerLabel: 'Home' }} component={companyHomeTab} />
      <Drawer.Screen name="Students" options={{ drawerLabel: 'Students' }} component={companyListOfStudentsStack} />
      <Drawer.Screen name="Post Job" options={{ drawerLabel: 'Post Job' }} component={postJob} />
      <Drawer.Screen name="List of Jobs" options={{ drawerLabel: 'List of Jobs' }} component={companyJobs} />
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

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDrawer);
