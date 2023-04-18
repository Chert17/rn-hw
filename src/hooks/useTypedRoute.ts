import { RouteProp, useRoute } from '@react-navigation/native';

import { MainRootParamList } from '@/navigation/navigation-types';

export const useTypedRoute = <N extends keyof MainRootParamList>() =>
  useRoute<RouteProp<MainRootParamList, N>>();
