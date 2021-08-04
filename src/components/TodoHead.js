import React from 'react';
import styles from './TodoHead.module.css';
import classNames from 'classnames/bind';

const style = classNames.bind(styles)

const TodoHead = () => {
  return (
    <div className={style('body')}>
      <h1>2021/08/05</h1>
      <div className={style('day')}>목요일</div>
      <div className={style('tasks-left')}>할 일 2개남음</div>
    </div>
  );
};

export default TodoHead;
