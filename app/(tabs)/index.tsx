import { Link } from 'expo-router'
import { View, Text } from 'react-native'
export default function Page() {
  return (
    <View>
      <Link href={"/(modals)/login"}>Login</Link>
      <Link href={"/(modals)/booking"}>Bookings</Link>
      <Link href={"/listing/434534"}>Listing Details page</Link>
    </View>
  )
}
