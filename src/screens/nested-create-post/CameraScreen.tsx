import { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { CameraComponent } from '@/components';
import { BackBtn } from '@/components/ui';
import { useTypedNavigation } from '@/hooks/useTypedNavigation';

const CameraScreen: FC = () => {
  const { goBack } = useTypedNavigation();

  return (
    <View style={styles.container}>
      <CameraComponent />
      <View style={styles.backBtn}>
        <BackBtn goBack={goBack} color='#c42020' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  backBtn: {
    position: 'absolute',
    top: '8%',
    left: 16,
  },
});

export default CameraScreen;
