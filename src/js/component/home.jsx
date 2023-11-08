import React, { useState, useEffect } from "react";
import "../../styles/index.css";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="TodoList">
      <h1>Todolist</h1>
      <ul>
        {list.length ? (
          list.map((list) => (
            <li key={list.id}>
              {list.title}
              <button
                onClick={() => setList((list) => list.filter((l) => l.id !== list.id))}
               
              >
                X
              </button>
            </li>
          ))
        ) : (
          <li>No hay tareas, añadir tareas</li>
        )}
      </ul>
	 
      <input
        type="text"
        placeholder="Añadir tarea"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const tarea = inputValue;
            setList((list) => [...list, { title: tarea }]);
            setInputValue("");
          }
        }}
      />
	   <div className="list-count">{list.length} item left</div>
    
    </div>
  );
};

export default Home;