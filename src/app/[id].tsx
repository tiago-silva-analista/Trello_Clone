import {View,Text, TextInput} from 'react-native'
import { Stack, useLocalSearchParams } from 'expo-router';
import { TaskRealmContext } from '../providers/Realm';
import { Task } from '../models/Task';
import { BSON } from 'realm';
import { getObjectForPrimaryKey } from '@realm/react/dist/helpers';
import { useState } from 'react';
import { useRealm, useQuery, useObject } from '@realm/react';
const TaskDetails = () => {

    const {id} = useLocalSearchParams();
    const realm = useRealm();
    const task = useObject<Task>(Task, new BSON.ObjectID(id as string));

    const [updatedDescription, setUpdatedDescription] = useState(task.description);

    const updateDescription = () => {
        if(!task)
        return;

        realm.write(() =>{
            task.description = updatedDescription;
        })
    }
    //const task = realm.objectForPrimaryKey(Task,new BSON.ObjectID(id));
    //const task = useObject<Task>(Task,new BSON.ObjectID(id as string));

    if(!task) { return <Text>Not Found.</Text>}
    return(
        <View style={{padding:10}}>
            <Stack.Screen options={{title:'Task Details'}} />
            <Text style={{color: 'white', fontSize:20}}>ID: {id}</Text>
            <TextInput style={{color: 'white', fontSize:20}} value={updatedDescription}
            onChangeText={setUpdatedDescription}
            onEndEditing={updateDescription} />
        </View>
    )
}

export default TaskDetails;