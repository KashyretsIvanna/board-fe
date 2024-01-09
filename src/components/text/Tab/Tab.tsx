import styles from './Tab.module.scss';

import PaginationRectangleImg from '@/images/icons/pagination-rectangle.svg';

function Tab({ text }: { text: string }) {
  return (
    <div className={styles.pagination_item}>
      <img className={styles.pagination_item__icon} src={PaginationRectangleImg} alt="pagination" />
      <div className={styles.pagination_item__text}>{text}</div>
    </div>
  );
}

export default Tab;
