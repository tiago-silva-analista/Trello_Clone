import { Text } from "react-native";
import {StatusBar} from 'expo-status-bar';
import {Stack} from 'expo-router';
import {ThemeProvider, DarkTheme} from '@react-navigation/native'
import RealmCustomProvider from "../providers/Realm";

export default function RootLayout(){

    return(
        <ThemeProvider value={DarkTheme}>
        <RealmCustomProvider>
            <Stack />
        </RealmCustomProvider>
        <StatusBar style="light" />
        </ThemeProvider>
    )
}