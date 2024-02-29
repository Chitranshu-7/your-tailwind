import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text className='text-cyan-300'>Open up App.js to start working on your app!</Text>
      <View>
        <Text className="text-teal-700">Chitranshu</Text>
      </View>
      <StatusBar style="auto" />



   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
