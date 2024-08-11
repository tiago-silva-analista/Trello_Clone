import{View,Text, FlatList, TextInput, Button, StyleSheet} from 'react-native';
import TaskListItem from './TaskListItem';
import { useState } from 'react';

export default function TaskList(){
    const [tasks,setTasks] = useState([
        {description:'First Task'},
        {description:'Second Task'},
        {description:'Third Task'},
        {description:'Four Task'},
    ]);
    const [newTask, setNewTask] = useState('');

    const createTask =() =>{

        setTasks([...tasks,{description:newTask}])
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