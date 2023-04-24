import { Check } from './Check';
import { Trash } from '@phosphor-icons/react';
import styles from './Task.module.css';

export function Task() {
	return (
		<div className={styles.task}>
			<Check />
			<span>
				Integer urna interdum massa libero auctor neque turpis turpis semper.
				Duis vel sed fames integer.
			</span>
			<Trash size={24} className={styles.trash} />
		</div>
	);
}
