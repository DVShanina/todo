import React from "react";
import "./TodoList.scss";
import del from "../TodoList/Del.svg";
import editimg from "../TodoList/Edit.svg";

export default function TodoList ({list,remove,complete, edit, setCurrentTodo,save}) {
  const today = new Date();

  return (
        <div className='todo-list'>
           
        {list?.length > 0 ? (
        <section className='todo-list__ul'>
            
          {list.map ((todo, index) =>      
            
            <div 
            className='todo-list__items' 
            key={index}
            style={{ backgroundColor: todo.isCompleted ? "green" : "", color: Date.parse(todo.date) < today ? "red" : "" }}
            >
              {todo.edit ?
              (<>
              <input
                type="text"
                className='todo-list__input'
                placeholder={todo.title}
                onChange={e => {
                  const newTitle = e.target.value;
                  setCurrentTodo(prevState => {
                  return {...prevState, title: newTitle};
                  });}}
                />
                <input 
                  type="text" 
                  className="todo-list__input2"
                  placeholder={todo.description}
                  onChange={e => {
                    const newDescription = e.target.value;
                    setCurrentTodo(prevState => {
                    return {...prevState, description: newDescription};
                    });}}
                  />
                <input
                  type="date"
                  className="todo-list__input3"
                  placeholder={todo.date}
                  onChange={e => {
                    const newDate = e.target.value;
                    setCurrentTodo(prevState => {
                    return {...prevState, date: newDate};
                    });}}
                    />
                <button
                  className="todo-list__save"
                  onClick={() => save(index)}>OK</button>
                  </>
                ) : (
                  <>
              <div className="todo-list__title">{todo.title}</div>
              <div className="todo-list__description">{todo.description}</div>
              <div className="todo-list__date">{todo.date}</div>
              <div className="todo-list__file">
                { todo.file == "" ?
                (<div></div>) : (
                <a href={todo.file} alt='uploaded file' target="_blank" className="todo-list__a">
                  Файлы</a>)
                }
                  </div>
              <input type="checkbox"
                  onClick={() => complete(index)}
               />
              <button className="todo-list__edit" onClick={() => edit(index)}>
                  <img src={editimg}></img>
              </button>
              <button 
                  className='todo-list__button'
                  onClick={() => {
                  remove(todo);
                  }}>
                    <img src={del}></img></button>
              </>
                )}
              
            </div>
            
        )}
      </section>
) : (
  <div className='todo-list__empty'>
    <p>Задач не установлено</p>
  </div>
)}
</div>    
    )
}