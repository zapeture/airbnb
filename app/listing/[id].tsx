import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function Page() {
  const {id} = useLocalSearchParams<{id: string}>()
  return (
    <View>
      <Text>Listing :{id}</Text>
    </View>
  )
}
