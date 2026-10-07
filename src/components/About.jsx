export default function About() {
    return (
        <>
            <div className="page about-page">

                {/* INTRO */}

                <section className="about-hero">

                    <div className="about-hero-heading">
                        <span className="eyebrow">ABOUT THE COLLECTION</span>

                        <h1>
                            MUSIC<br />
                            SHOULD BE<br />
                            <span>KEPT.</span>
                        </h1>
                    </div>

                    <div className="about-hero-text">
                        <p>
                            We believe vinyl is more than a format.
                            It is a way of experiencing music, collecting
                            memories and keeping something physical
                            in an increasingly digital world.
                        </p>
                    </div>

                </section>


                {/* STORY */}

                <section className="about-story">

                    <div className="about-section-label">
                        <span>01</span>
                        <span>OUR STORY</span>
                    </div>

                    <div className="about-story-content">

                        <h2>
                            A COLLECTION<br />
                            BUILT AROUND<br />
                            MUSIC.
                        </h2>

                        <div className="about-story-text">

                            <p>
                                Our collection brings together records
                                from different decades, genres and places.
                                From iconic albums to discoveries waiting
                                to be heard.
                            </p>

                            <p>
                                We created this space for people who enjoy
                                taking their time with music — browsing,
                                discovering and finding records that deserve
                                a place on the shelf.
                            </p>

                        </div>

                    </div>

                </section>


                {/* IMAGE */}

                <section className="about-image">
                    <img
                        src="IMAGE_URL"
                        alt="Vinyl records collection"
                    />
                </section>


                {/* VALUES */}

                <section className="about-values">

                    <div className="about-section-label">
                        <span>02</span>
                        <span>WHAT WE VALUE</span>
                    </div>

                    <div className="values-grid">

                        <article className="value-item">
                            <span className="value-number">01</span>

                            <h3>DISCOVERY</h3>

                            <p>
                                Music should always leave room for
                                something unexpected. Our collection
                                is made for discovering new artists,
                                albums and sounds.
                            </p>
                        </article>


                        <article className="value-item">
                            <span className="value-number">02</span>

                            <h3>QUALITY</h3>

                            <p>
                                Every record deserves attention.
                                We focus on carefully selected titles
                                and quality editions worth keeping.
                            </p>
                        </article>


                        <article className="value-item">
                            <span className="value-number">03</span>

                            <h3>CONNECTION</h3>

                            <p>
                                Records create a connection between
                                music and the people who listen to it.
                                They become part of personal stories.
                            </p>
                        </article>

                    </div>

                </section>


                {/* COLLECTION STATEMENT */}

                <section className="about-statement">

                    <span className="eyebrow">THE COLLECTION</span>

                    <h2>
                        FIND SOMETHING<br />
                        WORTH KEEPING.
                    </h2>

                    <a href="#" className="about-link">
                        EXPLORE RECORDS →
                    </a>

                </section>


                {/* FOOTER NOTE */}

                <section className="about-footer-note">

                    <p>
                        Curated records. Timeless music.
                        A collection made to be listened to.
                    </p>

                </section>

            </div>

        </>

    );
}