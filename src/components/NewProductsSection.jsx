export default function NewProductsSection() {

    return (
        <section className="products-section">

            <div className="section-heading">
                <h2>
                    COMMUNITY<br />
                    FAVORITES
                    <sup>(50)</sup>
                </h2>

                <a href="#">See All</a>
            </div>

            <div className="product-grid">

                <article className="product-card">
                    <div className="product-image">
                        <img
                            src="https://muzikercdn.com/uploads/products/14600/1460015/thumb_large_d_gallery_base_4b78cbb7.JPG"
                            alt="Nirvana"
                        />
                        <button className="add">+</button>
                    </div>

                    <div className="product-meta">
                        <small>LP</small>
                        <span>29€</span>
                    </div>

                    <h3>Nirvana - Nevermind</h3>
                </article>


                <article className="product-card">
                    <div className="product-image">
                        <img
                            src="https://muzikercdn.com/uploads/products/29720/2972022/thumb_large_d_gallery_base_d3b1907b.jpg"
                            alt="Marilyn Manson"
                        />
                        <button className="add">+</button>
                    </div>

                    <div className="product-meta">
                        <small>Green/Blue Marble Coloured LP</small>
                        <span>39€</span>
                    </div>

                    <h3>Marilyn Manson - One Assassination Under God - Chapter 2</h3>
                </article>


                <article className="product-card">
                    <div className="product-image">
                        <img
                            src="https://muzikercdn.com/uploads/products/3662/366235/thumb_large_d_gallery_base_c5ec49c4.jpg"
                            alt="Sade"
                        />
                        <button className="add">+</button>
                    </div>

                    <div className="product-meta">
                        <small>2 LP</small>
                        <span>30€</span>
                    </div>

                    <h3>Sade - The Best of Sade</h3>
                </article>


                <article className="product-card">
                    <div className="product-image">
                        <img
                            src="https://muzikercdn.com/uploads/products/18002/1800202/main_dc513bca.jpg"
                            alt="Lana Del Rey"
                        />
                        <button className="add">+</button>
                    </div>

                    <div className="product-meta">
                        <small>2 LP</small>
                        <span>50€</span>
                    </div>

                    <h3>Lana Del Rey - Born To Die</h3>
                </article>

            </div>

            <div className="slider-controls">
                <button>‹</button>
                <button>›</button>
            </div>

        </section>
    );
}