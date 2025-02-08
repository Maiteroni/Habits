import React from 'react';
import styles from '../styles/CompleteAllButton.module.scss';

interface CompleteAllButtonProps {
  onClick: () => void;
}

const CompleteAllButton: React.FC<CompleteAllButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.completeAllButton}>
      Выполнить все
    </button>
  );
};

export default CompleteAllButton;