import { IPost } from '@/types/post-interface';
import { IUploadPostImg } from '@/types/upload-post-img-interface';

import { IAuthStack } from './auth/auth.nav.types';
import { ITabStack } from './tab/tab.nav.types';

export type TypeMapParams = {
  latitude: number;
  longitude: number;
};

export type TypeCommentParams = {
  id: string;
};

export type RootStackParamList = {
  DefaultHomeScreen: IPost;
  DefaultCreatePostScreen: IUploadPostImg;
  Comments: TypeCommentParams;
  Map: TypeMapParams;
  CameraScreen: undefined;
};

export type MainRootParamList = RootStackParamList & ITabStack & IAuthStack;
