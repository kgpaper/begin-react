import React from 'react';
import styles from './TodoList.module.css';
import classNames from 'classnames/bind';

const style = classNames.bind(styles)

const TodoList = () => {
  return (
    <div className={style('div')}>
      TodoLIST
    </div>
  )
};

export default TodoList;
