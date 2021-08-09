import React from 'react';
import styles from './TodoHead.module.css';
import { useTodoState } from '../TodoContext';
import classNames from 'classnames/bind';

const style = classNames.bind(styles);

const TodoHead = () => {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <div className={style('body')}>
      <h1>{dateString}</h1>
      <div className={style('day')}>{dayName}</div>
      <div className={style('tasks-left')}>할 일 {undoneTasks.length}개남음</div>
    </div>
  );
};

export default TodoHead;
