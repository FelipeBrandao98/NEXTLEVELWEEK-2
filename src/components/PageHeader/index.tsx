import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BorderlessButton } from 'react-native-gesture-handler'

import BackIcon from '../../assets/images/icons/back.png'
import LogoImg from '../../assets/images/logo.png'

import styles from './styles'

interface PageHeaderProps {
  title: string
  headerRight?: ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight ,children }) => {
  const { navigate } = useNavigation()

  function handleGoBack() {
    navigate('Landing')
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={BackIcon} resizeMode="contain"/>
        </BorderlessButton>

        <Image source={LogoImg} resizeMode="contain"/>
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>
      {children}
    </View>
  )
}

export default PageHeader;