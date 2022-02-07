import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../feature/home/page';
import Login from '../feature/login/page'

export default function MainRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}