import { View, Text, StyleSheet,  } from 'react-native'
import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHomeAlt, faSearch, faPlusSquare, faClapperboard, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const FooterComponent: FC = () => {
  return (
    <View style={styles.FooterContainer}>
      <FontAwesomeIcon icon={faHomeAlt} style={{ color: "white" }} size={25} />
      <FontAwesomeIcon icon={faSearch} style={{ color: "white" }} size={25} />
      <FontAwesomeIcon icon={faPlusSquare} style={{ color: "white" }} size={25} />
      <FontAwesomeIcon icon={faClapperboard} style={{ color: "white" }} size={25} />
      <FontAwesomeIcon icon={faUserCircle} style={{ color: "white" }} size={25} />
    </View>
  );
}

const styles = StyleSheet.create({
  FooterContainer: {
    paddingHorizontal: 15, 
    paddingTop: 15,
    paddingBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default FooterComponent