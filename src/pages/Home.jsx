import { useCallback, useState } from "react";
import ApproachSection from "../components/home/ApproachSection";
import FavProductsSection from "../components/home/FavProductsSection";
import HeroSection from "../components/home/HeroSection";
import TopToolsSection from "../components/home/TopToolsSection";
import Spinner from "../components/layout/Spinner";

export default function Home() {
    const [loading, setLoading] = useState(true);

    const handleCategoriesLoaded = useCallback(() => {
        setLoading(false);
    }, []);

    return (
        <>
            {loading && <Spinner />}

            <div style={{ visibility: loading ? "hidden" : "visible" }}>
                <TopToolsSection onLoaded={handleCategoriesLoaded} />
                <HeroSection />
                <FavProductsSection />
                <ApproachSection />
            </div>
        </>
    );

}