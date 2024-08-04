import {View,Text, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default function TaskListItem(){

    return(
        <View style={styles.container}>
            <Text style={styles.text}> First Task</Text>
            <AntDesign name="close" size={16} color="gray" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
            backgroundColor:'1D125',
            padding:15,
            borderRadius:5,
            flexDirection:'row',
            justifyContent:'space-between',
        },
    text:{
        color:'white',
        fontSize:16,
    }
})