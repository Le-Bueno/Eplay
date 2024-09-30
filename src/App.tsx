import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles'

import ProductList from './components/ProductsList'

import Rotas from './routes'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'

function app() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="Container">
          <Header />
        </div>
        <Rotas />

        <Footer />

        <Cart />
      </BrowserRouter>
    </Provider>
  )
}
export default app
