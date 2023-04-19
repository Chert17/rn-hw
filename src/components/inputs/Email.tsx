import { FC } from 'react';
import { TextInput } from 'react-native';

import { Gstyles } from '@/utils/global-styles';

import { InputInterface } from './input-types';
import { inputStyles } from './styles-input';

const Email: FC<InputInterface> = ({
  value,
  setValue,
  isActive,
  setIsActive,
}) => {
  return (
    <TextInput
      style={{
        ...Gstyles.mainText,
        ...inputStyles.input,
        borderColor: isActive === 'email' ? '#FF6C00' : '#E8E8E8',
      }}
      value={value}
      onFocus={() => setIsActive('email')}
      onChangeText={(value) => setValue(value)}
      keyboardType='email-address'
      placeholder='Email'
      placeholderTextColor='#BDBDBD'
    />
  );
};

export default Email;
