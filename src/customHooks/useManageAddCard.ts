import { useEffect, useState } from 'react';

import { useCreateCardMutation } from '@/store/services/cardApi';

const UseManageAddCard = () => {
  const [addCardIsOpen, setAddCardIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [statusToCreate, setStatusToCreate] = useState('');
  const [description, setDescription] = useState('');
  const [createCard, { data: cardData, error: cardError, isLoading: isCreateCardLoading }] =
    useCreateCardMutation();

  const addCard = (statusId: string) => {
    setAddCardIsOpen(true);
    setStatusToCreate(statusId);
  };

  const onCardSubmit = async () => {
    await createCard({ description, title, statusId: statusToCreate });
  };

  useEffect(() => {
    if (cardData) {
      setStatusToCreate('');
      setAddCardIsOpen(false);
    }
  }, [cardData]);

  return {
    addCard,
    setAddCardIsOpen,
    cardError,
    onCardSubmit,
    addCardIsOpen,
    title,
    description,
    setTitle,
    setDescription,
    isCreateCardLoading,
  };
};

export default UseManageAddCard;
