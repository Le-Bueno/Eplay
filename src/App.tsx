import {createBrowserRouter, RouterProvider } from 'react-router-dom'


import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalCss } from './styles'
import { Router } from 'react-router-dom'


const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Banner/>
  }
])

function app() {
  return (
    <>
      <GlobalCss />
      <div className="Container">
        <Header />
       </div>
      <RouterProvider router={rotas}/>
    </>
  )
}
export default app
