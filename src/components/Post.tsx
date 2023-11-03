import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

type PostProps = {
  postId: number;
  postContent: string;
  onLike: (postId: number) => void;
  onDislike: (postId: number) => void;
  onEdit: (postId: number, newContent: string) => void;
  onDelete: (postId: number) => void;
};

const Post: React.FC<PostProps> = ({
  postId,
  postContent,
  onLike,
  onDislike,
  onEdit,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(postContent);

  const handleEdit = () => {
    onEdit(postId, editedContent);
    setIsEditing(false);
  };

  return (
    <View>
      {isEditing ? (
        <View>
          <TextInput
            value={editedContent}
            onChangeText={setEditedContent}
          />
          <Button title="Save" onPress={handleEdit} />
        </View>
      ) : (
        <View>
          <Text>{postContent}</Text>
          <Button title="Like" onPress={() => onLike(postId)} />
          <Button title="Dislike" onPress={() => onDislike(postId)} />
          <Button title="Edit" onPress={() => setIsEditing(true)} />
          <Button title="Delete" onPress={() => onDelete(postId)} />
        </View>
      )}
    </View>
  );
};

export default Post;
