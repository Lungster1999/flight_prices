import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import SearchForm from './src/components/SearchForm';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <SearchForm />
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical:50,
  },
});
