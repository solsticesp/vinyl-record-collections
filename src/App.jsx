import { Routes, Route } from 'react-router'
import ApproachSection from "./components/ApproachSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FavProductsSection from "./components/FavProductsSection";
import TopToolsSection from "./components/TopToolsSection";
import About from './components/About';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Contacts from './components/Contacts';
import Records from './components/Records';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Record from './components/Record';
import SaveList from './components/SaveList';
// import SaveRecordsModal from './components/SaveRecordsModal';

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/records' element={<Records />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/saved' element={<SaveList />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/record' element={<Record />} />
      </Routes>

      {/* <SaveRecordsModal /> */}

      {/* <!-- HEADER --> */}
      <Header />

      {/* <!-- CATEGORY / SEARCH --> */}
      <TopToolsSection />

      {/* <!-- HERO --> */}
      <HeroSection />

      {/* <!-- NEW THIS WEEK --> */}
      <FavProductsSection />

      {/* <!-- APPROACH --> */}
      <ApproachSection />

      {/* <!-- FOOTER --> */}
      <Footer />
    </>
  )
}

export default App
