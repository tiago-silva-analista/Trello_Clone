import { Text } from "react-native";
import {StatusBar} from 'expo-status-bar';
import {Stack} from 'expo-router';
import {ThemeProvider, DarkTheme} from '@react-navigation/native'
import { RealmProvider } from "@realm/react";
import  {TaskRealmContext}  from "../providers/Realm";


export default function RootLayout(){

    const {RealmProvider} = TaskRealmContext;

    return(
        <ThemeProvider value={DarkTheme}>
        <RealmProvider>
            <Stack />
        </RealmProvider>        
        <StatusBar style="light" />
        </ThemeProvider>
    )
}