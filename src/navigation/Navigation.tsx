import { NavigationContainer } from '@react-navigation/native';
import { FC, useContext } from 'react';

import { AuthContext } from '@/context/AuthContext';

import AuthMenu from './auth/AuthMenu';
import BottomMenu from './tab/BottomMenu';

const Navigation: FC = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!isAuth ? <AuthMenu /> : <BottomMenu />}
    </NavigationContainer>
  );
};

export default Navigation;
