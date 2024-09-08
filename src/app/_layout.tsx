import { Text,View } from "react-native";
import {StatusBar} from 'expo-status-bar';
import {Stack,Link} from 'expo-router';
import {ThemeProvider, DarkTheme} from '@react-navigation/native'
import { RealmProvider} from "@realm/react";
import  {TaskRealmContext}  from "../providers/Realm";
import { App } from "realm";
import { Realm} from "realm";
import RealmCustomProvider from '../providers/Realm';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function RootLayout(){

    return(
        <>
            <ThemeProvider value={DarkTheme}>
            <RealmCustomProvider>
                <Stack screenOptions={{
                    headerRight: () =>(
                        <View style={{ gap: 10, flexDirection: 'row' }}>
                            <Link href="/login">
                                <FontAwesome name="sign-in" size={24} color="lightgray" />
                            </Link>
                            <Link href="/profile">
                                <FontAwesome
                                name="user-circle-o"
                                size={24}
                                color="lightgray"
                                />
                            </Link>
                        </View>
                    ),
                }} />
            </RealmCustomProvider>       
            </ThemeProvider>        
            <StatusBar style="light" />
        </>
    )
}