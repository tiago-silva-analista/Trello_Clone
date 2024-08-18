import {View,Text} from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

const TaskDetails = () => {

    const {id} = useLocalSearchParams();
    return(
        <View style={{padding:10}}>
            <Stack.Screen options={{title:'Task Details'}} />
            <Text style={{color: 'white', fontSize:20}}>ID: {id}</Text>
        </View>
    )
}

export default TaskDetails;