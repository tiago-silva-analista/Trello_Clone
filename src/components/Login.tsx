import {Text, View} from 'react-native';
import { useAuth } from '@realm/react';



const Login = () =>{

    const{logInWithAnonymous} = useAuth();

    const guestLogin =()=>{
        logInWithAnonymous();
    }
    return <View style={{flex:1, aligntItems:'center', justifyContent: 'center'}}>
                <Text onPress={guestLogin}>Login as guest</Text>
            </View>;
  }
  
  export default Login