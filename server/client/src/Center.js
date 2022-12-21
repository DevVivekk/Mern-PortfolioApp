import React from 'react'
import Page1 from './comp/Page-1'
import Page2 from './comp/page-2'
import { Page3 } from './comp/page-3'
import Page22 from './comp/page2'
import Page4 from './comp/page4'
import Page5 from './comp/page5'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './logins/login'
import Signup from './logins/signup'

function Center() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/home' element={[<Page1 />,<Page22 />,<Page3 />,<Page4 />,<Page2 />,<Page5 />]} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Signup />} />
        </Routes>
       </BrowserRouter>

    </>
  )
}

export default Center