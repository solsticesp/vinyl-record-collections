import { Routes, Route, useNavigate } from 'react-router'
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from './components/about/About';
import Home from './components/home/Home';
import Contacts from './components/contacts/Contacts';
import Records from './components/records/Records';
import SignUp from './components/signup/SignUp';
import LogIn from './components/login/LogIn';
import RecordDetails from './components/record-details/RecordDetails';
import ScrollToTop from './components/shared/ScrollToTop';
import UserDashboard from './components/user/user-dashboard/UserDashboard';
import SaveList from './components/save-list/SaveList';
import Collections from './components/collections/Collections';
import CollectionRecords from './components/collection-records/CollectionRecords';
import { useState } from 'react';
import Logout from './components/logout/Logout';
import { authApi } from './api';
import AuthContext from './contexts/auth-context';


function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(null);

    const register = async (userData) => {
        try {
            const result = await authApi.register(userData);

            setAuth(result);

            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    };

    const login = async (userData) => {
        try {
            const result = await authApi.login(userData);

            setAuth(result);

            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    };

    const logoutAction = () => {
        setAuth(null);
    };

    const contextValue = {
        accessToken: auth?.access_token,
        user: auth?.user,
        isAuthenticated: !!auth,
        register,
        login,
    }

    return (
        <AuthContext.Provider value={contextValue}>
            <ScrollToTop />

            <Header isAuthenticated={!!auth} />

            <section id="main">
                <Routes>
                    <Route>
                        <Route path='/' element={<Home />} />
                        <Route path='about' element={<About />} />
                        <Route path='records' element={<Records />} />
                        <Route path='records/:id' element={<RecordDetails />} />
                        <Route path='collections' element={<Collections />} />
                        <Route
                            path="/collections/:categoryId"
                            element={<CollectionRecords />}
                        />
                        <Route path='contacts' element={<Contacts />} />
                    </Route>

                    {/* Guest only */}
                    <Route>
                        <Route path='signup' element={<SignUp onSignup={register} />} />
                        <Route path='login' element={<LogIn onLogin={login} />} />
                    </Route>

                    {/* User only */}
                    <Route>
                        <Route path='collection' element={<UserDashboard />} />
                        <Route path='list' element={<SaveList />} />
                        <Route path='logout' element={<Logout onLogout={logoutAction} />} />
                    </Route>
                </Routes>
            </section >

            <Footer />
        </AuthContext.Provider>
    )
}

export default App
