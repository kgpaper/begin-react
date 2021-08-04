import React from 'react';
import styles from './TodoTemplate.module.css';

const TodoTemplate = ({ children }) => {
  return <div className={styles.div}>{children}</div>;
};

export default TodoTemplate;
