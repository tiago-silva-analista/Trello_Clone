import { Text } from "react-native";
import {StatusBar} from 'expo-status-bar';
import {Stack} from 'expo-router';
import {ThemeProvider, DarkTheme} from '@react-navigation/native'
import { RealmProvider} from "@realm/react";
import  {TaskRealmContext}  from "../providers/Realm";
import { App } from "realm";
import { Realm} from "realm";
import RealmCustomProvider from '../providers/Realm';


export default function RootLayout(){

    return(
        <>
            <ThemeProvider value={DarkTheme}>
            <RealmCustomProvider>
                <Stack />
            </RealmCustomProvider>       
            </ThemeProvider>        
            <StatusBar style="light" />
        </>
    )
}