import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import TaskListItem from './src/components/TaskListItem';
import { Platform } from 'expo-modules-core';
import TaskList from './src/components/TaskList';
import TaskBoard from './src/components/TaskBoard';

export default function App() {
  return (
    <View style={styles.container}>
      <TaskBoard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //paddingTop:Platform.OS==="android"? StatusBar.currentHeight:0,
  },
});
