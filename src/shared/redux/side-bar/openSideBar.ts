import { createSlice, } from '@reduxjs/toolkit'

const initialState = {
  clickedItem: [],
  isSideBarOpen: true,
  clickedSub: 'Главная',
}

export const subMenuSlice = createSlice({
  name: 'subMenu',
  initialState,
  reducers: {
    openSub: (state, action) => {
      state.clickedItem.push(action.payload)
    },
    closeSub: (state, action) => {
      state.clickedItem.splice(state.clickedItem.indexOf(action.payload), 1)
    },
    openSideBar: state => {
      state.isSideBarOpen = !state.isSideBarOpen
    },
    clickSubItem: (state, action) => {
      state.clickedSub = action.payload
    },
    clearStore: state => {
      state.clickedSub = 'Главная'
    },
  },
})

export const { openSub, closeSub, openSideBar, clickSubItem, clearStore, } = subMenuSlice.actions
export default subMenuSlice.reducer
