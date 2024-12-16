import React, { Suspense, useEffect } from 'react'
import './App.less'
import Scrollbars from 'react-custom-scrollbars-2'
import { Footer, Header } from '@/widgets'
import AppRouter from './app-router/AppRouter'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import useGetRole from '@/shared/api/useGetRole/useGetRole'
import { ApolloClient } from './provider/ApolloProvider'
import AppProvider from './provider/AppProvider'
import { Provider } from 'react-redux'
import store from '@/shared/redux/store'
import Login from '@/pages/Login/Login'
import Logout from '@/pages/Logout/Logout'
import { SideBarTgu } from '@/widgets/SideBar'

const MainScreen = () => {
  
  const role = useGetRole()
  const location = useLocation()

  useEffect(() => {
    const page = document.querySelector('.main-scroll-bar')?.firstChild
    if (page) {
      // @ts-expect-error TS(2339): Property 'scrollTo' does not exist on type 'ChildN... Remove this comment to see the full error message
      page.scrollTo(0, 0)
    }
  }, [
    location,
  ])

  return (
        <div className="page">
          <SideBarTgu />
          <main className="main" id="scrollableDiv">
            <Scrollbars className="main-scroll-bar">
              <Header />
              <AppRouter />
              <Footer />
            </Scrollbars>
          </main>
        </div>
  )
}



const Root = () => {
  return (
    <ApolloClient>
      <AppProvider>
          <MainScreen />
      </AppProvider>
    </ApolloClient>
  )
}


const AppRoutes = () => {
  return (
    <Suspense fallback="">
      <Routes>
        <Route path="/*" element={ <Root /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/logout" element={ <Logout /> } />
      </Routes>
    </Suspense>
  )
}

function App () {
  // const stud = useSelector((state) => state.prof.studentInfo)
  
  return (
    <Provider store={ store }>
        <Router>
          <AppRoutes />
        </Router>
    </Provider>
  )
}

export default App
