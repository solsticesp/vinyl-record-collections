import { Link } from "react-router";
import HeroSectionItem from "./HeroSectionItem";
import { useEffect, useState } from "react";
import request from "../../../utils/request";


export default function HeroSection() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        const fetchLatestRecords = async () => {
            try {
                const latestRecords = await request(
                    "/records?select=*&order=created_at.desc&limit=3"
                );

                setRecords(latestRecords);
            } catch (error) {
                console.error("Failed to load latest records:", error);
            }
        };

        fetchLatestRecords();
    }, []);

    return (
        <section className="hero">

            <div className="hero-copy">
                <h1>
                    FRESH<br />
                    RECORDS
                </h1>

                <p>
                    Autumn<br />
                    '26
                </p>

                <Link to="/records" className="browse-btn">
                    <span>Browse All Records</span>
                    <span className="arrow">⟶</span>
                </Link>
            </div>

            <div className="hero-images">
                {records.map(record => (
                    <HeroSectionItem
                        key={record.id}
                        imageUrl={record.cover_url}
                        artist={record.artist}
                    />
                ))}
            </div>

            <div className="hero-controls">
                <button className="prev-btn">‹</button>
                <button className="next-btn">›</button>
            </div>

        </section>
    );
}