import { FC, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PostList } from '@/components';
import { useTypedRoute } from '@/hooks/useTypedRoute';
import { IPost } from '@/types/post-interface';
import { Gstyles } from '@/utils/global-styles';

const DefaultHomeScreen: FC = () => {
  const { params } = useTypedRoute<'DefaultHomeScreen'>();
  const { img, title, location, likes, comments } = params ?? {};

  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    if (!img && !title && !location && !likes && !comments) return;

    const post = { img, title, location, likes, comments };
    setPosts((prev) => [post, ...prev]);
  }, [img, title, location, likes, comments]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {!posts.length ? (
          <Text style={{ ...Gstyles.title, textAlign: 'center' }}>
            Publications list is empty
          </Text>
        ) : (
          <PostList data={posts} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default DefaultHomeScreen;
