import { useState } from 'react';
import styles from './App.module.css';
import { Check } from './components/Check';
import { CreateButton } from './components/CreateButton';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Task } from './components/Task';

import Clipboard from './Assets/Clipboard.svg';

import './global.css';

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
			checked: false,
		},
		{
			id: 2,
			text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
			checked: true,
		},
	]);

	return (
		<div className={styles.app}>
			<Header />
			<div className={styles.inputArea}>
				<Input placeholder="Adicione uma nova tarefa" />
				<CreateButton />
			</div>
			<div className={styles.taskArea}>
				<div className={styles.countsTask}>
					<span className={styles.createTask}>
						Tarefas criadas
						<span className={styles.count}>0</span>
					</span>
					<span className={styles.finishTask}>
						Concluídas
						<span className={styles.count}>0</span>
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
								// id={task.id}
								// text={task.text}
								checked={task.checked}
								// setTasks={setTasks}
								// tasks={tasks}
							/>
						))}
				</div>
			</div>
		</div>
	);
}

export default App;
