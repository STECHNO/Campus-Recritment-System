import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'native-base';



function Splash({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.heading} >
          <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'orange' }} >LOGIN</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'orange' }}>as</Text>
        </View>
        <View style={styles.btnContainer}>
          <Button bordered style={styles.btnStyle} onPress={() => {
            navigation.navigate('Auth', {
              screen: 'Login',
              params: { loginAs: 'ADMIN' }
            })
          }}>
            <Text>Admin</Text>
          </Button>
          <Button bordered style={styles.btnStyle} onPress={() => {
            navigation.navigate('Auth', {
              screen: 'Login',
              params: { loginAs: 'COMPANY' }
            })
          }}>
            <Text>Company</Text>
          </Button>
          <Button bordered style={styles.btnStyle} onPress={() => {
            navigation.navigate('Auth', {
              screen: 'Login',
              params: { loginAs: 'STUDENT' }
            })
          }}>
            <Text>Student</Text>
          </Button>

          {/* <Button bordered style={styles.btnStyle} onPress={} >
            <Text>Student</Text>
          </Button> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  heading: {
    flex: 1,
    alignItems: 'center',
    marginTop: 120
  },
  btnContainer: {
    flex: 3,
    alignItems: 'center',
    width: 250,
  },
  btnStyle: {
    width: '100%',
    justifyContent: 'center',
    marginTop: 10
  }
})

export default Splash;