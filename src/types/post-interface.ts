import { TypeUploadImgLocation } from './upload-post-img-interface';

export interface IPostLocation {
  latitude: number | null;
  longitude: number | null;
  address: string;
}

export interface IPostLocationWithPhoto extends TypeUploadImgLocation {
  photo: string;
}

export interface IPost {
  img: string;
  title: string;
  comments: [];
  likes: number;
  location: IPostLocation;
}
