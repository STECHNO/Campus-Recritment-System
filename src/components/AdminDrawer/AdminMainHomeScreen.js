import React from 'react';
import { SafeAreaView } from 'react-native';
import { Container, Tab, Tabs } from 'native-base';
import AdminHomeTab from './AdminTabs/AdminHomeTab/index';
import AdminListOfStudents from './AdminTabs/AdminListOfStudents/index';
import AdminJobs from './AdminJobs';

function AdminMainScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Tabs tabBarPosition='bottom' >
          <Tab heading="Home" tabStyle={{ backgroundColor: 'orange'}} textStyle={{color: '#fff'}} activeTabStyle={{ backgroundColor: 'orange'}}>
            <AdminHomeTab navigation={navigation}/>
          </Tab>
          <Tab heading="Students" tabStyle={{ backgroundColor: 'orange'}} textStyle={{color: '#fff'}} activeTabStyle={{ backgroundColor: 'orange'}}>
            <AdminListOfStudents navigation={navigation}/>
          </Tab>
          <Tab heading="Jobs" tabStyle={{ backgroundColor: 'orange'}} textStyle={{color: '#fff'}} activeTabStyle={{ backgroundColor: 'orange'}}>
            <AdminJobs />
          </Tab>
        </Tabs>
      </Container>
    </SafeAreaView>
  )
};

export default AdminMainScreen;
