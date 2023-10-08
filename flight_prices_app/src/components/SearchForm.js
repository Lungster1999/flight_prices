import { Text,View,StyleSheet,TextInput, Button } from "react-native";
import { useState } from 'react';

export default function SearchForm() {
    const [from,setFrom] = useState('');
    const [to,setTo] = useState('');

    const onSearchPress = () =>{
        console.warn('Searching for: ',setFrom)
    }


    return (
        <View style = {styles.card}>
            <Text style={styles.title}>Search the best prices</Text>
            <TextInput value={setFrom} placeholder="From" style={styles.input}/>
            <TextInput value={setTo} placeholder="To" style={styles.input}/>

            <Button title="Search" onPress={onSearchPress}/>
        </View>
        
    
    );
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'lightgray',
        margin:10,
        padding:15,
        borderRadius:10,

        //Shaddows
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:4,
        },
        shadowOpacity:0.5,
        shadowRadius:4.65,
        elevation:20,
    },

    title:{
        alignSelf:'center',
        fontWeight:'600',
        fontSize:16,
        marginVertical:10,
    },
    input:{
        borderWidth:1,
        borderColor:'gainsboro',
        padding:10,
        marginVertical:5,
        borderRadius:5,
    }

});