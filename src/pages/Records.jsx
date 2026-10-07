import RecordCard from "../components/records/RecordCard";
import records from "../data/records";

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
                        <option>ALL GENRES</option>
                        <option>ROCK</option>
                        <option>JAZZ</option>
                        <option>POP</option>
                        <option>SOUL</option>
                        <option>ELECTRONIC</option>
                    </select>

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
                {records.map(record => (
                    <RecordCard
                        key={record.id}
                        {...record}
                    />
                ))}
            </section>


            <div className="load-more">
                LOAD MORE
            </div>

        </div>
    );
}