import ApproachSection from "./components/ApproachSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FavProductsSection from "./components/FavProductsSection";
import TopToolsSection from "./components/TopToolsSection";

function App() {
  return (
    <>
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
