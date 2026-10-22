import { useEffect, useState } from "react";
import { Link } from "react-router";
import request from "../../../utils/request";

export default function TopToolsSection({
    onLoaded
}) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        request("/categories")
            .then(setCategories)
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

            {/* <div className="search">
                <span>⌕</span>
                <input type="text" placeholder="" />
                <button>Search</button>
            </div> */}
        </section>
    );
}