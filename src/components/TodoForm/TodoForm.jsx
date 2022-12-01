import React from "react";
import "./TodoForm.scss";

export default function TodoForm ({todo, setTodo, addTodo, addFiles, handleSubmit}) {
  
    return (
        <div className='todo-form'>
            <div className="todo-form__title">
                <label for="title" className="todo-form__label">Заголовок</label>
                <input 
                  className='todo-form__input'
                  type="text" 
                  name="title" 
                  value={todo.title}
                  onChange={e => {
                  const newTitle = e.target.value;
                  setTodo(prevState => {
                  return {...prevState, title: newTitle};
                  });}}
                  />
            </div>
            <div className="todo-form__description">
                <label for="description" className="todo-form__label">Описание</label>
                <input 
                  className="todo-form__input2"
                  type="text"
                  name="description"
                  value={todo.description}
                  onChange={e => {
                  const newDescription = e.target.value;
                  setTodo(prevState => {
                  return {...prevState, description: newDescription};
                  });}}
                  />
            </div>
            <div className="todo-form__date">
                <label for="date" className="todo-form__label">Дата завершения</label>
                <input 
                  type="date" 
                  name="date"
                  className="todo-form__input3"
                  value={todo.date}
                  onChange={e => {
                  const newDate= e.target.value;
                  setTodo(prevState => {
                  return {...prevState, date: newDate};
                  });}}
                  />
            </div>
                             
          <div className="todo-form__file">
            <form onSubmit={handleSubmit} className='todo-form__form'>
                <input 
                type='file'
                name="file"
                className="todo-form__input4"/>
                <span className="todo-form__span">Выбрать</span>
                <button 
                className="todo-form__submit"
                type='submit'
                onClick={addFiles}
                >Загрузить</button>
            </form>
         </div>
          <button 
              className='todo-form__button'
              onClick={addTodo}
              >
              Добавить</button>
      </div>       
    )
}