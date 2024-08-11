import { View,StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native"
import TaskList from "./TaskList";
import {LinearGradient} from 'expo-linear-gradient'

export default function TaskBoard() {
    return (
        <View style={{padding:10, flex:1}}>
            <LinearGradient
            colors={['#8711c1','#2472fc']}
            style={StyleSheet.absoluteFill}
            />
            <SafeAreaView style={styles.container}>
            <TaskList />
            </SafeAreaView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingTop:Platform.OS==="android"? StatusBar.currentHeight:0,
    },
  });
  