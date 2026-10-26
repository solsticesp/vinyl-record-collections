import { useEffect, useState } from "react";
import RecordCard from "../../record-card/RecordCard";
import request from "../../../utils/request";
import { favoritesApi } from "../../../api";

export default function FavProductsSection() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const favourites = await favoritesApi.getCommunityFavorites();
                console.log(favourites);


                const counts = favourites.reduce((acc, favourite) => {
                    const recordId = favourite.record_id;

                    if (acc[recordId]) {
                        acc[recordId] += 1;
                    } else {
                        acc[recordId] = 1;
                    }

                    return acc;
                }, {});

                const allRecords = await request("/records");

                const topRecords = allRecords
                    .filter(record => counts[record.id])
                    .map(record => ({
                        ...record,
                        favorites_count: counts[record.id],
                    }))
                    .sort((a, b) => b.favorites_count - a.favorites_count)
                    .slice(0, 4);

                setRecords(topRecords);
            } catch (error) {
                console.error("Failed to load community favorites:", error);
            }
        };

        fetchFavorites();
    }, []);

    return (
        <section className="products-section">

            <div className="section-heading">
                <h2>
                    COMMUNITY<br />
                    FAVORITES
                    <sup>(4)</sup>
                </h2>

                <a href="#">See All</a>
            </div>

            <div className="product-grid">
                {records.map(record => (
                    <RecordCard
                        key={record.id}
                        {...record}
                        imageUrl={record.cover_url}
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