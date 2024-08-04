import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home'
import Buy from './pages/buy/Buy'
import WhitePaper from './pages/whitepaper/WhitePaper'
import CommunityPage from './pages/community/CommunityPage'

const App = () => {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/buyRaven' element={<Buy />} />
          <Route path='/whitePaper' element={<WhitePaper />} />
          <Route path='/community' element={<CommunityPage />} />
          <Route path='/community' element={<CommunityPage />} />
          <Route path='/community' element={<CommunityPage />} />
          <Route path='/community' element={<CommunityPage />} />
          <Route path='/community' element={<CommunityPage />} />
          <Route path='/community' element={<CommunityPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App