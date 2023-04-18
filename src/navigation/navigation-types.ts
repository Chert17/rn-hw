import { IPost } from '@/types/post-interface';
import { IUploadPostImg } from '@/types/upload-post-img-interface';

export type TypeMapParams = {
  latitude: number;
  longitude: number;
};

export type TypeCommentParams = {
  id: string;
};

export type RootStackParamList = {
  Auth: undefined;
  DefaultHomeScreen: IPost;
  DefaultCreatePostScreen: IUploadPostImg;
  Comments: TypeCommentParams;
  Map: TypeMapParams;
  CameraScreen: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  CreatePost: undefined;
  Profile: undefined;
};

export type MainRootParamList = RootStackParamList & RootTabParamList;
