import styles from "../styles/Table.module.css";
import React from "react";

const Tablewithdivs = ({ proptodos }) => {
	const todos = [
		{
			id: 1,
			title: "Learn React",
			isCompleted: true,
		},
		{
			id: 2,
			title: "Learn Redux",
			isCompleted: false,
		},
		{
			id: 3,
			title: "Learn React Native",
			isCompleted: false,
		},
	];

	const renderTodos = () => {
		return todos.map(todo => (
			<div key={todo.id} className='todo flex'>
				<div className='flex-1 text-lg'>{todo.title}</div>
				<div className={`flex-1 text-lg ${todo.isCompleted ? "bg-green-500" : ""}`}>{todo.isCompleted.toString()}</div>
			</div>
		));
	};

	return (
		<div className='tablecontainer m-4 border-[1px] rounded divide-y divide-slate-200'>
			<div className='flex h-10 pl-4'>
				<h1 className='flex-1 text-lg font-bold title '>Title</h1>
				<h1 className='flex-1 text-lg font-bold status'>Competed</h1>
			</div>
			<div className={"flex flex-col " + styles.todos}>{renderTodos()}</div>
		</div>
	);
};

export default Tablewithdivs;
