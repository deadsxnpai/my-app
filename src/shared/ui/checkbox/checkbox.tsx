import React from 'react';
import clsx from 'clsx';
import styles from './checkbox.module.less';

type CheckboxProps = {
	label: string;
	checked: boolean;
	onCheckedChange: (checked: boolean) => void;
	disabled?: boolean;
	className?: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({
	label,
	checked,
	onCheckedChange,
	disabled = false,
	className,
}) => {
	return (
		<label className={clsx(styles.checkboxContainer, className)}>
			<input
				type='checkbox'
				checked={checked}
				disabled={disabled}
				onChange={(e) => onCheckedChange(e.target.checked)}
			/>
			<span className={styles.checkmark}></span>
			{label}
		</label>
	);
};
