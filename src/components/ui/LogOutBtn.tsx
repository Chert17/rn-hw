import { MaterialIcons } from '@expo/vector-icons';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

const LogOutBtn: FC<{ logout: () => void }> = ({ logout }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={logout}>
      <MaterialIcons
        name='logout'
        size={30}
        color='#BDBDBD'
        style={{ marginRight: 16 }}
      />
    </TouchableOpacity>
  );
};

export default LogOutBtn;
