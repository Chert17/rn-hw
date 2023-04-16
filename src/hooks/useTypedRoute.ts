import { RouteProp, useRoute } from '@react-navigation/native';

import { RootStackParamList } from '@/navigation/navigation-types';

export const useTypedRoute = <N extends keyof RootStackParamList>() =>
  useRoute<RouteProp<RootStackParamList, N>>();
