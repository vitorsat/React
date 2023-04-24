import styles from './Check.module.css';
import * as Checkbox from '@radix-ui/react-checkbox';
import CheckIcon from '../Assets/CheckIcon.svg';

type CheckProps = {
	checked: boolean;
};

export function Check({ checked = true }: CheckProps) {
	return (
		<Checkbox.Root className={styles.CheckboxRoot} id="checkbox">
			<Checkbox.Indicator className={styles.CheckoxIndicator}>
				<img src={CheckIcon} alt="Check" />
			</Checkbox.Indicator>
		</Checkbox.Root>
	);
}
