import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import {
  MainRootParamList,
  TypeCommentParams,
  TypeMapParams,
} from '@/navigation/navigation-types';
import { IPost } from '@/types/post-interface';
import { Gstyles } from '@/utils/global-styles';

interface IPostItem {
  item: IPost;
  navigate: (
    path: keyof MainRootParamList,
    params: TypeCommentParams | TypeMapParams,
  ) => void;
}

const PostItem: FC<IPostItem> = ({ item, navigate }) => {
  const { img, title, likes, location, comments } = item;

  return (
    <View>
      <View style={styles.autorWrapper}>
        {/* <Image /> */}
        <View style={styles.autorImg} />
        <View>
          <Text style={styles.autorName}>Name</Text>
          <Text>email</Text>
        </View>
      </View>

      <Image source={{ uri: img }} style={styles.img} />
      <Text style={{ ...Gstyles.mainText, ...styles.title }}>{title}</Text>

      <View style={styles.detailWrapper}>
        <View style={styles.reactionsWrapper}>
          <TouchableOpacity
            style={styles.reactions}
            onPress={() => navigate('Comments', { id: '1' })}
          >
            <EvilIcons name='comment' size={24} color='#FF6C00' />
            <Text style={Gstyles.mainText}>{comments.length}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.reactions}>
            <AntDesign name='like2' size={24} color='#FF6C00' />
            <Text style={Gstyles.mainText}>{likes}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            if (location.latitude && location.longitude)
              navigate('Map', {
                latitude: location.latitude,
                longitude: location.longitude,
              });
          }}
        >
          <Text>{location.address}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  autorWrapper: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  autorImg: {
    height: 60,
    width: 60,
    borderRadius: 16,
    backgroundColor: '#78ebf4',
  },
  autorName: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 15,
    color: '#212121',
  },
  autorEmail: {
    fontFamily: 'Roboto',
    fontSize: 11,
    lineHeight: 13,
    color: 'rgba(33, 33, 33, 0.8)',
  },
  img: {
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
  },
  title: {
    marginBottom: 8,
  },
  detailWrapper: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  reactionsWrapper: {
    flexDirection: 'row',
    gap: 24,
    alignItems: 'center',
  },
  reactions: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
});

export default PostItem;
