import { NavigationProp, useNavigation } from '@react-navigation/native';

import { MainRootParamList } from '@/navigation/navigation-types';

export const useTypedNavigation = () =>
  useNavigation<NavigationProp<MainRootParamList>>();
