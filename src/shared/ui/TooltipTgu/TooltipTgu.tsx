import React, { FC, } from 'react'
import { Tooltip, } from 'antd'
import { ITooltipProps, } from '@/shared/ui/TooltipTgu/types'

const TooltipTgu: FC<ITooltipProps> = ({ children, title, }) => {
  return <Tooltip placement="bottom" title={title}
    color="#43444D">
    {children}
  </Tooltip>
}

export default TooltipTgu
