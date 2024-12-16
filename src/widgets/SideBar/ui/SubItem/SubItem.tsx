import './SubItem.less'
import clsx from 'clsx'
import TooltipTgu from '@/shared/ui/TooltipTgu/TooltipTgu'
import { TooltipPlacementVariant, } from '@/shared/ui/TooltipTgu/types'
import React from 'react'
import Icon from '@/shared/ui/Icon/Icon'


function SubItem ({
  i,
  item,
  handleClick,
  isSideBarOpen,
  isOpen,
  isSubItemClicked,
}: any) {
  return (
    <TooltipTgu
      children={
        <li onClick={ handleClick } className={ clsx({
          'subItem': true,
          'subItemOpen': isOpen(i),
        }) } >
          <div className={ clsx({
            'itemWrap': true,
            'subItemActive': isSubItemClicked(item.value),
          }) } >
            <Icon name={ item.icon } color={ isSubItemClicked(item) ? '#7671DD' : '#2E2E3D' } />
            <div className={ clsx('mainItem', !isSideBarOpen && 'mainItemHidden', (item.value === 'Главная' /* || item.value === "Эффективный контракт" */) && 'subMain') }>{ item.value }</div>
          </div>
        </li>
      }
      title={!isSideBarOpen ? item.value : ''}
      placement={TooltipPlacementVariant.bottom}/>
  )
}


export default SubItem
