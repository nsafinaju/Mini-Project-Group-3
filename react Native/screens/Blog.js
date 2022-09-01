import React from 'react';
import { Text, SafeAreaView } from 'react-native';

export default function About({navigation}) {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.welcome} onPress={() => navigation.navigate('Home')}>Maybank Blog</Text>
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
