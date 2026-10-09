
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { supabaseUrl, supabaseKey } from "../supabase";

export default function Collections() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch(
                    `${supabaseUrl}/categories?select=*`,
                    {
                        headers: {
                            apikey: supabaseKey,
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch categories");
                }

                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchCategories();
    }, []);

    return (
        <section className="collections">
            <h1>Collections</h1>

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
        </section>
    );
}