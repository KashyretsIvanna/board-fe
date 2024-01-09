import styles from './Button.module.scss';

function BigButton({ text, clickButton }: { text: string; clickButton: () => void }) {
  return (
    <button type="button" onClick={clickButton} className={styles.button}>
      {text}
    </button>
  );
}

export default BigButton;
