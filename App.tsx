import React from 'react';
import { View } from 'react-native';
import Profile from '.src/Profile';
import Feed from './Feed';
import Post from './Post';

const App: React.FC = () => {
  const profileData = {
    userId: 1,
    username: 'JohnDoe',
  };

  const postsData = [
    { id: 1, content: 'First post', likes: 0, dislikes: 0 },
    { id: 2, content: 'Second post', likes: 0, dislikes: 0 },
  ];

  const handleLike = (postId: number) => {
    console.log(`Liked post ${postId}`);
  };

  const handleDislike = (postId: number) => {
    console.log(`Disliked post ${postId}`);
  };

  const handleEdit = (postId: number, newContent: string) => {
    console.log(`Edited post ${postId} with content: ${newContent}`);
  };

  const handleDelete = (postId: number) => {
    console.log(`Deleted post ${postId}`);
  };

  return (
    <View>
      <Profile userId={profileData.userId} username={profileData.username} />
      <Feed posts={postsData.map(post => (
        <Post
          key={post.id}
          postId={post.id}
          postContent={post.content}
          onLike={handleLike}
          onDislike={handleDislike}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))} />
    </View>
  );
};

export default App;
