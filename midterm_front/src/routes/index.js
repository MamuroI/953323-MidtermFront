import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../feature/home/page';
import Login from '../feature/login/page'
import { useController } from '../core/controller';
import { useEffect } from 'react';

export default function MainRoutes() {
    const globalController = useController()

    useEffect(() => {
        // console.log(globalController.user);
    }, [globalController.user]);


    return (
        <Router>
            <Routes>
                {/* {
                    globalController.user ? (
                        <>
                            <Route exact path="/login" element={<Login />} />
                        </>
                    ) : (
                        <>
                            <Route exact path="/" element={<Home />} />
                        </>
                    )
                    
                } */}
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}