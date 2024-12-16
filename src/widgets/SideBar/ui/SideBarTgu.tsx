import useRedirect from '@/shared/api/useRedirect/useRedirect'
import SideBar from './SideBar/SideBar'
import { navItems, } from '@/shared/constants/constants'
import React from 'react'
import { useSelector, useDispatch, } from 'react-redux'
import { clickSubItem, closeSub, openSub, openSideBar } from '@/shared/redux/side-bar/openSideBar'



function SideBarTgu () {
  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  const defaultRole = useSelector(state => state.auth.userType)
  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  const choosenRole = useSelector(state => state.auth.choosenRole)

  const userType = choosenRole ? choosenRole : defaultRole
  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  const clickedItem = useSelector(state => state.sub.clickedItem)
  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  const isSideBarOpen = useSelector(state => state.sub.isSideBarOpen)
  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  const clickedSub = useSelector(state => state.sub.clickedSub)
  const dispatch = useDispatch()
  const redirect = useRedirect()


  function itemsFilter (arr: any) {
    return arr.filter((i: any) => i.role.includes(userType))
  }

  const currentItems = itemsFilter(navItems)


  function isSubItemClicked (i: any) {
    return clickedSub === i
  }


  function openSubMenu (key: any) {
    if (clickedItem.includes(key)) {
      dispatch(closeSub(key))
    } else {
      dispatch(openSub(key))
    };
  }

  function isSubOpen (i: any) {
    // return i.items.some(el => clickedItem.includes(el.value))
    return clickedItem.includes(i) || i === 'Главная'
  }

  function handleWrapColor (i: any) {
    if (i.depth === 2) {
      return i.items.some((val: any) => isSubItemClicked(val.value))
    }
    return i.items.some((el: any) => clickedItem.includes(el.value) || clickedSub.includes(el.value) || el.items?.some((o: any) => clickedSub.includes(o.value)))
  }

  function redirectToPath (path: any, val: any) {
    const page = document.querySelector('.main-scroll-bar')?.firstChild
    dispatch(clickSubItem(val))
    redirect(path)
    // @ts-expect-error TS(2531): Object is possibly 'null'.
    page.scrollTo(0, 0)
  }

  function sideBarShrink () {
    dispatch(openSideBar())
  }


  return (
    <SideBar navItems={ currentItems } itemsFilter={ itemsFilter } isSideBarOpen={ isSideBarOpen }
      onMainItemClick={ openSubMenu } handleWrapColor={ handleWrapColor } sideBarShrink={ sideBarShrink } isSubOpen={ isSubOpen } isSubItemClicked={ isSubItemClicked } onSubItemClick={ redirectToPath } />
  )
}

export default SideBarTgu
