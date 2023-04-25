import { Check } from './Check';
import { Trash } from '../Assets/Trash';
import styles from './Task.module.css';
import { TaskPropsArray } from '../App';

export type TaskProps = {
	id: string;
	tasks: any;
	setTasks: any;
	tasksArray: TaskPropsArray[];
};

export function Task({ id, tasks, setTasks, tasksArray }: TaskProps) {
	return (
		<div
			className={styles.task}
			key={id}
			onClick={() => console.log('clicou' + id)}
		>
			<Check
				checked={tasks.checked}
				setIsChecked={() => {
					const newTasks = tasksArray.map((task: any) => {
						if (task.id === id) {
							console.log(task);
							return {
								...task,
								id: task.id,
								checked: !task.checked,
							};
						} else {
							return task;
						}
					});
					setTasks(newTasks);
				}}
			/>
			<span
				className={tasks.checked ? styles.taskTextChecked : styles.taskText}
			>
				{tasks.text}
			</span>
			<Trash
				className={styles.trash}
				onClick={() => {
					const newTasks = tasksArray.filter(
						(task: { id: any }) => task?.id !== id
					);
					setTasks(newTasks);
				}}
			/>
		</div>
	);
}
