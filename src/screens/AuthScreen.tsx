import { FC, useState } from 'react';
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { UploadAvatar } from '@/components/ui';
import { useHideByKeyboard } from '@/hooks/useHideByKeyboard';
import { Gstyles } from '@/utils/global-styles';

const initialFormState = {
  name: '',
  email: '',
  password: '',
};

const AuthScreen: FC = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [isReg, setIsReg] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [activeInput, setActiveInput] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);

  useHideByKeyboard(setIsShowKeyboard);

  const handleHideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleFocusInput = (target: string) => {
    setIsShowKeyboard(true);
    setActiveInput(target);
  };

  const handleSubmit = () => {
    console.log(formState);
    setFormState(initialFormState);
  };

  return (
    <TouchableWithoutFeedback onPress={handleHideKeyboard}>
      <ImageBackground style={styles.bgImg} source={require('@/assets/bg.jpg')}>
        <SafeAreaView>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <View
              style={{
                ...styles.container,
                paddingBottom: !isReg ? 110 : 45 || (isShowKeyboard && 32),
                paddingTop: isReg ? 92 : 32,
              }}
            >
              {isReg && <UploadAvatar />}

              <Text style={Gstyles.title}>{isReg ? 'Register' : 'Login'}</Text>
              <View
                style={{
                  ...styles.inputWrapper,
                  marginBottom: isShowKeyboard ? 0 : 43,
                }}
              >
                {isReg && (
                  <TextInput
                    style={{
                      ...Gstyles.mainText,
                      ...styles.input,
                      borderColor:
                        isShowKeyboard && activeInput === 'name'
                          ? '#FF6C00'
                          : '#E8E8E8',
                    }}
                    value={formState.name}
                    onFocus={() => handleFocusInput('name')}
                    onChangeText={(value) =>
                      setFormState((prev) => ({ ...prev, name: value }))
                    }
                    placeholder='Your Name'
                  />
                )}
                <TextInput
                  style={{
                    ...Gstyles.mainText,
                    ...styles.input,
                    borderColor:
                      isShowKeyboard && activeInput === 'email'
                        ? '#FF6C00'
                        : '#E8E8E8',
                  }}
                  value={formState.email}
                  onFocus={() => handleFocusInput('email')}
                  onChangeText={(value) =>
                    setFormState((prev) => ({ ...prev, email: value }))
                  }
                  keyboardType='email-address'
                  placeholder='Email'
                />
                <View>
                  <TextInput
                    style={{
                      ...Gstyles.mainText,
                      ...styles.input,
                      borderColor:
                        isShowKeyboard && activeInput === 'password'
                          ? '#FF6C00'
                          : '#E8E8E8',
                    }}
                    value={formState.password}
                    onFocus={() => handleFocusInput('password')}
                    onChangeText={(value) =>
                      setFormState((prev) => ({ ...prev, password: value }))
                    }
                    secureTextEntry={!isShowPassword}
                    placeholder='Password'
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
              </View>

              <TouchableOpacity
                style={{
                  ...styles.btn,
                  display: isShowKeyboard ? 'none' : 'flex',
                }}
                onPress={handleSubmit}
                activeOpacity={0.7}
              >
                <Text style={{ ...Gstyles.mainText, color: '#fff' }}>
                  Sign Up
                </Text>
              </TouchableOpacity>

              <Text
                style={{
                  ...Gstyles.mainText,
                  textAlign: 'center',
                  display: isShowKeyboard ? 'none' : 'flex',
                }}
                onPress={() => setIsReg((prev) => !prev)}
              >
                {isReg
                  ? 'Already have an account? Log in'
                  : 'No account? Sign up'}
              </Text>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  container: {
    position: 'relative',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  inputWrapper: {
    gap: 16,
  },
  input: {
    padding: 16,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    paddingVertical: 16,
  },
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

export default AuthScreen;
