import React from 'react';
import {View, Text, SafeAreaView, Button } from 'react-native';

export default function Home({navigation}) {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.welcome} onPress={() => alert('This is Home Screen')}>Welcome to Maybank Cafe</Text>
        </SafeAreaView>
    )
}

const styles = ({
    container: {
      flex: 1,
      backgroundColor: "rgb(255, 238, 0)",
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    welcome:
    {
      fontSize : 30,
      textAlign : 'center',
      margin : 10,
    },
  });
