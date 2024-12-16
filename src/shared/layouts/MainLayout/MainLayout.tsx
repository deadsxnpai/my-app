import React from 'react';
import cls from './MainLayout.module.less'
import { ReactNode, } from 'react'

interface MainLayoutProps {
  className?:string,
  children?: ReactNode;
}
export const MainLayout = (props: MainLayoutProps): JSX.Element => {
  const {
    className,
    children,
  } = props

  return <>
    <div className={className || cls.main}>
      {children}
    </div>
  </>
}
