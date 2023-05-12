import { View, Text, StyleSheet } from 'react-native'
import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { useFonts, GrandHotel_400Regular } from '@expo-google-fonts/grand-hotel'

const NavBarComponent: FC = () => {
    const [fontsLoaded] = useFonts({
        GrandHotel_400Regular
    })

    if(!fontsLoaded){
        return null
    }

  return (
    <View style={ styles.HeaderContainer }>
      <View style={{ paddingRight: 100 }}>
          <Text style={[ styles.WhiteText, styles.HeaderText, { fontFamily: 'GrandHotel_400Regular'} ]} >Instagram</Text>
      </View>
      <View style={ styles.CenterMain }>
          <FontAwesomeIcon icon={faHeart} style={{ color: 'white', marginRight: 25 }} size={25} />
          <FontAwesomeIcon icon={faPaperPlane} style={{ color: 'white', marginRight: 25 }} size={25} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    WhiteText: {
        color: 'white'
    },
    HeaderContainer: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    HeaderText: {
        fontSize: 30
    },
    CenterMain: {
        flexDirection: 'row'
    }
})

export default NavBarComponent