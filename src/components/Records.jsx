export default function Records() {
    return (
        <div className="page records-page">

            <section className="page-intro">
                <div>
                    <span className="eyebrow">THE COLLECTION</span>
                    <div className="section-heading">
                        <h2>
                            ALL<br />
                            RECORDS<sup>(120)</sup>
                        </h2>
                    </div>

                </div>

                <div className="page-intro-text">
                    <p>
                        Explore our complete collection of vinyl records,
                        from timeless classics to new releases.
                    </p>
                </div>
            </section>

            <section className="catalog-section">

                <div className="catalog-toolbar">

                    <div className="catalog-actions">

                        <select>
                            <option>Featured</option>
                            <option>Newest</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Artist A-Z</option>
                        </select>

                    </div>

                </div>


                <div className="product-grid">

                    <article className="product-card">
                        <div className="product-image">
                            <img src="https://muzikercdn.com/uploads/products/14600/1460015/thumb_large_d_gallery_base_4b78cbb7.JPG" alt="Record" />
                            <button className="add-btn">+</button>
                        </div>

                        <div className="product-meta">
                            <small className="category">Rock &amp; Metal</small>
                            <span className="price">29€</span>
                        </div>

                        <h3 className="title">
                            Nirvana - Nevermind
                        </h3>
                    </article>

                    <article className="product-card">
                        <div className="product-image">
                            <img src="IMAGE_URL" alt="Record" />
                            <button className="add-btn">+</button>
                        </div>

                        <div className="product-meta">
                            <small className="category">Pop</small>
                            <span className="price">39€</span>
                        </div>

                        <h3 className="title">
                            Artist - Album
                        </h3>
                    </article>

                    <article className="product-card">
                        <div className="product-image">
                            <img src="IMAGE_URL" alt="Record" />
                            <button className="add-btn">+</button>
                        </div>

                        <div className="product-meta">
                            <small className="category">Jazz &amp; Soul</small>
                            <span className="price">35€</span>
                        </div>

                        <h3 className="title">
                            Artist - Album
                        </h3>
                    </article>

                    <article className="product-card">
                        <div className="product-image">
                            <img src="IMAGE_URL" alt="Record" />
                            <button className="add-btn">+</button>
                        </div>

                        <div className="product-meta">
                            <small className="category">Classical</small>
                            <span className="price">42€</span>
                        </div>

                        <h3 className="title">
                            Artist - Album
                        </h3>
                    </article>

                </div>


                <div className="load-more">
                    Load More
                </div>

            </section>

        </div>
    );
}