import { useEffect, useState } from 'react';

import { useCreateCardMutation } from '@/store/services/cardApi';

const UseManageAddCard = () => {
  const [addCardIsOpen, setAddCardIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [categoryToCreate, setCategoryToCreate] = useState('');
  const [description, setDescription] = useState('');
  const [createCard, { data: cardData, error: cardError }] = useCreateCardMutation();

  const addCard = (categoryId: string) => {
    setAddCardIsOpen(true);
    setCategoryToCreate(categoryId);
  };

  const onCardSubmit = async () => {
    await createCard({ description, title, categoryId: categoryToCreate });
  };

  useEffect(() => {
    if (cardData) {
      setCategoryToCreate('');
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
  };
};

export default UseManageAddCard;
