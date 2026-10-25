
import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router";
import RecordCard from "../record-card/RecordCard";
import Spinner from "../shared/Spinner";
import request from "../../utils/request";
import ErrorDisclaimer from "../error/ErrorDisclaimer";

export default function CollectionRecords() {
    const { categoryId } = useParams();
    const { state } = useLocation();
    const categoryName = state?.categoryName;

    const [error, setError] = useState(null);
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        request("/records")
            .then((data) => {
                const filteredRecords = data.filter(
                    (record) =>
                        record.category_id === Number(categoryId)
                );

                setRecords(filteredRecords);
            })
            .catch((error) => setError(error.apiResponse.msg))
            .finally(() => setLoading(false));
    }, [categoryId]);

    return (
        <>

            <section className="category-records">
                <Link to="/collections">← All collections</Link>

                <div className="catalog-header">
                    <h1>{categoryName || records[0]?.categories?.name}</h1>
                </div>

                {loading ? (
                    <Spinner />
                ) : (
                    records.length === 0 ? (
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
                    )
                )}
            </section>

            {error && <ErrorDisclaimer errorText={error} />}
        </>
    );
}