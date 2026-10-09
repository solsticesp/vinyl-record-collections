
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { fetchRecords } from "../utils/fetchRecords";

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
                        <article key={record.id} className="record-card">
                            <img
                                src={record.cover_url}
                                alt={`${record.artist} - ${record.title}`}
                            />
                            <h2>{record.title}</h2>
                            <p>{record.artist}</p>
                            <p>{record.price} €</p>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}