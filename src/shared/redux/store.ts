import { configureStore, } from '@reduxjs/toolkit'
import { combineReducers, } from 'redux'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import stateReconciler from 'redux-persist/lib/stateReconciler/autoMergeLevel1'
import { setupListeners, } from '@reduxjs/toolkit/query'
import { authApi } from './api/authApi'
import authSlice from './auth-slice/auth'
import subMenuSlice from './side-bar/openSideBar'


const rootReducer = combineReducers({
  auth: authSlice,
  [authApi.reducerPath]: authApi.reducer,
  sub: subMenuSlice,
})

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler,
  whitelist: [
    'auth',
    'sub',
  ],
}

type RootReducer = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer<RootReducer>(persistConfig, rootReducer)


export type RootState = ReturnType<typeof rootReducer>
const store = configureStore({
  devTools: true,
  reducer: persistedReducer,
  middleware: getDM => {
    const middlewares = getDM({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }).concat(authApi.middleware)
    return middlewares
  },
})

export const persistor = persistStore(store)

setupListeners(store.dispatch)


export type AppDispatch = typeof store.dispatch

export default store
