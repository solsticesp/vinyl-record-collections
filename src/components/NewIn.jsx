export default function NewIn() {
    return (
        <div className="page new-in-page">

            {/* PAGE HEADER */}
            <section className="catalog-header">
                <div>
                    <span className="eyebrow">LATEST ARRIVALS</span>
                    <h1>NEW IN</h1>
                </div>

                <p className="catalog-intro">
                    Discover the latest records added to our collection,
                    from timeless classics to new releases.
                </p>
            </section>


            {/* FILTER / SORT BAR */}
            <div className="catalog-toolbar">

                <div className="catalog-count">
                    24 RECORDS
                </div>

                <div className="catalog-actions">

                    <select>
                        <option>ALL GENRES</option>
                        <option>ROCK</option>
                        <option>JAZZ</option>
                        <option>POP</option>
                        <option>SOUL</option>
                        <option>ELECTRONIC</option>
                    </select>

                    <select>
                        <option>NEWEST</option>
                        <option>PRICE: LOW TO HIGH</option>
                        <option>PRICE: HIGH TO LOW</option>
                        <option>A–Z</option>
                    </select>

                </div>
            </div>


            {/* RECORD GRID */}
            <section className="record-grid">

                <article className="record-card">
                    <div className="record-card-image">
                        <img
                            src="https://muzikercdn.com/uploads/products/14600/1460015/thumb_large_d_gallery_base_4b78cbb7.JPG"
                            alt="Record title"
                        />

                        <button className="record-favorite">
                            ♡
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
                        <span>ROCK</span>
                        <span>1991</span>
                    </div>
                </article>


                <article className="record-card">
                    <div className="record-card-image">
                        <img
                            src="IMAGE_URL"
                            alt="Record title"
                        />

                        <button className="record-favorite">
                            ♡
                        </button>
                    </div>

                    <div className="record-card-info">
                        <div>
                            <h2>Kind of Blue</h2>
                            <p>Miles Davis</p>
                        </div>

                        <span>32€</span>
                    </div>

                    <div className="record-card-meta">
                        <span>JAZZ</span>
                        <span>1959</span>
                    </div>
                </article>


                <article className="record-card">
                    <div className="record-card-image">
                        <img
                            src="IMAGE_URL"
                            alt="Record title"
                        />

                        <button className="record-favorite">
                            ♡
                        </button>
                    </div>

                    <div className="record-card-info">
                        <div>
                            <h2>Discovery</h2>
                            <p>Daft Punk</p>
                        </div>

                        <span>27€</span>
                    </div>

                    <div className="record-card-meta">
                        <span>ELECTRONIC</span>
                        <span>2001</span>
                    </div>
                </article>


                <article className="record-card">
                    <div className="record-card-image">
                        <img
                            src="IMAGE_URL"
                            alt="Record title"
                        />

                        <button className="record-favorite">
                            ♡
                        </button>
                    </div>

                    <div className="record-card-info">
                        <div>
                            <h2>Rumours</h2>
                            <p>Fleetwood Mac</p>
                        </div>

                        <span>30€</span>
                    </div>

                    <div className="record-card-meta">
                        <span>ROCK</span>
                        <span>1977</span>
                    </div>
                </article>

            </section>

        </div>
    );
}