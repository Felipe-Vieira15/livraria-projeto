import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../screens/Login';

export default function RoutesRoot() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<HomeScreen/>} path="/">
                    <Route element={<Login/>} path="/"/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}