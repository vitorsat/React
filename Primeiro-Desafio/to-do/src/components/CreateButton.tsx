import styles from './CreateButton.module.css';

import PlusIcon from '../Assets/PlusIcon.svg';

type Button = {
	onClick?: () => void;
};

export function CreateButton({ onClick }: Button) {
	return (
		<button className={styles.CreateButton} onClick={onClick}>
			<p>Criar</p>
			<img src={PlusIcon} alt="Criar" />
		</button>
	);
}
