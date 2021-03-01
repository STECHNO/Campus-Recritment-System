import React from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const StudentSidebarMenu = (props) => {
  return (
    <View style={styles.sideMenuContainer}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          style={{ marginTop: 350 }}
          label={({ color }) => <Text style={{ color: '#d8d8d8' }}>Sign Out</Text>}
          onPress={() => {
            console.log(props)
            props.navigation.toggleDrawer();
            Alert.alert(
              'Logout',
              'Are you sure? You want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    props.drawerToCSM.props.signOut();
                    setTimeout(() => {
                      props.navigation.replace('Splash');
                    }, 500);
                  },
                },
              ],
              { cancelable: false },
            );
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default StudentSidebarMenu;

const styles = StyleSheet.create({
  sideMenuContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
    paddingTop: 40,
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
  icon: {
    backgroundColor: '#C333',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 90,
    height: 90,
  },
});
