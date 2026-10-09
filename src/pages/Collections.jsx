
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { fetchCategories } from "../utils/fetchCategories";
import Spinner from "../components/layout/Spinner";

export default function Collections() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchCategories()
            .then((data) => {
                setCategories(data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <section className="collections">
            <h1>Collections</h1>

            {loading ? (
                <Spinner />
            ) : (
                <div className="collections-grid">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            to={`/collections/${category.id}`}
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