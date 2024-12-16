import React from 'react'
import './App.less'
import Scrollbars from 'react-custom-scrollbars-2'
import { HomePage } from '@/pages/HomePage'
import { Footer, Header } from '@/widgets'


const MainScreen = () => {
  return (
        <div className="page">
          <main className="main" id="scrollableDiv">
            <Scrollbars className="main-scroll-bar">
              <Header />
              <HomePage />
              <Footer />
            </Scrollbars>
          </main>
        </div>
  )
}


function App () {
  return (
    <MainScreen />
  )
}

export default App
