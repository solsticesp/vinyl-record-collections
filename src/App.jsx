import { Routes, Route } from 'react-router'
// import ApproachSection from "./components/home/ApproachSection";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
// import HeroSection from "./components/home/HeroSection";
// import FavProductsSection from "./components/home/FavProductsSection";
// import TopToolsSection from "./components/home/TopToolsSection";
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
// import SaveRecordsModal from './components/SaveRecordsModal';

function App() {
  return (
    <>
      <ScrollToTop />

      <Header />
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
            <Route path='signup' element={<SignUp />} />
            <Route path='login' element={<LogIn />} />
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
