export default function SaveList() {
    return (
        <div className="page saved-page">

            <section className="catalog-header">
                <div>
                    <span className="eyebrow">
                        YOUR COLLECTION
                    </span>

                    <h1>
                        WISHLIST
                        {/* {isWishlist ? "WISHLIST" : "FAVOURITES"} */}
                    </h1>
                </div>

                <p className="catalog-intro">
                    Records you've saved for later. Keep track of the albums you want to add to your collection.
                    {/* {isWishlist
                        ? "Records you've saved for later. Keep track of the albums you want to add to your collection."
                        : "Records you've marked as favorites. Your personal selection of albums you love."
                    } */}
                </p>
            </section>

            <section className="saved-list">

                <div className="saved-list-header">
                    <span>RECORD</span>
                    <span>ACTION</span>
                </div>


                <article className="saved-record">

                    <div className="saved-record-info">

                        <div className="saved-record-image">
                            <img
                                src="IMAGE_URL"
                                alt="Nirvana - Nevermind"
                            />
                        </div>

                        <div className="saved-record-details">
                            <span className="saved-record-artist">
                                Nirvana
                            </span>

                            <h3>
                                Nevermind
                            </h3>
                        </div>

                    </div>

                    <button className="delete-btn">
                        ×
                    </button>

                </article>


                <article className="saved-record">

                    <div className="saved-record-info">

                        <div className="saved-record-image">
                            <img
                                src="IMAGE_URL"
                                alt="Artist - Album"
                            />
                        </div>

                        <div className="saved-record-details">
                            <span className="saved-record-artist">
                                Artist
                            </span>

                            <h3>
                                Album
                            </h3>
                        </div>

                    </div>

                    <button className="delete-btn">
                        ×
                    </button>

                </article>

            </section>

        </div>
    );
}