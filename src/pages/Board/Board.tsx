import { AddCircleOutline } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';

import styles from './Board.module.scss';

import DroppableCol from '@/components/blocks/DroppableCol/DroppableCol';
import ButtonIcon from '@/components/buttons/ButtonIcon/ButtonIcon';
import AdminLayout from '@/components/layout/Layout/Layout';
import MainLoader from '@/components/loaders/MainLoader/MainLoader';
import ReusableModal from '@/components/modals/ReusableModal/ReusableModal';
import UseManageAddCard from '@/customHooks/useManageAddCard';
import UseManageCardOrder from '@/customHooks/useManageCardOrder';
import { TargetItem } from '@/types/board.type';
import { ErrorRes } from '@/types/error.type';

function Board() {
  const {
    addCard,
    onCardSubmit,
    addCardIsOpen,
    cardError,
    description,
    title,
    setDescription,
    setTitle,
    setAddCardIsOpen,
    isCreateCardLoading,
  } = UseManageAddCard();

  const {
    onDrop,
    currentBoardId,
    setCurrentBoardId,
    isBoardByIdLoading,
    data,
    isUpdateOrderLoading,
  } = UseManageCardOrder();

  const onSearch = (search: string) => {
    setCurrentBoardId(search.trim());
  };

  return (
    <div className={styles.board__container}>
      <AdminLayout
        isBackButtonVisible={false}
        navigationItems={[currentBoardId]}
        pageHeader={data ? data.name : 'Board'}
        onSearch={onSearch}
        headerRight={null}
      >
        {data && (
          <div className={styles.board__cols_container}>
            {data.statuses.map((el) => (
              <DroppableCol
                key={el.id}
                onDrop={(e: React.DragEvent<HTMLDivElement>, targetItem?: TargetItem) => {
                  onDrop(e, el.name, targetItem);
                }}
                cards={el.cards}
                header={
                  <>
                    <ButtonIcon
                      icon={<AddCircleOutline fontSize="inherit" />}
                      clickButton={() => {
                        addCard(el.id);
                      }}
                    />
                    {el.name}
                  </>
                }
                status={el.name}
              />
            ))}
          </div>
        )}
      </AdminLayout>

      <MainLoader isLoading={isCreateCardLoading || isUpdateOrderLoading || isBoardByIdLoading} />
      <ReusableModal
        handleClose={() => {
          setAddCardIsOpen(false);
        }}
        open={addCardIsOpen}
        children={
          <>
            <TextField
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              id="outlined-required"
              label="Title"
              value={title}
            />
            <TextField
              required
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
              id="outlined-required"
              label="Description"
            />
            <br />
            {cardError && <p>{(cardError as ErrorRes).data.message}</p>}
            <Button onClick={onCardSubmit} variant="outlined">
              Submit
            </Button>
            <MainLoader
              isLoading={isCreateCardLoading || isUpdateOrderLoading || isBoardByIdLoading}
            />
          </>
        }
      />
    </div>
  );
}

export default Board;
