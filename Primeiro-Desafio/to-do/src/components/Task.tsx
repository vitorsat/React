import { Check } from './Check';
import { Trash } from '@phosphor-icons/react';
import styles from './Task.module.css';
import { useState } from 'react';

type TaskProps = {
	checked?: boolean;
};

export function Task({ checked }: TaskProps) {
	const [isChecked, setIsChecked] = useState(checked);

	return (
		<div className={styles.task}>
			<Check checked={isChecked} setIsChecked={setIsChecked} />
			<span className={isChecked ? styles.taskTextChecked : styles.taskText}>
				Integer urna interdum massa libero auctor neque turpis turpis semper.
				Duis vel sed fames integer.
			</span>
			<Trash size={24} className={styles.trash} />
		</div>
	);
}
