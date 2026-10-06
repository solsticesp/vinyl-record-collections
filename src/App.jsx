import ApproachSection from "./components/ApproachSection";
// import CollectionsSection from "./components/CollectionsSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NewProductsSection from "./components/NewProductsSection";
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
      <NewProductsSection />

      {/* <!-- COLLECTIONS --> */}
      {/* <CollectionsSection /> */}

      {/* <!-- APPROACH --> */}
      <ApproachSection />

      {/* <!-- FOOTER --> */}
      <Footer />
    </>
  )
}

export default App
