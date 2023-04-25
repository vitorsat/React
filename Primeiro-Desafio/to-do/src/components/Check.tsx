import { useState } from 'react';
import styles from './Check.module.css';
import { Check as CheckIcon } from '@phosphor-icons/react';

type CheckProps = {
	checked?: boolean;
	setIsChecked?: any;
};

export function Check({ checked, setIsChecked }: CheckProps) {
	return (
		<div
			className={checked ? styles.Check : styles.Uncheck}
			onClick={() => {
				if (checked) setIsChecked(false);
				else setIsChecked(true);
			}}
		>
			{checked && <CheckIcon size={9} weight="bold" color="white" />}
			{!checked && (
				<CheckIcon size={9} weight="bold" color="var(--blue-dark)" />
			)}
		</div>
	);
}
