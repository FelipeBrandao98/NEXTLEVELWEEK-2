import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import TeacherList from '../pages/TeacherList'
import Favorites from '../pages/Favorites'

const { Navigator, Screen } = createBottomTabNavigator()

const StudyTabs: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 25,
          height: 25,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#7693b8',
        activeTintColor: '#26324d'
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="ios-easel" size={size} color={color} />
            )
          }
        }}
      />
      <Screen
      options={{
        tabBarLabel: 'Favoritos',
        tabBarIcon: ({ color, size }) => {
          return (
            <Ionicons name="ios-heart" size={size} color={color} />
          )
        }
      }}
        name="Favorites"
        component={Favorites}
      />
    </Navigator>
  )
}

export default StudyTabs;