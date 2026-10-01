export default function HeroSection() {

    return (
        <section className="hero">

            <div className="hero-copy">
                <h1>
                    NEW<br />
                    COLLECTION
                </h1>

                <p>Summer<br />2024</p>

                <a href="#" className="shop-btn">
                    <span>Go To Shop</span>
                    <span className="arrow">⟶</span>
                </a>
            </div>

            <div className="hero-image">
                <img
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85"
                    alt="Fashion model"
                />
            </div>

            <div className="hero-image second">
                <img
                    src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85"
                    alt="Black fashion shirt"
                />
            </div>

            <div className="hero-controls">
                <button>‹</button>
                <button>›</button>
            </div>

        </section>
    );
}