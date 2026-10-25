import RecordCard from "../record-card/RecordCard";
import Spinner from "../shared/Spinner";
import { useEffect, useState, useMemo } from "react";
import request from "../../utils/request";
import ErrorDisclaimer from "../error/ErrorDisclaimer";


export default function Records() {
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState("featured");
    const [error, setError] = useState(null);


    useEffect(() => {
        request("/records")
            .then(setRecords)
            .catch(error => setError(error.apiResponse.msg))
            .finally(() => setLoading(false))
    }, []);

    const sortedRecords = useMemo(() => {
        const sorted = [...records];

        switch (sortBy) {
            case "newest":
                return sorted.sort(
                    (a, b) => new Date(b.created_at) - new Date(a.created_at)
                );

            case "price-asc":
                return sorted.sort(
                    (a, b) => Number(a.price) - Number(b.price)
                );

            case "price-desc":
                return sorted.sort(
                    (a, b) => Number(b.price) - Number(a.price)
                );

            case "artist-asc":
                return sorted.sort((a, b) =>
                    (a.artist ?? "").localeCompare(b.artist ?? "")
                );

            case "featured":
            default:
                return sorted;
        }
    }, [records, sortBy]);


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
                    {records.length} RECORDS
                </div>

                <div className="catalog-actions">
                    <select
                        value={sortBy}
                        onChange={(event) => setSortBy(event.target.value)}
                        aria-label="Sort records"
                    >
                        <option value="featured">FEATURED</option>
                        <option value="newest">NEWEST</option>
                        <option value="price-asc">PRICE: LOW TO HIGH</option>
                        <option value="price-desc">PRICE: HIGH TO LOW</option>
                        <option value="artist-asc">ARTIST A–Z</option>
                    </select>
                </div>
            </div>

            {loading ? (
                <Spinner />
            ) : (
                <section className="record-grid">
                    {sortedRecords.map((record) => (
                        <RecordCard
                            key={record.id}
                            id={record.id}
                            title={record.title}
                            artist={record.artist}
                            price={record.price}
                            category={record.categories?.name}
                            year={record.release_year}
                            imageUrl={record.cover_url}
                        />
                    ))}
                </section>
            )}

            {/* <div className="load-more">
                LOAD MORE
            </div> */}
            {error && <ErrorDisclaimer errorText={error} />}
        </div >
    );
}