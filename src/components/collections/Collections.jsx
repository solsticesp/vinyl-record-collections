
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Spinner from "../shared/Spinner";
import request from "../../utils/request";
import ErrorDisclaimer from "../error/ErrorDisclaimer";

export default function Collections() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        request("/categories")
            .then(setCategories)
            .catch((error) => setError(error.apiResponse.msg))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <section className="collections">
                <div className="catalog-header">
                    <h1>Collections</h1>
                </div>

                {loading ? (
                    <Spinner />
                ) : (
                    <div className="collections-grid">
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                to={`/collections/${category.id}`}
                                state={{ categoryName: category.name }}
                                className="collection-card"
                            >
                                <h2>{category.name}</h2>
                                <span>Explore collection ↗</span>
                            </Link>
                        ))}
                    </div>
                )}
            </section>
            {error && <ErrorDisclaimer errorText={error} />}
        </>
    );
}