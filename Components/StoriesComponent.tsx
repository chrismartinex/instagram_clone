import { View, Text, ScrollView, StyleSheet, Image} from 'react-native'
import { FC } from 'react'
import disney from '../assets/disney.jpg'

const StoriesComponent: FC = () => {
  return (
    <ScrollView horizontal style={styles.ScrollStyle}>
      <Image source={disney} style={styles.ImageStyle} />
      <Image source={disney} style={styles.ImageStyle} />
      <Image source={disney} style={styles.ImageStyle} />
      <Image source={disney} style={styles.ImageStyle} />
      <Image source={disney} style={styles.ImageStyle} />
      <Image source={disney} style={styles.ImageStyle} />
      <Image source={disney} style={styles.ImageStyle} />
      <Image source={disney} style={styles.ImageStyle} />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ImageStyle: {
    height: 70,
    width: 70,
    borderRadius: 50,
    marginRight: 20
  },
  ScrollStyle: {
    paddingTop: 10,
    paddingBottom: 5
  }
})

export default StoriesComponent