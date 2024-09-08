import { View, Text, Button } from 'react-native';
import { useUser, useAuth } from '@realm/react';

export default function Profile() {
  const user = useUser();
  const { logOut } = useAuth();

  return (
    <View>
      <Text style={{ color: 'white' }}>ID: {user.id}</Text>
      <Text style={{ color: 'white' }}>Name: {user.profile.name}</Text>
      <Text style={{ color: 'white' }}>Email: {user.profile.email}</Text>
      <Button onPress={() => logOut()} title="Sign out" />
    </View>
  );
}