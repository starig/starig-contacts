import React from 'react';
import './App.scss';
import Contacts from "./pages/Contacts/Contacts";
import {Route, Routes, Navigate} from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import {useSelector} from "react-redux";
import {RootState} from "./redux/store";

function App() {
    const {isAuthorized} = useSelector((state: RootState) => state.user)
    return (
        <Routes>
            <Route>
            </Route>
            <Route path={'/'} element={!isAuthorized ? <Navigate to={'/login'} /> : <Contacts/>}/>
            <Route path={'/login'} element={isAuthorized ? <Navigate to={'/'} /> : <Auth />}/>
        </Routes>
    );
}

export default App;
