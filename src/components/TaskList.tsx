import{View,Text, FlatList} from 'react-native';
import TaskListItem from './TaskListItem';
import { useState } from 'react';

export default function TaskList(){
    const [tasks,setTasks] = useState([
        {description:'First Task'},
        {description:'Second Task'},
        {description:'Third Task'},
        {description:'Four Task'},
    ]);

    return(
        <View style={{backgroundColor:'#101112', padding:10, borderRadius:5}}>
            <Text style={{color:'white', fontWeight:'bold', fontSize:20,marginVertical:10}}>TODO</Text>
            {/*The list of tasks */}
            <FlatList 
                data={tasks}
                renderItem={({item}) =>(
                    <TaskListItem task={item}/>
                )}/>
            
            {/*New task input*/}
        </View>
    )
}