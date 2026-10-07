import { Routes, Route } from 'react-router'
// import ApproachSection from "./components/home/ApproachSection";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
// import HeroSection from "./components/home/HeroSection";
// import FavProductsSection from "./components/home/FavProductsSection";
// import TopToolsSection from "./components/home/TopToolsSection";
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Contacts from './pages/Contacts';
import Records from './pages/Records';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import RecordDetails from './pages/RecordDetails';
import ScrollToTop from './components/layout/ScrollToTop';
import AdminDashboard from './pages/AdminDashboard';
// import SaveList from './pages/SaveList';
// import SaveRecordsModal from './components/SaveRecordsModal';

function App() {
  return (
    <>

      {/* <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/records'>
          <Route index element={<Records />} />
          <Route path=':id' element={<RecordDetails />} />
        </Route>

        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/saved' element={<SaveList />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='*' element={<NotFound />} />
      </Routes> */}

      {/* <SaveRecordsModal /> */}

      <ScrollToTop />

      <Header />

      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='records' element={<Records />} />
          <Route path='records/:id' element={<RecordDetails />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<LogIn />} />
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>

      <Footer />
    </>
  )
}

export default App
