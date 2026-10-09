import { useEffect, useState } from "react";
import { fetchCategories } from "../../utils/fetchCategories";
import { Link } from "react-router";

export default function TopToolsSection({
    onLoaded
}) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories()
            .then(data => setCategories(data))
            .catch(error => alert('Error fetching categories: ' + error))
            .finally(() => {
                onLoaded();
            });
    }, [onLoaded])

    return (
        <section className="top-tools">
            <div className="categories">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        to={`/collections/${category.id}`}
                    >
                        {category.name}
                    </Link>
                ))}
            </div>

            <div className="search">
                <span>⌕</span>
                <input type="text" placeholder="" />
                <button>Search</button>
            </div>
        </section>
    );
}