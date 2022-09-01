import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import Home from './screens/Home';
import About from './screens/About';
import Blog from './screens/Blog';

const Tab = createBottomTabNavigator();

const StackNavigator = () =>
{
    return(
            <Tab.Navigator initialRouteName={'Critic'}
            tabBarOptions={{
               activeTintColor: '#fff',
               inactiveTintColor: 'lightgray',
               activeBackgroundColor: '#454545',
               inactiveBackgroundColor: '#000',
                   style: {
                         backgroundColor:  '#000000',
                         paddingBottom: 5,
                   }
            }}>
            <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="About" component={About} />
                <Tab.Screen name="Blog" component={Blog} />
            </Tab.Navigator>
    )
}
export default StackNavigator;

