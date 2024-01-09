import styles from './WhiteBoard.module.scss';
import SectionHeader from '../SectionHeader/SectionHeader';

import Tab from '@/components/text/Tab/Tab';
import { ChildrenProp } from '@/types/children.type';

function AdminLayout(props: {
  pageHeader: string;
  children: ChildrenProp;
  headerRight: ChildrenProp;
  navigationItems: string[];
}) {
  return (
    <div className={styles.white_board}>
      <div className={styles.white_board__navigation}>
        {props.navigationItems.map((el) => (
          <Tab key={el} text={el} />
        ))}
      </div>
      <div className={styles.white_board__content}>
        <div className={styles.white_board__section_header}>
          <SectionHeader text={props.pageHeader} />
          <div className={styles.white_board__header_right}>{props.headerRight}</div>
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default AdminLayout;
