import React from 'react';
import { HTMLAttributes, memo, ReactNode, } from 'react'
import { classNames, } from '@/shared/lib/classNames/classNames'
import cls from './Card.module.less'

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24' | '30';
export type CardBorder = 'round' | 'normal' | 'partial';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
    max?: boolean;
    padding?: CardPadding;
    border?: CardBorder;
    fullWidth?: boolean;
    fullHeight?: boolean;
}

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'gap_0',
  '8': 'gap_8',
  '16': 'gap_16',
  '24': 'gap_24',
  '30': 'gap_30',
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    variant = 'normal',
    max,
    padding = '8',
    border = 'normal',
    fullWidth,
    fullHeight,
    ...otherProps
  } = props

  const paddingClass = mapPaddingToClass[padding]

  return (
    <div
      className={classNames(
        cls.Card,
        {
          [cls.max]: max,
          [cls.fullHeight]: fullHeight,
          [cls.fullWidth]: fullWidth,
        },
        [
          className,
          cls[variant],
          cls[paddingClass],
          cls[border],
        ]
      )}
      {...otherProps}
    >
      {children}
    </div>
  )
})
