import HeroSectionItem from "./HeroSectionItem";


export default function HeroSection() {

    return (
        <section className="hero">

            <div className="hero-copy">
                <h1>
                    FRESH<br />
                    RECORDS
                </h1>

                <p>
                    Autumn<br />
                    '26
                </p>

                <a href="#" className="shop-btn">
                    <span>Go To Recently Added</span>
                    <span className="arrow">⟶</span>
                </a>
            </div>

            <div className="hero-images">

                <HeroSectionItem imageUrl="https://muzikercdn.com/uploads/products/29720/2972035/thumb_large_d_gallery_base_616cd03f.jpg" artist="The Rolling Stones" />

                <HeroSectionItem imageUrl="https://muzikercdn.com/uploads/products/26678/2667806/thumb_large_d_gallery_base_ab316e41.jpg" artist="Charli XCX" />

                <HeroSectionItem imageUrl="https://muzikercdn.com/uploads/products/25232/2523238/thumb_large_d_gallery_base_0405d4bb.jpg" artist="Judas Priest" />

            </div>

            <div className="hero-controls">
                <button className="prev-btn">‹</button>
                <button className="next-btn">›</button>
            </div>

        </section>
    );
}