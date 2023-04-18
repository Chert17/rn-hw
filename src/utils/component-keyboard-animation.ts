import { useState } from 'react';
import { Animated } from 'react-native';

export const useComponentKeyboardAnimation = () => {
  const hideOpacity = useState(new Animated.Value(1))[0];
  const hideTransformX = useState(new Animated.Value(0))[0];

  const showOpacity = useState(new Animated.Value(0))[0];
  const showTransformX = useState(new Animated.Value(-1000))[0];

  const duration = 5000;

  const hideElWhenKeyboardShow = Animated.parallel([
    Animated.timing(hideOpacity, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }),
    Animated.timing(hideTransformX, {
      toValue: -1000,
      duration,
      useNativeDriver: true,
    }),
  ]);

  const showElWhenKeyboardHide = Animated.parallel([
    Animated.timing(showOpacity, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }),
    Animated.timing(showTransformX, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }),
  ]);

  return { hideElWhenKeyboardShow, showElWhenKeyboardHide };
};
