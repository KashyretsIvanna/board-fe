import styles from './SideBar.module.scss';

import MenuItem from '@/components/text/MenuItem/MenuItem';
import usersListImg from '@/images/icons/users-list.svg';

function AdminLayout() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__logo_container}></div>
      <div className={styles.sidebar__header}>Board</div>
      <MenuItem to="/board" text="Board" icon={usersListImg} />
    </div>
  );
}

export default AdminLayout;
