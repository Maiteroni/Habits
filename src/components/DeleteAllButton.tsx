import React from 'react';
import styles from '../styles/DeleteAllButton.module.scss';

interface DeleteAllButtonProps {
  onClick: () => void;
}

const DeleteAllButton: React.FC<DeleteAllButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.deleteAllButton}>
      Удалить все
    </button>
  );
};

export default DeleteAllButton;