import React, { useRef } from 'react';

const MyPlansAdd = ({ addTodo }: { addTodo: (title: string) => void }) => {
  const inputText = useRef<HTMLInputElement>(null);
  return (
    <div className='todo_add-wrap'>
      <p>Добавит соббытие</p>
      <input ref={inputText} type='text' />
      <button
        onClick={() => {
          if (inputText.current !== null) {
            addTodo(inputText.current.value);
          }
        }}
      >
        Добавить соббытие
      </button>
    </div>
  );
};

export default MyPlansAdd;
