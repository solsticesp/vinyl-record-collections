import RecordCard from "../components/records/RecordCard";
// import records from "../data/records";
import { useEffect, useState } from "react";
import { supabaseUrl, supabaseKey } from "../supabase";

export default function Records() {

    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch(`${supabaseUrl}/records?select=*,categories(id,name)`, {
            headers: {
                apikey: supabaseKey,
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRecords(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="page records-page">

            <section className="catalog-header">
                <div>
                    <span className="eyebrow">THE COLLECTION</span>

                    <div className="section-heading">
                        <h1>
                            ALL<br />
                            RECORDS<sup>(120) </sup>
                        </h1>
                    </div>

                </div>

                <p className="catalog-intro">
                    Explore our complete collection of vinyl records,
                    from timeless classics to new releases.
                </p>
            </section>


            <div className="catalog-toolbar">

                <div className="catalog-count">
                    {records.length} RECORDS
                </div>

                <div className="catalog-actions">
                    <select>
                        <option>ALL GENRES</option>
                        <option>ROCK</option>
                        <option>JAZZ</option>
                        <option>POP</option>
                        <option>SOUL</option>
                        <option>ELECTRONIC</option>
                    </select>

                    <select>
                        <option>FEATURED</option>
                        <option>NEWEST</option>
                        <option>PRICE: LOW TO HIGH</option>
                        <option>PRICE: HIGH TO LOW</option>
                        <option>ARTIST A–Z</option>
                    </select>

                </div>

            </div>

            <section className="record-grid">
                {records.map(record => (
                    <RecordCard
                        key={record.id}
                        id={record.id}
                        title={record.title}
                        artist={record.artist}
                        price={record.price}
                        category={record.categories?.name}
                        year={record.release_year}
                        imageUrl={record.cover_url}
                    />
                ))}
            </section>


            <div className="load-more">
                LOAD MORE
            </div>

        </div>
    );
}