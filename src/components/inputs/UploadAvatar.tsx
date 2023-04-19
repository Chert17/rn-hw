import { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const UploadAvatar: FC = () => {
  return (
    <View style={styles.avatarWrapper}>
      <View style={styles.avatar}>
        <TouchableOpacity activeOpacity={0.7} style={styles.uploadAvatar}>
          <>
            <View style={styles.line1} />
            <View style={styles.line2} />
          </>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarWrapper: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  avatar: {
    position: 'relative',
    flex: 1,
    borderRadius: 16,
  },
  uploadAvatar: {
    position: 'absolute',
    bottom: 14,
    right: '-10%',
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FF6C00',
    borderRadius: 100,
  },
  line1: {
    width: 1,
    height: 13,
    backgroundColor: '#FF6C00',
  },
  line2: {
    width: 1,
    height: 13,
    transform: [{ rotate: '90deg' }],
    backgroundColor: '#ff0040',
    position: 'absolute',
  },
});

export default UploadAvatar;
