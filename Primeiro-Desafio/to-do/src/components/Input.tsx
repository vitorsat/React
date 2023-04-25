import styles from './Input.module.css';

interface InputProps {
	placeholder: string;
	value?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ placeholder, value, onChange }: InputProps) {
	return (
		<input
			type="text"
			placeholder={placeholder}
			className={styles.input}
			value={value}
			onChange={onChange}
		/>
	);
}
