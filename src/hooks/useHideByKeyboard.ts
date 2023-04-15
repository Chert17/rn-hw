import { useEffect } from 'react';
import { Keyboard } from 'react-native';

export const useHideByKeyboard = (setter: (value: boolean) => void) => {
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setter(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setter(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
};
