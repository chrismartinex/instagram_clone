import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavBarComponent from './Components/NavBarComponent';
import PostComponent from './Components/PostComponent';
import FooterComponent from './Components/FooterComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <NavBarComponent />
      <PostComponent />
      <FooterComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
