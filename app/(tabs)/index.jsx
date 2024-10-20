import { View, Text } from 'react-native'
import React from 'react'
import Login from '../(modals)/login'
import {Link} from 'expo-router'
const Explore = () => {
  return (
    <View>
     <Link href="/(modals)/signUp">
          <Text>Sign in</Text>
        </Link>
        <Link href="/(modals)/login">
          <Text>Sign in</Text>
        </Link>
      <Text>Explore</Text>
    </View>
  )
}

export default Explore