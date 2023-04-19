import { FC, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Gstyles } from '@/utils/global-styles';

import { InputInterface } from './input-types';
import { inputStyles } from './styles-input';

const Password: FC<InputInterface> = ({
  value,
  setValue,
  isActive,
  setIsActive,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <View>
      <TextInput
        style={{
          ...Gstyles.mainText,
          ...inputStyles.input,
          borderColor: isActive === 'password' ? '#FF6C00' : '#E8E8E8',
        }}
        value={value}
        onFocus={() => setIsActive('password')}
        onChangeText={(value) => setValue(value)}
        secureTextEntry={!isShowPassword}
        placeholder='Password'
        placeholderTextColor='#BDBDBD'
      />
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.showPasswordBtn}
        onPress={() => setIsShowPassword((prev) => !prev)}
      >
        <Text
          style={{
            ...Gstyles.mainText,
            ...styles.showPasswordBtnTitle,
          }}
        >
          {isShowPassword ? 'Hide' : 'Show'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  showPasswordBtn: {
    position: 'relative',
  },
  showPasswordBtnTitle: {
    position: 'absolute',
    top: -40,
    right: 16,
    color: '#1B4371',
  },
});

export default Password;
