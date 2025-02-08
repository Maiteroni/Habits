import React, { useState, useEffect } from 'react';
import HabitForm from '../components/HabitForm';
import HabitList from '../components/HabitList';
import ProgressChart from '../components/ProgressChart';
import CompleteAllButton from '../components/CompleteAllButton';
import DeleteAllButton from '../components/DeleteAllButton';
import { Habit } from '../types';
import styles from '../styles/HomePage.module.scss';

const HomePage: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>(() => {
    const savedHabits = localStorage.getItem('habits');
    return savedHabits ? JSON.parse(savedHabits) : [];
  });

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const addHabit = (title: string) => {
    const newHabit: Habit = {
      id: Date.now(),
      title,
      completed: false,
    };
    setHabits([...habits, newHabit]);
  };

  const toggleHabit = (id: number) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  const deleteHabit = (id: number) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  const completeAllHabits = () => {
    setHabits(habits.map((habit) => ({ ...habit, completed: true })));
  };

  const deleteAllHabits = () => {
    setHabits([]);
  };

  return (
    <div className={styles.homePage}>
      <title>Трекер привычек</title>
      <h1>Трекер привычек</h1>
      <HabitForm onAdd={addHabit} />
      {habits.length >= 2 && (
      <div className={styles.buttons}>
        <CompleteAllButton onClick={completeAllHabits} />
        <DeleteAllButton onClick={deleteAllHabits} />
      </div>
      )}
      <HabitList habits={habits} onToggle={toggleHabit} onDelete={deleteHabit} />
      <ProgressChart habits={habits} />
    </div>
  );
};

export default HomePage;