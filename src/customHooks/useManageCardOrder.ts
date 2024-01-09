import { useState } from 'react';

import { useGetBoardByIdQuery } from '@/store/services/boardApi';
import { useUpdateCardOrderMutation } from '@/store/services/cardApi';
import { TargetItem } from '@/types/board.type';

const UseManageCardOrder = () => {
  const [currentBoardId, setCurrentBoardId] = useState<string>('');

  const { data } = useGetBoardByIdQuery({ boardId: currentBoardId });
  const [updateCardOrder] = useUpdateCardOrderMutation();

  const onDrop = async (
    ev: React.DragEvent<HTMLDivElement>,
    toColumn: string,
    targetItem?: TargetItem,
  ) => {
    if (!data) {
      return;
    }
    const idOfDraggedCard = ev.dataTransfer.getData('id');
    const fromColumn = ev.dataTransfer.getData('from');

    const toColumnData = data.categories.find((el) => el.name == toColumn);
    if (!fromColumn || !toColumnData) {
      return;
    }

    const targetIndex = toColumnData.cards.findIndex((el) => el.id === targetItem?.id);

    await updateCardOrder({
      cardId: idOfDraggedCard,
      categoryId: toColumnData.id,
      order: targetIndex,
    });
  };

  return {
    onDrop,
    currentBoardId,
    setCurrentBoardId,
    data,
  };
};

export default UseManageCardOrder;
