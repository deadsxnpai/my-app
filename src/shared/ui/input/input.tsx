import * as React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './cls.module.less';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
	return (
		<input
			type={type}
			data-slot='input'
			className={cn(styles.input, className)}
			{...props}
		/>
	);
}

export { Input };
