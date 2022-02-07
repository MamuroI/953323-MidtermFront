import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../feature/home/page';
import Login from '../feature/login/page'

export default function MainRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} /> 
            </Routes>
        </Router>
    )
}