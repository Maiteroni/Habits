import React from 'react';
import styles from '../styles/CompleteAllButton.module.scss';

interface CompleteAllButtonProps {
  onClick: () => void;
  allCompleted: boolean;
}

const CompleteAllButton: React.FC<CompleteAllButtonProps> = ({
  onClick,
  allCompleted,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.completeAllButton} ${
        allCompleted ? styles.cancelAllButton : ''
      }`}
    >
      {allCompleted ? 'Отменить все' : 'Выполнить все'}
    </button>
  );
};

export default CompleteAllButton;