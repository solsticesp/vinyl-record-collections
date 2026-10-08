import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { supabaseUrl, supabaseKey } from "../supabase";

export default function RecordDetails() {
    const { id } = useParams();
    const [currentRecord, setCurrentRecord] = useState({});

    useEffect(() => {
        fetch(`${supabaseUrl}/records?id=eq.${id}&select=*,categories(id,name)`, {
            headers: {
                apikey: supabaseKey,
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCurrentRecord(data[0])
            })
            .catch(error => console.error(error))
    }, [id])

    console.log(currentRecord);

    if (!currentRecord) {
        return <p>Loading...</p>;
    }

    return (
        <div className="page record-page">
            <section className="record-detail">
                <div className="record-cover">
                    <img
                        src={currentRecord.cover_url}
                        alt={currentRecord.artist}
                    />
                </div>

                <div className="record-info">
                    <span className="eyebrow">
                        {currentRecord.categories?.name}
                    </span>

                    <h1>
                        {currentRecord.title}
                    </h1>

                    <p className="record-artist">
                        {currentRecord.artist}
                    </p>

                    <div className="record-price">
                        {currentRecord.price}€
                    </div>


                    <div className="record-description">
                        <p>
                            {currentRecord.description}
                        </p>
                    </div>

                    <div className="record-details">
                        <div className="record-detail-row">
                            <span>Release</span>
                            <span>{currentRecord.release_year}</span>
                        </div>

                        <div className="record-detail-row">
                            <span>Genre</span>
                            <span>
                                {currentRecord.categories?.name}
                            </span>
                        </div>

                        <div className="record-detail-row">
                            <span>Format</span>
                            <span>{currentRecord.format}</span>
                        </div>

                        <div className="record-detail-row">
                            <span>Condition</span>
                            <span>New</span>
                        </div>
                    </div>

                    <div className="record-actions">
                        <button className="add-to-favorites">
                            Add to Favorites
                        </button>

                        <button className="add-to-cart">
                            Add to Collection
                        </button>
                    </div>
                </div>
            </section>

            <section className="tracklist-section">
                <span className="eyebrow">
                    TRACKLIST
                </span>

                <div className="tracklist">
                    {currentRecord.tracklist?.map((track, index) => (
                        <div className="track" key={index}>
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            <span>{track.title}</span>
                            <span>{track.duration}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}