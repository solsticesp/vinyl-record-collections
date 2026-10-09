
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { fetchRecords } from "../utils/fetchRecords";
import RecordCard from "../components/records/RecordCard";

export default function CollectionRecords() {
    const { categoryId } = useParams();
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRecords()
            .then((data) => {
                const filteredRecords = data.filter(
                    (record) =>
                        record.category_id === Number(categoryId)
                );

                setRecords(filteredRecords);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [categoryId]);

    if (loading) {
        return <p>Loading records...</p>;
    }

    return (
        <section className="category-records">
            <Link to="/collections">← All collections</Link>

            <h1>{records[0]?.categories?.name || "Collection"}</h1>

            {records.length === 0 ? (
                <p>No records found in this collection.</p>
            ) : (
                <div className="records-grid">
                    {records.map((record) => (
                        <RecordCard
                            key={record.id}
                            id={record.id}
                            artist={record.artist}
                            title={record.title}
                            imageUrl={record.cover_url}
                            price={record.price}
                            category={record.categories?.name}
                            year={record.release_year}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}