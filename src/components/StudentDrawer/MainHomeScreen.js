import React from 'react';
import { SafeAreaView } from 'react-native';
import { Container, Tab, Tabs } from 'native-base';
import StudentHomeTab from './StudentTabs/StudentHomeTab/index';
import StudentVacantPosition from './StudentTabs/StudentVacantPosition/index';
import StudentResume from './StudentTabs/StudentResume/index'

function StudentMainScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Tabs tabBarPosition='bottom' >
          <Tab heading="Home" tabStyle={{ backgroundColor: 'orange'}} textStyle={{color: '#fff'}} activeTabStyle={{ backgroundColor: 'orange'}}>
            <StudentHomeTab navigation={navigation}/>
          </Tab>
          <Tab heading="Vacancies" tabStyle={{ backgroundColor: 'orange'}} textStyle={{color: '#fff'}} activeTabStyle={{ backgroundColor: 'orange'}}>
            <StudentVacantPosition navigation={navigation}/>
          </Tab>
          <Tab heading="My Resume" tabStyle={{ backgroundColor: 'orange'}} textStyle={{color: '#fff'}} activeTabStyle={{ backgroundColor: 'orange'}}>
            <StudentResume />
          </Tab>
        </Tabs>
      </Container>
    </SafeAreaView>
  )
};

export default StudentMainScreen;
