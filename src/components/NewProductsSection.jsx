export default function NewProductsSection() {

    return (
        <section className="products-section">

            <div className="section-heading">
                <h2>
                    NEW<br />
                    THIS WEEK
                    <sup>(50)</sup>
                </h2>

                <a href="#">See All</a>
            </div>

            <div className="product-grid">

                <article className="product-card">
                    <div className="product-image">
                        <img
                            src="https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=700&q=85"
                            alt="Embroidered shirt"
                        />
                        <button className="add">+</button>
                    </div>

                    <div className="product-meta">
                        <small>Velocet T-Shirt</small>
                        <span>$99</span>
                    </div>

                    <h3>Embroidered Crosscutter Shirt</h3>
                </article>


                <article className="product-card">
                    <div className="product-image">
                        <img
                            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85"
                            alt="White t-shirt"
                        />
                        <button className="add">+</button>
                    </div>

                    <div className="product-meta">
                        <small>Cotton T Shirt</small>
                        <span>$90</span>
                    </div>

                    <h3>Basic Slim Fit T-Shirt</h3>
                </article>


                <article className="product-card">
                    <div className="product-image">
                        <img
                            src="https://images.unsplash.com/photo-1583743814966-8936f37f4a05?auto=format&fit=crop&w=700&q=85"
                            alt="Printed t-shirt"
                        />
                        <button className="add">+</button>
                    </div>

                    <div className="product-meta">
                        <small>Henley T Shirt</small>
                        <span>$90</span>
                    </div>

                    <h3>Blurred Print T-Shirt</h3>
                </article>


                <article className="product-card">
                    <div className="product-image">
                        <img
                            src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=700&q=85"
                            alt="Cream shirt"
                        />
                        <button className="add">+</button>
                    </div>

                    <div className="product-meta">
                        <small>Crewneck T-Shirt</small>
                        <span>$90</span>
                    </div>

                    <h3>Full Sleeve Zipper</h3>
                </article>

            </div>

            <div className="slider-controls">
                <button>‹</button>
                <button>›</button>
            </div>

        </section>
    );
}