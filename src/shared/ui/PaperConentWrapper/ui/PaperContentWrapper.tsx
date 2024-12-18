import React from 'react'
import { forwardRef, } from 'react'
import cls from './PaperContentWrapper.module.less'
import { classNames } from '@/shared/lib/classNames/classNames'

/**
 *
 * @param { 'sub-paper' } variant
 */
const PaperContainerWrapper = ({
  variant,
  style,
  className,
  ...props
}: any, ref: any) => (
  <div
    ref={ ref }
    className={classNames(cls.paperContainer, {}, [ className, ]) }
    style={ style }
    { ...props }
  >
    { props.children }
  </div>
)


export default forwardRef(PaperContainerWrapper)
