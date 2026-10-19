import RecordCard from "../record-card/RecordCard";
import Spinner from "../shared/Spinner";
import { useContext, useEffect, useState } from "react";
// import request from "../../utils/request";
import { recordApi } from "../../api";
import AuthContext from "../../contexts/auth-context";

export default function Records() {
    const { accessToken } = useContext(AuthContext);
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     request("/records")
    //         .then(setRecords)
    //         .catch(err => console.error(err))
    //         .finally(() => setLoading(false))
    // }, []);

    useEffect(() => {
        recordApi.getAll(accessToken)
            .then(setRecords)
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, [accessToken]);


    return (
        <div className="page records-page">

            <section className="catalog-header">
                <div>
                    <span className="eyebrow">THE COLLECTION</span>

                    <div className="section-heading">
                        <h1>
                            ALL<br />
                            RECORDS<sup>(120)</sup>
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

            {loading ? (
                <Spinner />
            ) : (
                < section className="record-grid">

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
                    ))
                    }
                </section>
            )}


            <div className="load-more">
                LOAD MORE
            </div>

        </div >
    );
}