import { createSlice, } from '@reduxjs/toolkit'
import { AuthMe, } from './types'
import { UserRoleType } from '@/entities/userRole/model/userRoleTypes'


interface AuthInitialState {
  isAuth: boolean,
  me: false | AuthMe,
  userType: null | UserRoleType,
  choosenRole: null | UserRoleType,
  userPosition: null,
  access_token: null,
  isLogged: boolean,
}

const initialState: AuthInitialState = {
  isAuth: false,
  me: false,
  userType: null,
  userPosition: null,
  choosenRole: null,
  access_token: null,
  isLogged: false,
}


export const userDataSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.isAuth = true
    },

    logoff: state => {
      state.isAuth = false
    },

    setRole: (state, action) => {
      state.userType = action.payload
    },

    setPosition: (state, action) => {
      state.userPosition = action.payload
    },

    updateME: (state, action) => {
      state.me = action.payload
    },

    clearME: state => {
      state.me = false
    },

    chooseRole: (state, action) => {
      state.choosenRole = action.payload
    },

    setToken: (state, action) => {
      if (!action.payload) {
        localStorage.removeItem('access_token')
        state.access_token = null
      } else {
        localStorage.setItem('access_token', action.payload)
      }
      state.access_token = action.payload
    },
    setLogged: (state, action) => {
      state.isLogged = action.payload
    },
  },
})


export const {
  login,
  logoff,
  setRole,
  clearME,
  updateME,
  setPosition,
  chooseRole,
  setToken,
  setLogged,
} = userDataSlice.actions


export default userDataSlice.reducer
