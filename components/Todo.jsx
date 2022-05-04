const Todo = ({ todo, onDelete }) => {
	return (
		<tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
			<th scope='row' className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
				{todo.title}
			</th>
			<td className='px-6 py-4'>{todo.isCompleted.toString()}</td>
			<td className='px-6 py-4'>
				<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={() => onDelete(todo.id)}>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default Todo;
