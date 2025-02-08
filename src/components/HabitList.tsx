import React from 'react';
import { Habit } from '../types';
import styles from '../styles/HabitList.module.scss';

interface HabitListProps {
  habits: Habit[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const HabitList: React.FC<HabitListProps> = ({ habits, onToggle, onDelete }) => {
  return (
    <ul className={styles.habitList}>
      {habits.map((habit) => (
        <li key={habit.id} className={habit.completed ? styles.completed : ''}>
          <span>{habit.title}</span>
          <div>
            <button onClick={() => onToggle(habit.id)}>
              {habit.completed ? 'Отменить' : 'Выполнено'}
            </button>
            <button onClick={() => onDelete(habit.id)}>Удалить</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HabitList;