import { useParams } from "react-router";
import records from "../data/records";

export default function RecordDetails() {
    const { id } = useParams();
    let currentRecord = {};

    for (const record of records) {
        if (record.id === Number(id)) {
            currentRecord = record;
        }
    }

    console.log(currentRecord);
    
    return (
        <div className="page record-page">

            <section className="record-detail">

                <div className="record-cover">
                    <img
                        src={currentRecord.imageUrl}
                        alt={currentRecord.artist}
                    />
                </div>

                <div className="record-info">

                    <span className="eyebrow">
                        {currentRecord.category}
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
                            Nirvana's iconic second studio album,
                            featuring some of the most influential
                            tracks of the 1990s.
                        </p>
                    </div>

                    <div className="record-details">

                        <div className="record-detail-row">
                            <span>Release</span>
                            <span>1991</span>
                        </div>

                        <div className="record-detail-row">
                            <span>Genre</span>
                            <span>Rock</span>
                        </div>

                        <div className="record-detail-row">
                            <span>Label</span>
                            <span>DGC Records</span>
                        </div>

                        <div className="record-detail-row">
                            <span>Format</span>
                            <span>Vinyl, LP</span>
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

                    <div className="track">
                        <span>01</span>
                        <span>Smells Like Teen Spirit</span>
                        <span>5:01</span>
                    </div>

                    <div className="track">
                        <span>02</span>
                        <span>In Bloom</span>
                        <span>4:15</span>
                    </div>

                    <div className="track">
                        <span>03</span>
                        <span>Come as You Are</span>
                        <span>3:39</span>
                    </div>

                    <div className="track">
                        <span>04</span>
                        <span>Breed</span>
                        <span>3:03</span>
                    </div>

                    <div className="track">
                        <span>05</span>
                        <span>Lithium</span>
                        <span>4:17</span>
                    </div>

                </div>

            </section>

        </div>
    );
}