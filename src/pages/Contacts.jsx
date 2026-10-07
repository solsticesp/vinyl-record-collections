export default function Contacts() {
    return (
        <div className="page contact-page">

            <section className="contact-header">
                <div className="contact-heading">
                    <span className="eyebrow">GET IN TOUCH</span>

                    <h1>
                        LET'S<br />
                        TALK
                    </h1>
                </div>

                <div className="contact-intro">
                    <p>
                        Have a question about a record, your order,
                        or our collection? We'd love to hear from you.
                    </p>

                    <div className="contact-details">
                        <div>
                            <span>EMAIL</span>
                            <a href="mailto:hello@vinylstore.com">
                                hello@vinylstore.com
                            </a>
                        </div>

                        <div>
                            <span>PHONE</span>
                            <a href="tel:+359000000000">
                                +359 00 000 0000
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            <section className="contact-main">

                <div className="contact-section-label">
                    <span>01</span>
                    <span>MESSAGE</span>
                </div>

                <form className="contact-form">

                    <div className="contact-form-row">

                        <div className="form-group">
                            <label htmlFor="contactName">
                                NAME
                            </label>

                            <input
                                id="contactName"
                                type="text"
                                placeholder="Your name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contactEmail">
                                EMAIL
                            </label>

                            <input
                                id="contactEmail"
                                type="email"
                                placeholder="your@email.com"
                            />
                        </div>

                    </div>


                    <div className="form-group">
                        <label htmlFor="contactSubject">
                            SUBJECT
                        </label>

                        <input
                            id="contactSubject"
                            type="text"
                            placeholder="What can we help you with?"
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="contactMessage">
                            MESSAGE
                        </label>

                        <textarea
                            id="contactMessage"
                            rows="7"
                            placeholder="Write your message..."
                        />
                    </div>


                    <button
                        type="submit"
                        className="contact-submit"
                    >
                        SEND MESSAGE
                    </button>

                </form>

            </section>


            <section className="contact-bottom">

                <div>
                    <span className="eyebrow">VISIT US</span>

                    <p>
                        12 Music Street<br />
                        Veliko Tarnovo, Bulgaria
                    </p>
                </div>

                <div>
                    <span className="eyebrow">OPENING HOURS</span>

                    <p>
                        Monday – Friday<br />
                        10:00 – 18:00
                    </p>
                </div>

                <div>
                    <span className="eyebrow">FOLLOW</span>

                    <a href="#">
                        Instagram
                    </a>
                </div>

            </section>

        </div>
    );
}