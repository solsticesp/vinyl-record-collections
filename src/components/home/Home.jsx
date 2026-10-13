import { useCallback, useState } from "react";
import ApproachSection from "./approach-section/ApproachSection";
import FavProductsSection from "./fav-products-section/FavProductsSection";
import HeroSection from "./hero-section/HeroSection";
import TopToolsSection from "./top-tools-section/TopToolsSection";
import Spinner from "../shared/Spinner";

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