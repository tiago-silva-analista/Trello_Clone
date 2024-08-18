import { Text } from "react-native";
import {StatusBar} from 'expo-status-bar';
import {Stack} from 'expo-router';
import {ThemeProvider, DarkTheme} from '@react-navigation/native'

export default function RootLayout(){

    return(
        <ThemeProvider value={DarkTheme}>
        <Stack />
        <StatusBar style="light" />
        </ThemeProvider>
    )
}