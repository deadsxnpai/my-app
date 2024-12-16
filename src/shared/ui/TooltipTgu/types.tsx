import { ReactElement, } from 'react'


export enum TooltipPlacementVariant {
  topLeft = 'topLeft',
  top = 'top',
  topRight = 'topRight',
  leftTop = 'leftTop',
  left = 'left',
  leftBottom = 'leftBottom',
  rightTop = 'rightTop',
  right = 'right',
  rightBottom = 'rightBottom',
  bottomLeft = 'bottomLeft',
  bottom = 'bottom',
  bottomRight = 'bottomRight'
}

export interface ITooltipProps {
  title: string;
  children: ReactElement;
  placement: TooltipPlacementVariant;
}
