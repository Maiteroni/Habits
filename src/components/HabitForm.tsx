import React, { useState } from 'react';
import styles from '../styles/HabitForm.module.scss';

interface HabitFormProps {
  onAdd: (title: string) => void;
}

const HabitForm: React.FC<HabitFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.habitForm}>
      <input
        type="text"
        placeholder="Новая привычка"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default HabitForm;