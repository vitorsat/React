import { useState } from 'react';
import styles from './Check.module.css';
import { Check as CheckIcon } from '@phosphor-icons/react';

type CheckProps = {
	checked?: boolean;
};

export function Check({ checked = false }: CheckProps) {
	const [isChecked, setIsChecked] = useState(checked);

	return (
		<div
			className={isChecked ? styles.Check : styles.Uncheck}
			onClick={() => {
				if (isChecked) setIsChecked(false);
				else setIsChecked(true);
			}}
		>
			{isChecked && <CheckIcon size={9} weight="bold" color="white" />}
			{!isChecked && (
				<CheckIcon size={9} weight="bold" color="var(--blue-dark)" />
			)}
		</div>
	);
}
