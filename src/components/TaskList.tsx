import{View,Text, FlatList, TextInput, Button, StyleSheet} from 'react-native';
import TaskListItem from './TaskListItem';
import { useState } from 'react';
import {Task} from '../models/Task';
import { TaskRealmContext } from '../providers/Realm';
export default function TaskList(){

    const {useRealm, useQuery} = TaskRealmContext;

    const realm = useRealm();
    const tasks = useQuery(Task);

    // const [tasks,setTasks] = useState([
    //     {id:"123",description:'First Task'},
    //     {id:"124",description:'Second Task'},
    //     {id:"125",description:'Third Task'},
    //     {id:"126",description:'Four Task'},
    // ]);
    const [newTask, setNewTask] = useState('');

    const createTask =() =>{
        realm.write(() =>{
            realm.create(Task,{description:newTask, user_id:'1235'})
        })
        //Need to be fixed in the next commit, the video not should this yet
        //setTasks([...tasks,{id:"0", description:newTask}])
        setNewTask('');
    }

    return(
        <View style={style.container}>
            <Text style={style.title}>TODO</Text>
            {/*The list of tasks */}
            <FlatList 
                data={tasks}                
                renderItem={({item}) =>(
                    <TaskListItem task={item}/>
                )}/>
            
            {/*New task input*/}
            <TextInput value={newTask} onChangeText={setNewTask} placeholder="New task" placeholderTextColor="gray" style={style.input}/>
            <Button title="Add Task" onPress={createTask}/>
        </View>
    )
}

const style = StyleSheet.create({
    container:{backgroundColor:'#101112', padding:10, borderRadius:5, gap:5},
    title:{color:'white', fontWeight:'bold', fontSize:20,marginVertical:10},
    input:{color:'white', padding:10, backgroundColor:'#1D2125', borderRadius:5}
})