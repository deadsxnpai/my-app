import React from 'react'
import { useMemo, } from 'react'
import './SideBar.less'
import { IconMenu2, } from '@tabler/icons'
import clsx from 'clsx'
import MainItem from '../MainItem/MainItem'
import SubItem from '../SubItem/SubItem'
import { DOMAIN as currentURL, } from '@/shared/constants/endpoints'

function SideBar ({
  navItems,
  isSideBarOpen,
  handleWrapColor,
  itemsFilter,
  onMainItemClick,
  onSubItemClick,
  isSubOpen,
  isSubItemClicked,
  sideBarShrink,
}: any) {
  function renderSideBar (first: any, previos: any) {
    return first.map((i: any, index: any) => {
      if (i.items && (!i.environment || i.environment === currentURL)) {
        const roleItems = itemsFilter(i.items)
        return (
          <div key={ index } className={ clsx(i.depth && !isSubOpen(previos) && 'mainHidden') } >
            <MainItem depth={ i.depth } item={ i } handleWrapColor={ handleWrapColor } handleClick={ () => onMainItemClick(i.value) } isSideBarOpen={ isSideBarOpen } isSubItemClicked={ isSubItemClicked } isOpen={ isSubOpen } />
            <ul className="subMenuOpen">
              { renderSideBar(roleItems, i.value) }
            </ul>
          </div>
        )
      }
      return ((!i.environment || i.environment === currentURL) && <SubItem key={ i.value } item={ i } i={ previos } handleClick={ () => onSubItemClick(i.path, i.value) } isSideBarOpen={ isSideBarOpen } isOpen={ isSubOpen } isSubItemClicked={ isSubItemClicked } />)
    })
  }

  const navMenu = useMemo(() => (
    <aside id="sidebar" className={ clsx('sideBar', !isSideBarOpen && 'sideBarClosed') }>
      <div className="sideBarHeaderWrap">
        <div className="sideBarHeader">
          <button type="button" onClick={ sideBarShrink }>
            <div className='logo' color="#ffffff" />
          </button>
        </div>
      </div>
      <ul>
        { renderSideBar(navItems, 'Главная') }
      </ul>
    </aside>
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [
    navItems,
  ])

  return (navMenu)
}

export default SideBar