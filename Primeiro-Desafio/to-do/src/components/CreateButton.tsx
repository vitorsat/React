import styles from './CreateButton.module.css';

import PlusIcon from '../Assets/PlusIcon.svg';

export function CreateButton() {
	return (
		<button className={styles.CreateButton}>
			<p>Criar</p>
			<img src={PlusIcon} alt="Criar" />
		</button>
	);
}
