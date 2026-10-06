export default function Records() {
    return (
        <div className="page records-page">

            <section className="catalog-header">
                <div>
                    <span className="eyebrow">THE COLLECTION</span>

                    <div className="section-heading">
                        <h1>
                            ALL<br />
                            RECORDS<sup>(120)</sup>
                        </h1>
                    </div>

                </div>

                <p className="catalog-intro">
                    Explore our complete collection of vinyl records,
                    from timeless classics to new releases.
                </p>
            </section>


            <div className="catalog-toolbar">

                <div className="catalog-count">
                    120 RECORDS
                </div>

                <div className="catalog-actions">

                    <select>
                        <option>FEATURED</option>
                        <option>NEWEST</option>
                        <option>PRICE: LOW TO HIGH</option>
                        <option>PRICE: HIGH TO LOW</option>
                        <option>ARTIST A–Z</option>
                    </select>

                </div>

            </div>


            <section className="record-grid">

                <article className="record-card">

                    <div className="record-card-image">
                        <img
                            src="https://muzikercdn.com/uploads/products/14600/1460015/thumb_large_d_gallery_base_4b78cbb7.JPG"
                            alt="Nirvana - Nevermind"
                        />

                        <button className="add-btn">
                            +
                        </button>
                    </div>

                    <div className="record-card-info">

                        <div>
                            <h2>Nevermind</h2>
                            <p>Nirvana</p>
                        </div>

                        <span>29€</span>

                    </div>

                    <div className="record-card-meta">
                        <span>ROCK &amp; METAL</span>
                        <span>1991</span>
                    </div>

                </article>


                <article className="record-card">

                    <div className="record-card-image">
                        <img
                            src="IMAGE_URL"
                            alt="Artist - Album"
                        />

                        <button className="add-btn">
                            +
                        </button>
                    </div>

                    <div className="record-card-info">

                        <div>
                            <h2>Album</h2>
                            <p>Artist</p>
                        </div>

                        <span>39€</span>

                    </div>

                    <div className="record-card-meta">
                        <span>POP</span>
                        <span>2024</span>
                    </div>

                </article>


                <article className="record-card">

                    <div className="record-card-image">
                        <img
                            src="IMAGE_URL"
                            alt="Artist - Album"
                        />

                        <button className="add-btn">
                            +
                        </button>
                    </div>

                    <div className="record-card-info">

                        <div>
                            <h2>Album</h2>
                            <p>Artist</p>
                        </div>

                        <span>35€</span>

                    </div>

                    <div className="record-card-meta">
                        <span>JAZZ &amp; SOUL</span>
                        <span>2023</span>
                    </div>

                </article>


                <article className="record-card">

                    <div className="record-card-image">
                        <img
                            src="IMAGE_URL"
                            alt="Artist - Album"
                        />

                        <button className="add-btn">
                            +
                        </button>
                    </div>

                    <div className="record-card-info">

                        <div>
                            <h2>Album</h2>
                            <p>Artist</p>
                        </div>

                        <span>42€</span>

                    </div>

                    <div className="record-card-meta">
                        <span>CLASSICAL</span>
                        <span>2022</span>
                    </div>

                </article>

            </section>


            <div className="load-more">
                LOAD MORE
            </div>

        </div>
    );
}