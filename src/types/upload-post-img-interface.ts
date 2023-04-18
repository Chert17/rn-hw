export type TypeUploadImgLocation = {
  latitude: number | null;
  longitude: number | null;
  country: string;
  city: string;
};

export interface IUploadPostImg {
  photo: string;
  location: TypeUploadImgLocation;
}
