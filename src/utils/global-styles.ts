import { StyleSheet } from 'react-native';

export const Gstyles = StyleSheet.create({
  mainText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
  },
  title: {
    fontFamily: 'RobotoM',
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    color: '#212121',
    marginBottom: 32,
  },
  mainBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    paddingVertical: 16,
  },
  hideComponentWhenKeyboard: {
    opacity: 0,
    transform: [{ translateX: 1000 }],
  },
  showComponentWhenKeyboardNo: {
    opacity: 1,
    transform: [{ translateX: 0 }],
  },
});
