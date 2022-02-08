import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../feature/home/page';
import Login from '../feature/login/page'
import { useController } from '../core/controller';
// import {useController} from '../feature/login/controller'
import { useEffect } from 'react';

export default function MainRoutes() {
    const globalController = useController()

    useEffect(() => {
        console.log(globalController.user);
        console.log(localStorage.getItem('user'))
    }, [globalController.user]);


    return (
        <Router>
            <Routes>
                {  
                    localStorage.getItem('user') ? (
                        <>
                            <Route path="*" element={<Home to="/" replace />} />
                            {/* <Route  path="/" element={<Home />} /> */}

                        </>
                    ) : (
                        <>
                            <Route path="*" element={<Login to="/login" replace />} />

                            {/* <Route  path="/login" element={<Login />} /> */}
                        </>
                    )
                } 
{/* 
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/" element={<Home />} /> */}
            </Routes>
        </Router>
    )
}