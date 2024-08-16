import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../Login/Register";
import ProductList from "../Product/ProductList";
import ProfilePage from "../Profile/ProfilePage";
import ProductPage from "../Product/ProductPage";
import Cart from "../Cart/Cart";
import PaymentPage from "../Product/PaymentPage";
import OrderConfirmation from "../Order/OrderConfirmation";
import Wishlist from "../Cart/Wishlist";
import PaymentComponent from "../Order/PaymentComponent";
import Checkout from "../Order/Checkout";



const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <SignUp /> },
    { path: '/category/:type', element: <ProductList /> },
    { path: '/profile', element: <ProfilePage /> },
    { path: '/product/:productId', element: <ProductPage /> },
    { path: '/cart', element: <Cart /> },
    // { path: '/payment', element: <PaymentPage /> },
    { path: '/orderconfirmation', element: <OrderConfirmation /> },
    { path: '/wishlist', element: <Wishlist /> },
    { path: '/checkout', element: <Checkout /> },
    { path: '/payment' , element: <PaymentComponent/> }
]);

export default router;


