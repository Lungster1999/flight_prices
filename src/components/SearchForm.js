import { Text,View,StyleSheet } from "react-native";

export default function SearchForm() {

    return (
    <View style={styles.card}>
        <Text>Hey</Text>;
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
        shadowOpacity:0.3,
        shadowRadius:4.65,
        elevation:8,
    },
});