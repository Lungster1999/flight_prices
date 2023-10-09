import { Text,View,StyleSheet,TextInput, Button,SafeAreaView } from "react-native";
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from '@expo/vector-icons';

export default function SearchForm({onSearch}) {
    const [from,setFrom] = useState('');
    const [to,setTo] = useState('');
    const [departDate,setDepartDate] = useState(new Date());
    const [returntDate,setReturntDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');
    const [date, setDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());

    const onSearchPress = () =>{
        onSearch({from,to,departDate,returnDate});
    }

    const onChangeDepart = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDepartDate(currentDate);
      };
      const onChangeReturn = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setReturntDate(currentDate);
      };

      const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
      };

      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };

      const showModeReturn = (currentModeReturn) => {
        setShow(true);
        setMode(currentModeReturn);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };

      const showDatepickerReturn = () => {
        showModeReturn('date');
      };


    return (
        <View style = {styles.card}>
            <Text style={styles.title}>Search the best prices</Text>
            <TextInput 
                value={from}
                onChangeText={setFrom} 
                placeholder="From" 
                style={styles.input}
                />
            <TextInput 
                value={to} 
                onChangeText={setTo}
                placeholder="To" 
                style={styles.input}
                />
           
            
           <View style={styles.datePicker}>
                <Feather name="calendar" size={26} style={{marginRight:10}}/>
                <Button style={styles.dateButton} onPress={showDatepicker} title= {departDate.toLocaleDateString()} />
                {show && (
                    <DateTimePicker
                    minimumDate={new Date()}
                    value={departDate}
                    mode={mode}
                    onChange={onChangeDepart}
                    />
                
                )}

                <Text style={{fontSize:30,color:'red',marginLeft:10,marginRight:10}}> | </Text>

                <Button style={styles.dateButton} onPress={showDatepicker} title= {departDate.toLocaleDateString()} />
               
        </View>


            <Button title="Search" onPress={onSearchPress} style={styles.search}/>
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
        borderColor:'darkblue',
        padding:10,
        marginVertical:5,
        borderRadius:5,
    },

    dateButton:{
        backgroundColor:'gray',
        borderRadius:20,
    },

    search:{
        marginVertical:20,
        color:'lime',
    },

    datePicker:{
        borderWidth:1,
        borderColor:'darkblue',
        padding:5,
        marginVertical:10,
        borderRadius:5,
        flexDirection:'row',
        color:'black',
        alignContent:"center",
        alignItems:'center',
        marginLeft:10,
    },
});