import React from "react";
import '../styles/global.css';
import Layout from "../containers/Layout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import SendEmail from "../pages/SendEmail";
import MyAccount from "../pages/MyAccount";
import PasswordRecovery from "../pages/PasswordRecovery";
import CheckOut from "../pages/Checkout";
import Orders from "../pages/Orders";
import CreateAccount from "../pages/CreateAccount";
import { Routes, Route, BrowserRouter} from "react-router-dom";
const App = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />	
                    <Route exact path="/login" element={<Login />} />	
                    <Route exact path="/password-recovery" element={<PasswordRecovery />} />
                    <Route exact path="/send-email" element={<SendEmail/>} />
                    <Route exact path="/account" element={<MyAccount/>} />
                    <Route exact path="/signup" element={<CreateAccount/>} />
                    <Route exact path="/checkout" element={<CheckOut/>} />
                    <Route exact path="/orders" element={<Orders/>} />
                    <Route path="*" element={<NotFound />} />
                    
                </Routes>
            </Layout>
        </BrowserRouter>

    );
}
export default App;