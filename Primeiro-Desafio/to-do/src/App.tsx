import { useState } from 'react';
import styles from './App.module.css';
import { CreateButton } from './components/CreateButton';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Task } from './components/Task';
import { v4 as uuidv4 } from 'uuid';

import Clipboard from './Assets/Clipboard.svg';

import './global.css';

export type TaskPropsArray = {
	id: string;
	text: string;
	checked: boolean;
};

function App() {
	const [tasks, setTasks] = useState<TaskPropsArray[]>([]);
	const [textInput, setTextInput] = useState('');

	return (
		<div className={styles.app}>
			<Header />
			<div className={styles.inputArea}>
				<Input
					placeholder="Adicione uma nova tarefa"
					value={textInput}
					onChange={(event) => {
						setTextInput(event.target.value);
					}}
				/>
				<CreateButton
					onClick={() => {
						const newTask = {
							id: uuidv4(),
							text: textInput,
							checked: false,
						};
						setTasks([...tasks, newTask]);
						setTextInput('');
					}}
				/>
			</div>
			<div className={styles.taskArea}>
				<div className={styles.countsTask}>
					<span className={styles.createTask}>
						Tarefas criadas
						<span className={styles.count}>
							{tasks.length > 0 ? tasks.length : 0}
						</span>
					</span>
					<span className={styles.finishTask}>
						Concluídas
						<span className={styles.count}>
							{tasks.length === 0 && 0}
							{tasks.length > 0 &&
								tasks.filter((task) => task?.checked === true).length +
									` de ${tasks.length}`}
						</span>
					</span>
				</div>
				<div className={styles.tasks}>
					{tasks.length === 0 && (
						<div className={styles.noTask}>
							<img
								src={Clipboard}
								alt="Clipboard"
								className={styles.clipboard}
							/>
							<p className={styles.mainTitle}>
								Você ainda não tem tarefas cadastradas
							</p>
							<p className={styles.secondaryTitle}>
								Crie tarefas e organize seus itens a fazer
							</p>
						</div>
					)}
					{tasks.length > 0 &&
						tasks.map((task) => (
							<Task
								key={task.id}
								id={task.id}
								tasks={task}
								setTasks={setTasks}
								tasksArray={tasks}
							/>
						))}
				</div>
			</div>
		</div>
	);
}

export default App;
