import Logo from '../Assets/Logo.svg';
import styles from './Header.module.css';

export function Header() {
	return (
		<div className={styles.header}>
			<img src={Logo} alt="Logo" />
		</div>
	);
}
