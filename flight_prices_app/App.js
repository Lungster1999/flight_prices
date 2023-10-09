import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, FlatList } from 'react-native';
import SearchForm from './src/components/SearchForm';
import data_ from './src/components/data.json';
import FlightOptionItem from './src/components/FlightOptionItem';
import { useState } from 'react';
 

export default function App() {

  const [items,setItems] = useState([]);

  const onSearch = (data) =>{
    console.warn(data);

    // get data from backend
    setItems(data_);
  };



  return (
    <View style={styles.container}>
      <SafeAreaView>
        <SearchForm onSearch={onSearch}/>

        <FlatList
        data={items}
        renderItem={({item})=> <FlightOptionItem flight={item} />}
        />

        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    paddingVertical:50,
  },
});
