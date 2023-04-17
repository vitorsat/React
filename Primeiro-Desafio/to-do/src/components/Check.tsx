import styles from './Check.module.css';

export function Check() {
	return (
		<div className={styles.round}>
			<input type="checkbox" className={styles.input} id="checkbox" />
			<label htmlFor="checkbox"></label>
		</div>
	);
}
