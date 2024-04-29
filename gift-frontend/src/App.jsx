import { lazy } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import LazySuspense from './components/LazySuspense'
import Home from './pages/user/Home'
import AdminHome from './pages/admin/AdminHome'
import About from './components/About'
import Contact from './components/Contact'
import Cart from './pages/user/Cart'
import Product from './pages/user/Product'
// import PaymentPage from './components/PaymentPage'
import AddGifts from './pages/admin/AddGifts'
import OrdersList from './pages/admin/OrdersList'
import PaymentHistory from './pages/admin/PaymentHistory'
// import RazorpayComponent from './pages/RazorPayComponent'
const LazyLogin = lazy(() => import("./pages/auth/Login"))
const LazyRegister = lazy(() => import("./pages/auth/Register"))
const LazyForgotPassword = lazy(() => import("./pages/auth/ForgetPassword"))
const LazyMain = lazy(() => import("./pages/user/Main"))
const LazyAdminMain = lazy(() => import("./pages/admin/AdminMain"))
const LazyTerms = lazy(() => import("./components/TermsCondition"))
const LazyFAQ = lazy(() => import("./components/FAQ"))

const UserRoutes = () => {

  return (
    <LazyMain>
      <Routes>
        <Route path="/" element={<Navigate to={'/app/user/home'} />} />
        <Route path="/home" element={<LazySuspense component={Home} />} />
        <Route path="/about" element={<LazySuspense component={About} />} />
        <Route path="/contact" element={<LazySuspense component={Contact} />} />
        <Route path="/product" element={<LazySuspense component={Product} />} />
        <Route path="/cart" element={<LazySuspense component={Cart} />} />
        {/* <Route path="/payment" element={<LazySuspense component={RazorpayComponent} />} /> */}
      </Routes>
    </LazyMain>
  )
}

const AdminRoutes = () => {

  return (
    <LazyAdminMain>
      <Routes>
        <Route path="/" element={<Navigate to={'/app/admin/home'} />} />
        <Route path="/home" element={<LazySuspense component={AdminHome} />} />
        <Route path="/add" element={<LazySuspense component={AddGifts} />} />
        <Route path="/orders" element={<LazySuspense component={OrdersList} />} />
        <Route path="/payment-history" element={<LazySuspense component={PaymentHistory} />} />
      </Routes>
    </LazyAdminMain>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/app/login" />} />
      <Route path="/app/login" element={<LazySuspense component={LazyLogin} />} />
      <Route path="/app/register" element={<LazySuspense component={LazyRegister} />} />
      <Route path="/app/forgot-password" element={<LazySuspense component={LazyForgotPassword} />} />
      <Route path="/app/termscondition" element={<LazySuspense component={LazyTerms} />} />
      <Route path="/app/faq" element={<LazySuspense component={LazyFAQ} />} />
      <Route path="/app/user/*" element={<LazySuspense component={UserRoutes} />} />
      <Route path="/app/admin/*" element={<LazySuspense component={AdminRoutes} />} />
    </Routes>
  )
}

export default App
