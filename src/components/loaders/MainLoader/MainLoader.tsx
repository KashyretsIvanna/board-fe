import styles from './MainLoader.module.scss';

import LoaderIcon from '@/images/icons/loader.png';

const MainLoader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    isLoading && (
      <>
        <div className={styles.loader__background} />
        <div className={styles.loader__centered}>
          <div className={styles.loader__icon}>
            <img src={LoaderIcon} />
          </div>
        </div>
      </>
    )
  );
};

export default MainLoader;
