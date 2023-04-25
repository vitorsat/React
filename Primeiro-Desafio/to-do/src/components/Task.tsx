import { Check } from './Check';
import { Trash } from '@phosphor-icons/react';
import styles from './Task.module.css';
import { useState } from 'react';

export type TaskProps = {
	checked?: boolean;
	text?: string;
	id?: number;
	setIsChecked?: any;
};

export function Task({ checked, text, id, setIsChecked }: TaskProps) {
	return (
		<div className={styles.task} key={id}>
			<Check checked={checked} setIsChecked={setIsChecked} />
			<span className={checked ? styles.taskTextChecked : styles.taskText}>
				{text}
			</span>
			<Trash size={24} className={styles.trash} />
		</div>
	);
}
