import { FC } from 'react';
import { TextInput } from 'react-native';

import { Gstyles } from '@/utils/global-styles';

import { InputInterface } from './input-types';
import { inputStyles } from './styles-input';

const Name: FC<InputInterface> = ({
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
        borderColor: isActive === 'name' ? '#FF6C00' : '#E8E8E8',
      }}
      value={value}
      onFocus={() => setIsActive('name')}
      onChangeText={(value) => setValue(value)}
      placeholder='Your Name'
      placeholderTextColor='#BDBDBD'
    />
  );
};

export default Name;
