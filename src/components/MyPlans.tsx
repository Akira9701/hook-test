import React, { useEffect, useState } from 'react';

import type { ITodo } from '../types';

import MyPlansAdd from './MyPlansAdd';
import MyPlansItem from './MyPlansItem';

const MyPlans = () => {
  const [todos, setTodos] = useState<ITodo[] | null>(null);

  useEffect(() => {
    // console.log(Object.keys(localStorage));
    setTodos([...Object.values(localStorage).map((el: string) => JSON.parse(el) as ITodo)]);
  }, []);

  const addTodo = (title: string): void => {
    const id = Date.now();
    localStorage.setItem(String(Date.now()), JSON.stringify({ title, checked: false, key: id }));
    setTodos((prevState) => [...(prevState || []), { checked: false, title, key: id }]);
  };

  const changeTodo = (id: number): void => {
    setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const oldItem: ITodo = JSON.parse(localStorage.getItem(String(id)) || '{}');
      localStorage.setItem(String(id), JSON.stringify({ ...oldItem, checked: !oldItem.checked }));
      setTodos((prevState) =>
        [...(prevState || [])].map((el) =>
          el.key === id ? { ...el, checked: !oldItem.checked } : el
        )
      );
    }, 1000);
  };

  const removeTodo = (id: number): void => {
    localStorage.removeItem(String(id));
    setTodos((prevState) => [...(prevState || [])].filter((el) => el.key !== id));
  };

  return (
    <article className='todo'>
      <p>Mои соббытия</p>
      {todos !== null ? (
        <ul>
          {todos
            .filter((el) => el.checked === false)
            .map((el) => (
              <MyPlansItem key={el.key} changeTodo={changeTodo} item={el} removeTodo={removeTodo} />
            ))}
        </ul>
      ) : (
        ''
      )}
      <p className='todo_completed_title'>Выполненный соббытия</p>
      {todos !== null ? (
        <ul className='todo_completed_list'>
          {todos
            .filter((el) => el.checked)
            .map((el) => (
              <MyPlansItem key={el.key} changeTodo={changeTodo} item={el} removeTodo={removeTodo} />
            ))}
        </ul>
      ) : (
        ''
      )}
      <MyPlansAdd addTodo={addTodo} />
    </article>
  );
};

export default MyPlans;
