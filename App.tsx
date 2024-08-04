import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import TaskListItem from './src/components/TaskListItem';
import { Platform } from 'expo-modules-core';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={{padding:10}}>
    <TaskListItem />

    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:Platform.OS==="android"? StatusBar.currentHeight:0,
  },
});
