import { useState } from "react";
import Todo from "./Todo";

const Table = ({ propTodos }) => {
	const [todos, setTodos] = useState([
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
	]);

	const onDelete = id => {
		setTodos(todos.filter(todo => todo.id !== id));
	};

	const renderTodos = () => {
		return todos.map(todo => <Todo key={todo.id} todo={todo} onDelete={onDelete} />);
	};

	return (
		<div className='m-4 w-fit relative overflow-x-auto shadow-md sm:rounded-lg'>
			<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
				<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
					<tr>
						<th scope='col' className='px-6 py-3'>
							Title
						</th>
						<th scope='col' className='px-6 py-3'>
							Completed
						</th>
						<th scope='col' className='px-6 py-3'>
							Delete
						</th>
					</tr>
				</thead>
				<tbody>{renderTodos()}</tbody>
			</table>
		</div>
	);
};

export default Table;
