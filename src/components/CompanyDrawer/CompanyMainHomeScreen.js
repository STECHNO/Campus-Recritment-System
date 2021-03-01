import React from 'react';
import { SafeAreaView } from 'react-native';
import { Container, Tab, Tabs } from 'native-base';
import CompanyHomeTab from './CompanyTabs/CompanyHomeTab';
import CompanyJobPost from './CompanyTabs/CompanyJobPost';
import CompanyJobs from './CompanyTabs/CompanyJobs';
import CompanyListOfStudents from './CompanyTabs/CompanyListOfStudents';

function CompanyMainScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Tabs tabBarPosition='bottom' >
          <Tab heading="Home" tabStyle={{ backgroundColor: 'orange'}} textStyle={{color: '#fff'}} activeTabStyle={{ backgroundColor: 'orange'}}>
            <CompanyHomeTab navigation={navigation}/>
          </Tab>
          <Tab heading="Post Job" tabStyle={{ backgroundColor: 'orange'}} textStyle={{color: '#fff'}} activeTabStyle={{ backgroundColor: 'orange'}}>
            <CompanyJobPost navigation={navigation}/>
          </Tab>
          <Tab heading="Jobs" tabStyle={{ backgroundColor: 'orange'}} textStyle={{color: '#fff'}} activeTabStyle={{ backgroundColor: 'orange'}}>
            <CompanyJobs />
          </Tab>
          <Tab heading="Students" tabStyle={{ backgroundColor: 'orange'}} textStyle={{color: '#fff'}} activeTabStyle={{ backgroundColor: 'orange'}}>
            <CompanyListOfStudents />
          </Tab>
        </Tabs>
      </Container>
    </SafeAreaView>
  )
};

export default CompanyMainScreen;
