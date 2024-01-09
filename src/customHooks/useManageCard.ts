import { useState } from 'react';

import { useDeleteCardMutation, useUpdateCardByIdMutation } from '@/store/services/cardApi';

const UseManageCard = (props: { title: string; description: string; id: string }) => {
  const [deleteCard] = useDeleteCardMutation();
  const [updateCard] = useUpdateCardByIdMutation();
  const [isEditable, setIsEditable] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);

  const onDelete = async (cardId: string) => {
    deleteCard({ cardId });
  };

  const onSave = () => {
    updateCard({ id: props.id, title, description });
    setIsEditable((prev) => !prev);
  };

  const onCheckoutEdit = () => {
    setTitle(props.title);
    setDescription(props.description);
    setIsEditable((prev) => !prev);
  };

  return {
    onSave,
    onCheckoutEdit,
    onDelete,
    isEditable,
    description,
    title,
    setDescription,
    setTitle,
  };
};

export default UseManageCard;
