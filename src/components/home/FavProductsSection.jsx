import records from "../../data/records";
import RecordCard from "../records/RecordCard";

export default function FavProductsSection() {

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
                {records.map(record => (
                    <RecordCard
                        key={record.id}
                        {...record}
                    />
                ))}
            </div>

            <div className="slider-controls">
                <button className="prev-btn">‹</button>
                <button className="next-btn">›</button>
            </div>

        </section>
    );
}