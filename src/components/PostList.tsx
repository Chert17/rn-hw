import { FC } from 'react';
import { FlatList } from 'react-native';

import { useTypedNavigation } from '@/hooks/useTypedNavigation';
import { IPost } from '@/types/post-interface';

import PostItem from './PostItem';

const PostList: FC<{ data: IPost[] }> = ({ data }) => {
  const { navigate } = useTypedNavigation();

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <PostItem item={item} navigate={navigate} />}
    />
  );
};

export default PostList;
