import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.less';
import React from 'react';

export type TextVariant = 'primary' | 'error' | 'accent';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 'xs' | 's' | 'm' | 'l';

export type TextColor = 'primary' | 'secondary' | 'error' | 'accent' | 'white';
export type TextWeight = 'normal' | 'medium' | 'bold';

interface TextProps {
	className?: string;
	title?: string;
	text?: string;
	variant?: TextVariant;
	align?: TextAlign;
	size?: TextSize;
	bold?: boolean;
	pointer?: boolean;
	color?: TextColor;
	weight?: TextWeight;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToClass: Record<TextSize, string> = {
	xs: cls.size_xs,
	s: cls.size_s,
	m: cls.size_m,
	l: cls.size_l,
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
	xs: 'h3',
	s: 'h3',
	m: 'h2',
	l: 'h1',
};

export const Text = memo((props: TextProps) => {
	const {
		className,
		text,
		title,
		align = 'left',
		size = 'm',
		bold,
		pointer = false,
		color,
		weight = 'normal',
	} = props;

	const HeaderTag = mapSizeToHeaderTag[size];
	const sizeClass = mapSizeToClass[size];

	const additionalClasses = [
		className,
		cls[align],
		sizeClass,
		cls[color ?? ''],
		cls[weight],
	];

	return (
		<div
			className={classNames(
				cls.Text,
				{ [cls.bold]: bold, [cls.pointer]: pointer },
				additionalClasses
			)}>
			{title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	);
});
