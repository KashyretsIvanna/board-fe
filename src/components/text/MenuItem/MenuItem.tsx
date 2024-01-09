import { useLocation } from 'react-router-dom';

import styles from './MenuItem.module.scss';

import bird from '@/images/icons/bird.svg';

function MenuItem({ text, icon, to }: { text: string; icon: string; to: string }) {
  const location = useLocation();

  return (
    <>
      <div
        className={
          location.pathname.includes(to) ? styles.menu__container_active : styles.menu__container
        }
      >
        <img className={styles.menu__icon} src={icon} alt="" />
        <div className={styles.menu__text}>{text}</div>
        <img className={styles.menu__bird} src={bird} alt="bird" />
      </div>
    </>
  );
}

export default MenuItem;
