import React from 'react'
import './MainItem.less'
import clsx from 'clsx'
import Icon from '@/shared/ui/Icon/Icon'
import { IconChevronUp, } from '@tabler/icons'
import { IconChevronDown, } from '@tabler/icons'
import TooltipTgu from '@/shared/ui/TooltipTgu/TooltipTgu'
import { TooltipPlacementVariant, } from '@/shared/ui/TooltipTgu/types'

function MainItem ({
  item,
  handleClick,
  isSideBarOpen,
  handleWrapColor,
  isOpen,
  isSubItemClicked,
  depth,
}: any) {
  return (
    <TooltipTgu
      children={
        <li onClick={ handleClick } >
          <div className={ clsx({
            'itemWrap': true,
            'mainItemSecond': handleWrapColor(item) && depth,
            'itemWrapOpen': handleWrapColor(item) && !isOpen(item.value),
            'subItemActive': handleWrapColor(item) && !isOpen(item.value),
          }) }>
            <Icon name={ item.icon } size={ 24 } color={ (handleWrapColor(item) && !isOpen(item.value)) ? '#7671DD' : '#2E2E3D' } home={ isSubItemClicked(item.value) ? '#7671DD' : '#2E2E3D' } />
            <h3 className={ clsx('mainItem', depth && 'mainItemSecond', !isSideBarOpen && 'mainItemHidden') }>{ item.value }</h3>
            { item.items ?
              <div className={ clsx('chevron', !isSideBarOpen && 'chevronHidden') }>
                { isOpen(item.value) ? <IconChevronUp size={ 15 } /> : <IconChevronDown size={ 15 } /> }
              </div>
              :
              <></>
            }
          </div>
        </li>
      }
      placement={TooltipPlacementVariant.right}
      title={!isSideBarOpen ? item.value : ''}
    />
  )
}


export default React.memo(MainItem)
