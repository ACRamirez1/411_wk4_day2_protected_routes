import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
import Home from './containers/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth = (props) => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedin"] ? true : false;
}

// Write ProtectedRoute function here
const ProtectedRoute = ( props ) => {
    // // Check the cookies for a cookie called "loggedIn"
    // if (checkAuth(props)) {
    //     return <Route {...props} />
    // } else {
    //     return <Navigate to="/login" />
    // }
    const { component: Component, ...rest } = props;


    return checkAuth() === true ? <Component {...rest} /> : <Navigate to='/login' />

}

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<ProtectedRoute component={Home}/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/about" element={<ProtectedRoute component={About}/>} />
            <Route path="/car/:id" element={<ProtectedRoute component={Car}/>} />
        </Routes>
    );
};

export default Router;