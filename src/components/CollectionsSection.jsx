export default function CollectionsSection() {

    return (
        <section className="collections">

            <div className="collection-heading">
                <h2>
                    XIV<br />
                    COLLECTIONS<br />
                    <span>23-24</span>
                </h2>

                <div className="collection-tools">
                    <button>Filter(+) </button>
                    <button>Sort(+) </button>
                </div>
            </div>

            <div className="tabs">
                <a className="active" href="#">(ALL)</a>
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Kid</a>
            </div>


            <div className="collection-grid">

                <article className="collection-product">
                    <div className="collection-image">
                        <img
                            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=85"
                            alt="Heavyweight t-shirt"
                        />
                        <button>+</button>
                    </div>

                    <div className="product-meta">
                        <small>Cotton T Shirt</small>
                        <span>$199</span>
                    </div>

                    <h3>Basic Heavyweight T-Shirt</h3>
                </article>


                <article className="collection-product">
                    <div className="collection-image">
                        <img
                            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85"
                            alt="Jogger pants"
                        />
                        <button>+</button>
                    </div>

                    <div className="product-meta">
                        <small>Cotton Jogger</small>
                        <span>$199</span>
                    </div>

                    <h3>Soft Wash Straight Fit Jeans</h3>
                </article>


                <article className="collection-product">
                    <div className="collection-image">
                        <img
                            src="https://images.unsplash.com/photo-1627225924765-552d49cf47ad?auto=format&fit=crop&w=800&q=85"
                            alt="Cream t-shirt"
                        />
                        <button>+</button>
                    </div>

                    <div className="product-meta">
                        <small>Cotton T Shirt</small>
                        <span>$199</span>
                    </div>

                    <h3>Basic Heavyweight T-Shirt</h3>
                </article>

            </div>

            <div className="load-more">
                <span>More</span>
                <b>⌄</b>
            </div>

        </section>
    );
}