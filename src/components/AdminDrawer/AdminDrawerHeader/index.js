import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import { Icon } from 'native-base';

const NavigationDrawerHeader = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
          <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: '#fff', paddingLeft: 15, fontSize: 30}}/>
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;
