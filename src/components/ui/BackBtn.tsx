import { AntDesign } from '@expo/vector-icons';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

interface IBackBtn {
  goBack: () => void;
  color?: string;
}

const BackBtn: FC<IBackBtn> = ({ goBack, color }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
      <AntDesign
        name='arrowleft'
        size={30}
        color={color}
        style={{ marginRight: 16 }}
      />
    </TouchableOpacity>
  );
};

export default BackBtn;
