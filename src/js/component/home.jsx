import React, { useState, useEffect } from "react";
import "../../styles/index.css";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const[ inputValue,setInputValue ] = useState("");
	const[list,setList ] = useState([]);
	return (
		<div className="container">
			<h1>TodoList</h1>
			<ul>
				<li>
					<input id="listInput"
						type = "text"
						onChange = {(e)=> setInputValue(e.target.value)}
						value = {inputValue}
						onKeyDown={(e)=> {
							if(e.key === "Enter"){
								setList(list.concat(inputValue));
								setInputValue('');
							}
						}}
						placeholder = "Agregar Tareas">
						
					</input>
				</li>
				{list.map((item,index)=>(
					<li key="index">{item}{" "}
						<i 
							className= "fas fa-solid fa-trash" 
							onClick={()=>
								setList(
									list.filter(
										(t,currentIndex)=> index != currentIndex)
										)
						}></i>
					</li>
				))}
				
			</ul>
			<div>{list.length} items left</div>
		</div>
	);
};

export default Home;