import React, { useRef } from 'react';

import type { ITodo } from '../types';

const MyPlansItem = ({
  item,
  changeTodo,
  removeTodo
}: {
  item: ITodo;
  changeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}) => {
  console.log('Я ререндлюсь');
  const itemRef = useRef<HTMLLabelElement | null>(null);
  return (
    <li>
      {!item.checked && (
        <label ref={itemRef} className='container'>
          <input
            checked={item.checked}
            type='checkbox'
            onChange={() => {
              if (itemRef.current !== null) {
                itemRef.current.classList.add('container-checked');
                changeTodo(item.key);
              }
            }}
          />
          <div className='checkmark' />
        </label>
      )}

      <p>{item.title}</p>

      <button onClick={() => removeTodo(item.key)}>
        <svg
          className='bi bi-x'
          fill='currentColor'
          height='16'
          viewBox='0 0 16 16'
          width='16'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
        </svg>
      </button>
    </li>
  );
};

export default React.memo(MyPlansItem, (prevProps, nextProps) => {
  if (prevProps.item.checked === nextProps.item.checked) {
    return true;
  }
  return false;
});
