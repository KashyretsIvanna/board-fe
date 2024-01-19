import { useEffect, useState } from 'react';

import { useCreateBoardMutation } from '@/store/services/boardApi';

const UseManageBoard = () => {
  const [isBoardCreateOpen, setIsBoardCreateOpen] = useState(false);
  const [createBoard, { error, data: createdBoardData, isLoading: isCreateBoardLoading }] =
    useCreateBoardMutation();
  const [name, setName] = useState('');
  const [newIdOpen, setNewIdOpen] = useState(false);

  const onBoardCreate = () => {
    createBoard({ name });
  };

  useEffect(() => {
    if (createdBoardData) {
      setIsBoardCreateOpen(false);
      setName('');
      setNewIdOpen(true);
    }
  }, [createdBoardData]);

  return {
    name,
    newIdOpen,
    setNewIdOpen,
    onBoardCreate,
    isBoardCreateOpen,
    error,
    setIsBoardCreateOpen,
    createdBoardData,
    setName,
    isCreateBoardLoading,
  };
};

export default UseManageBoard;
