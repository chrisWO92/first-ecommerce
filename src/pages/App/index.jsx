import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../components/Navbar'
import './App.css'
import { EcommerceProvider } from '../../context'
import CheckOutSideMenu from '../../components/CheckOutSideMenu'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/jewelery', element: <Home /> },
    { path: '/men-clothing', element: <Home /> },
    { path: '/women-clothing', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-order/last', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/*', element: <NotFound /> },
    { path: '/sing-in', element: <SignIn /> },
  ])
  return routes
}

function App() {

  return (
    <EcommerceProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <CheckOutSideMenu />
      </BrowserRouter>
    </EcommerceProvider>
  )
}

export default App
