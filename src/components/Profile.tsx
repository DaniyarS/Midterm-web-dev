import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App'; // Update the import path accordingly

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type ProfileProps = {
  route: ProfileScreenRouteProp;
};

const Profile: React.FC<ProfileProps> = ({ route }) => {
  const { userId } = route.params;
  return (
    <View>
      <Text>Profile of user #{userId}</Text>
      {/* Other profile details */}
    </View>
  );
};

export default Profile;
