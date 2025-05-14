import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/shared/lib/utils';
import styles from './cls.module.less';

type Variant =
	| 'default'
	| 'destructive'
	| 'outline'
	| 'secondary'
	| 'ghost'
	| 'link';
type Size = 'default' | 'sm' | 'lg' | 'icon';

type ButtonProps = React.ComponentProps<'button'> & {
	variant?: Variant;
	size?: Size;
	asChild?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
	className,
	variant = 'default',
	size = 'default',
	asChild = false,
	...props
}) => {
	const Comp = asChild ? Slot : 'button';

	const classes = cn(styles.button, styles[variant], styles[size], className);

	return (
		<Comp
			data-slot='button'
			className={classes}
			{...props}
		/>
	);
};
