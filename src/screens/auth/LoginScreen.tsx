import { FC, useContext, useState } from 'react';
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { Email, Password } from '@/components/inputs';
import { ILoginForm } from '@/components/inputs/input-types';
import { AuthContext } from '@/context/AuthContext';
import { useHideByKeyboard } from '@/hooks/useHideByKeyboard';
import { useTypedNavigation } from '@/hooks/useTypedNavigation';
import { Gstyles } from '@/utils/global-styles';

const initialFormState: ILoginForm = {
  email: '',
  password: '',
};

const LoginScreen: FC = () => {
  const { setIsAuth } = useContext(AuthContext);

  const { navigate } = useTypedNavigation();

  const [formState, setFormState] = useState(initialFormState);
  const [activeInput, setActiveInput] = useState('');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  useHideByKeyboard(setIsShowKeyboard);

  const handleSubmit = () => {
    console.log(formState);
    setFormState(initialFormState);
    setIsAuth(true);
  };

  const handleHideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleFocusInput = (target: string) => {
    setIsShowKeyboard(true);
    setActiveInput(target);
  };

  return (
    <TouchableWithoutFeedback onPress={handleHideKeyboard}>
      <ImageBackground style={styles.bgImg} source={require('@/assets/bg.jpg')}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View
            style={{
              ...styles.container,
              paddingBottom: !isShowKeyboard ? 110 : 0,
            }}
          >
            <Text style={Gstyles.title}>Login</Text>

            <View style={styles.inputWrapper}>
              <Email
                value={formState.email}
                setValue={(email: string) =>
                  setFormState((prev) => ({ ...prev, email }))
                }
                isActive={activeInput}
                setIsActive={handleFocusInput}
              />

              <Password
                value={formState.password}
                setValue={(password: string) =>
                  setFormState((prev) => ({ ...prev, password }))
                }
                isActive={activeInput}
                setIsActive={handleFocusInput}
              />
            </View>

            <View style={{ display: !isShowKeyboard ? 'flex' : 'none' }}>
              <TouchableOpacity
                style={{ ...Gstyles.mainBtn }}
                activeOpacity={0.7}
                onPress={handleSubmit}
              >
                <Text style={{ ...Gstyles.mainText, color: '#fff' }}>
                  Sign In
                </Text>
              </TouchableOpacity>
              <Text
                style={{ ...Gstyles.mainText, textAlign: 'center' }}
                onPress={() => navigate('Register')}
              >
                No account? Sign up
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
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
    paddingTop: 32,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  inputWrapper: {
    gap: 16,
    marginBottom: 43,
  },
});

export default LoginScreen;
