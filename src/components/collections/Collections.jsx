
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Spinner from "../shared/Spinner";
import request from "../../utils/request";

export default function Collections() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        request("/categories")
            .then(setCategories)
            .catch((error) => {
                console.error(error);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
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
    );
}