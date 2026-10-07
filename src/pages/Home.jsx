import ApproachSection from "../components/home/ApproachSection";
import FavProductsSection from "../components/home/FavProductsSection";
import HeroSection from "../components/home/HeroSection";
import TopToolsSection from "../components/home/TopToolsSection";

export default function Home() {
    return (
        <>
            <TopToolsSection />

            <HeroSection />

            <FavProductsSection />

            <ApproachSection />
        </>
    );
}