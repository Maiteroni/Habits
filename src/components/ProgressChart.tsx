import React from 'react';
import { Habit } from '../types';
import styles from '../styles/ProgressChart.module.scss';

interface ProgressChartProps {
  habits: Habit[];
}

const ProgressChart: React.FC<ProgressChartProps> = ({ habits }) => {
  const completedHabits = habits.filter((habit) => habit.completed).length;
  const totalHabits = habits.length;
  const progress = totalHabits > 0 ? (completedHabits / totalHabits) * 100 : 0;

  return (
    <div className={styles.progressChart}>
      <h2>Прогресс</h2>
      <div className={styles.chart}>
        <div
          className={styles.progressBar}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p>
        Выполнено {completedHabits} из {totalHabits} привычек
      </p>
    </div>
  );
};

export default ProgressChart;