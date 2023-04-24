import styles from './Check.module.css';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

type CheckProps = {
	checked: boolean;
};

export function Check({ checked = true }: CheckProps) {
	return (
		<Checkbox.Root className={styles.CheckboxRoot} id="checkbox">
			<Checkbox.Indicator className={styles.CheckoxIndicator}>
				<CheckIcon /> {/*Acionar o svg do assets*/}
			</Checkbox.Indicator>
		</Checkbox.Root>
	);
}
