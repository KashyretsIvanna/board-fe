import { Button, TextField } from '@mui/material';

import styles from './Layout.module.scss';

import ReusableButtonWithIcon from '@/components/buttons/ReusableButtonWithIcon/ReusableButton';
import SelectSearch from '@/components/inputs/Search/Search';
import SideBar from '@/components/layout/SideBar/SideBar';
import WhiteBoard from '@/components/layout/WhiteBoard/WhiteBoard';
import ReusableModal from '@/components/modals/ReusableModal/ReusableModal';
import UseManageBoard from '@/customHooks/useManageBoard';
import LogoutIcon from '@/images/icons/bird.svg';
import logoImg from '@/images/logo.svg';
import { ChildrenProp } from '@/types/children.type';
import { ErrorRes } from '@/types/error.type';

function AdminLayout(props: {
  navigationItems: string[];
  pageHeader: string;
  children: ChildrenProp;
  headerRight: ChildrenProp;
  isBackButtonVisible: boolean;
  onSearch: (value: string) => void;
}) {
  const {
    name,
    onBoardCreate,
    isBoardCreateOpen,
    createdBoardData,
    error,
    setIsBoardCreateOpen,
    setName,
    newIdOpen,
    setNewIdOpen,
  } = UseManageBoard();

  return (
    <>
      <SideBar />
      <div className={styles.layout}>
        <div className={styles.layout__header}>
          <div className={styles.layout__left_side}>
            <SelectSearch onSearch={props.onSearch} />
          </div>
          <div className={styles.layout__header__right_side}>
            <div className={styles.layout__header_logout}>
              <ReusableButtonWithIcon
                icon={LogoutIcon}
                disabled={false}
                iconPosition={'left'}
                text={'ADD BOARD'}
                clickButton={() => {
                  setIsBoardCreateOpen(true);
                }}
                color={'white'}
              />
            </div>
          </div>
        </div>
        <div className={styles.layout__logo_container}>
          <img className={styles.layout__logo} src={logoImg} alt="logo" />
        </div>
        <div className={styles.layout__body}>
          <WhiteBoard
            headerRight={props.headerRight}
            pageHeader={props.pageHeader}
            navigationItems={props.navigationItems}
          >
            {props.children}
          </WhiteBoard>
        </div>
      </div>
      <ReusableModal
        handleClose={function (): void {
          setIsBoardCreateOpen(false);
        }}
        open={isBoardCreateOpen}
        children={
          <>
            <TextField
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
              label="Board name"
              value={name}
            />
            <br />
            {error && <p>{(error as ErrorRes).data.message}</p>}
            <Button onClick={onBoardCreate} variant="outlined">
              Submit
            </Button>
          </>
        }
      />
      {createdBoardData && (
        <ReusableModal
          handleClose={function (): void {
            setNewIdOpen(false);
          }}
          open={newIdOpen}
          children={createdBoardData.id}
        />
      )}
    </>
  );
}

export default AdminLayout;
