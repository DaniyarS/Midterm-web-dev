import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

type Post = {
  id: number;
  content: string;
  likes: number;
  dislikes: number;
};

type FeedProps = {
  posts: Post[];
};

const Feed: React.FC<FeedProps> = ({ posts }) => {
  const [updatedPosts, setUpdatedPosts] = useState(posts);

  const handleLike = (postId: number) => {
    const updated = updatedPosts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );
    setUpdatedPosts(updated);
  };

  const handleDislike = (postId: number) => {
    const updated = updatedPosts.map(post =>
      post.id === postId ? { ...post, dislikes: post.dislikes + 1 } : post
    );
    setUpdatedPosts(updated);
  };

  const handleEdit = (postId: number, newContent: string) => {
    const updated = updatedPosts.map(post =>
      post.id === postId ? { ...post, content: newContent } : post
    );
    setUpdatedPosts(updated);
  };

  const handleDelete = (postId: number) => {
    const updated = updatedPosts.filter(post => post.id !== postId);
    setUpdatedPosts(updated);
  };

  return (
    <View>
      {updatedPosts.map(post => (
        <View key={post.id}>
          <Text>{post.content}</Text>
          <Text>Likes: {post.likes}</Text>
          <Text>Dislikes: {post.dislikes}</Text>
          <Button title="Like" onPress={() => handleLike(post.id)} />
          <Button title="Dislike" onPress={() => handleDislike(post.id)} />
          <Button title="Edit" onPress={() => handleEdit(post.id, 'Edited content')} />
          <Button title="Delete" onPress={() => handleDelete(post.id)} />
        </View>
      ))}
    </View>
  );
};

export default Feed;
