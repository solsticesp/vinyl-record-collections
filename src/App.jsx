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
import AdminDashboard from './components/admin/admin-dashboard/AdminDashboard';
import SaveList from './components/save-list/SaveList';
import Collections from './components/collections/Collections';
import CollectionRecords from './components/collection-records/CollectionRecords';
import { useState } from 'react';
import Logout from './components/logout/Logout';
import { authApi } from './api';


function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(null);

    const registerHandler = async (userData) => {
        try {
            const result = await authApi.register(userData);

            setAuth(result);

            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    };

    const loginHandler = async (userData) => {
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

    return (
        <>
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
                        <Route path='list' element={<SaveList />} />
                        <Route path='contacts' element={<Contacts />} />
                    </Route>

                    {/* Guest only */}
                    <Route>
                        <Route path='signup' element={<SignUp onSignup={registerHandler} />} />
                        <Route path='login' element={<LogIn onLogin={loginHandler} />} />
                        <Route path='logout' element={<Logout onLogout={logoutAction} />} />
                    </Route>

                    {/* Admin only */}
                    <Route>
                        <Route path='dashboard' element={<AdminDashboard />} />
                    </Route>
                </Routes>
            </section >

            <Footer />
        </>
    )
}

export default App
