import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import Profile from 'routes/Profile';
import Navigation from './Navigation';

const AppRouter = ({isLoggedIn, userObj, refreshUser }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation userObj={userObj}/>}
            {isLoggedIn ? (
                <div
                style={{
                    maxWidth: 890,
                    width: "100%",
                    margin: "0 auto",
                    marginTop: 80,
                    display: "flex",
                    justifyContent: "center",
                }}>
                <Routes>
                <>
                <Route path = "/" element={<Home userObj={userObj} />}/>
                <Route path = "/profile" element={<Profile refreshUser={refreshUser} userObj={userObj} />}/>
                </>
                </Routes>
                </div>
                ) : (
                <Routes>
                    <Route path="/" element={<Auth />}/>
                </Routes>
                )}
        </Router>
    )
}

export default AppRouter;