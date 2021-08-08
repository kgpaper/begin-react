import React from 'react';
import styles from './TodoList.module.css';
import TodoItem from './TodoItem';
import classNames from 'classnames/bind';
import { useTodoState } from '../TodoContext';

const style = classNames.bind(styles);

const TodoList = () => {
  const todos = useTodoState();

  return (
    <div className={style('div')}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </div>
  );
};

export default TodoList;
