import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (description, dueTime) => {
    setTodos([...todos, { description, dueTime, editing: false }]);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  const updateTodo = (index, description, dueTime) => {
    const updatedTodos = [...todos];
    updatedTodos[index].description = description;
    updatedTodos[index].dueTime = dueTime;
    setTodos(updatedTodos);
  };

  const toggleEditing = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].editing = !updatedTodos[index].editing;
    setTodos(updatedTodos);
  };

  return (
    <div className='flex w-full flex-col items-center py-40 text-navy font-semibold '>
      <h1 className='font-extrabold text-4xl p-5'>To-Do List</h1>
      <ul className='p-4 flex flex-col'>
        {todos
          .sort((a, b) => new Date(a.dueTime) - new Date(b.dueTime))
          .map((todo, index) => (
            <li key={index}>
              {todo.editing ? (
                <div className='flex justify-around'>
                  <input
                    type="text"
                    value={todo.description}
                    onChange={(event) => updateTodo(index, event.target.value, todo.dueTime)}
                    className='p-3 border-orange border-2 my-3 rounded-lg mx-5'
                  />
                  <input
                    type="datetime-local"
                    value={todo.dueTime}
                    onChange={(event) => updateTodo(index, todo.description, event.target.value)}  className='border-navy my-3 border-2 rounded-md py-2'
                  />
                  <button onClick={() => toggleEditing(index)} className='bg-navy text-gray p-2 my-3 mx-5 rounded-md'>Save</button>
                </div>
              ) : (
                <div className='flex justify-between my-3 '>
                  <button className=''>
                  <span onClick={() => toggleEditing(index)} className='border-b-2 py-2 my-3 border-orange  mx-5 px-5 pt-3'>{todo.description}</span>
                  </button>
                  
                  <span className='border-navy border-b-2 p-2 tracking-wider'>Due Date&Time: {todo.dueTime}</span>
                  <button onClick={() => removeTodo(index)} className='bg-navy text-gray p-2 mx-5 rounded-md'>Remove</button>
                </div>
              )}
            </li>
          ))}
      </ul>
      <div>
        <input type="text" placeholder="Add To-Do" className='p-3 mx-5 border-2 text-orange' />
        <input type="datetime-local" className='p-3 mx-5 border-2 text-navy'  />
        <button
          onClick={(event) => {
            addTodo(event.target.previousSibling.previousSibling.value, event.target.previousSibling.value);
            event.target.previousSibling.previousSibling.value = '';
            event.target.previousSibling.value = '';
          }}
          className='bg-navy text-gray p-2 mx-5 rounded-md -mb-2'
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default App;
