import { NavigationProp, useNavigation } from '@react-navigation/native';

import { RootStackParamList } from '@/navigation/navigation-types';

export const useTypedNavigation = () =>
  useNavigation<NavigationProp<RootStackParamList>>();
