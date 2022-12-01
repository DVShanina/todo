import { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { storage } from "./firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({});
  const [currentTodo, setCurrentTodo] = useState ({});

  const addTodo = () => {
    if (todo.title !== "" && todo.date !== "" && todo.description !=="") {
      setTodos([...todos, todo]);
      setTodo ({title:"", description:"", date:"", file:"", isCompleted: false, edit: false, expired: false});
    }
    else alert ("Не заполнены обязательные поля: заголовок, описание или дата")
};


const editTodo = index => {
  const newTodos = [...todos]
  newTodos[index].edit = true;
  setTodos(newTodos);
};

const completeEditTodo = index => {
  const newTodos = [...todos].map((todo, i) => {
    if (i == index && currentTodo.title !==undefined) {
      todo.title = currentTodo.title;
    }
    if (i == index && currentTodo.description !==undefined) {
      todo.description = currentTodo.description;
    }
    if (i == index && currentTodo.date !==undefined) {
       todo.date = currentTodo.date;
    }
    return todo
  });
  setTodos(newTodos);
  setCurrentTodo({});
  newTodos[index].edit = false;
}

const completeTodo = index => {
  const newTodos = [...todos];
  newTodos[index].isCompleted = !newTodos[index].isCompleted;
  setTodos(newTodos);
};

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !==text;
    });
    setTodos(newTodos);
  };

const [imgUrl, setImgUrl] = useState("");
const [imgUrls, setImgUrls] = useState([]);

const handleSubmit = (e) => {
    e.preventDefault()
    const file = e.target[0]?.files[0]

    if (!file) return;
    
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
       () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL)
        });
      }
      );
    }
   const addFiles = () => {
    setImgUrls ([...imgUrls, imgUrl]);
    for (let i=1; i < imgUrls.length; i++) {
    setTodo(prevState => {
      return {...prevState, file: imgUrls[i]};
      })}
   }

  return (
    <div className="app">
        <h1 className="app__h1">Список задач</h1>
        <TodoForm 
        todo={todo} 
        setTodo={setTodo} 
        addTodo={addTodo}
        handleSubmit={handleSubmit}
        addFiles={addFiles}
        />
        <TodoList 
        list={todos}
        remove={deleteTodo} 
        complete={completeTodo}
        edit={editTodo}
        setCurrentTodo={setCurrentTodo}
        save={completeEditTodo}
        currentTodo={currentTodo}
       />
    </div>
  );
}

export default App;
