import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { restUrl, supabaseKey } from "../../supabase";
import AuthContext from "../../contexts/auth-context";

export default function RecordDetails() {
    const { id } = useParams();
    const [currentRecord, setCurrentRecord] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [commentsLoading, setCommentsLoading] = useState(true);
    const [commentError, setCommentError] = useState("");
    const { isAuthenticated, accessToken, user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`${restUrl}/records?id=eq.${id}&select=*,categories(id,name)`, {
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


    useEffect(() => {

        fetch(
            `${restUrl}/comments?record_id=eq.${id}&select=id,content,created_at,user_id&order=created_at.desc`,
            {
                headers: {
                    apikey: supabaseKey,
                },
            }
        )
            .then(async (res) => {
                if (!res.ok) throw new Error("Failed to load comments.");
                return res.json();
            })
            .then(setComments)
            .catch((error) => {
                console.error(error);
                setCommentError("Could not load comments.");
            })
            .finally(() => setCommentsLoading(false));
    }, [id]);


    const submitCommentHandler = async (event) => {
        event.preventDefault();

        const content = newComment.trim();

        if (!content || !accessToken || !user?.id) return;

        setCommentError("");

        try {
            const response = await fetch(`${restUrl}/comments`, {
                method: "POST",
                headers: {
                    apikey: supabaseKey,
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                    Prefer: "return=representation",
                },
                body: JSON.stringify({
                    record_id: id,
                    user_id: user.id,
                    content,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to post comment.");
            }

            const createdComments = await response.json();

            setComments((previous) => [...createdComments, ...previous]);
            setNewComment("");
        } catch (error) {
            console.error(error);
            setCommentError("Could not post your comment. Please try again.");
        }
    };

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

                    {isAuthenticated && (
                        <div className="record-actions">
                            <button className="add-to-favorites">
                                Add to Favorites
                            </button>

                            {/* <button className="add-to-cart">
                            Add to Collection
                        </button> */}
                        </div>
                    )}

                </div>
            </section>

            {/* <section className="tracklist-section">
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
            </section> */}

            <section className="record-bottom">
                <div className="comments-section">
                    <span className="eyebrow">COMMENTS</span>

                    {isAuthenticated && (
                        <form
                            className="comment-form"
                            onSubmit={submitCommentHandler}
                        >
                            <textarea
                                value={newComment}
                                onChange={(event) => setNewComment(event.target.value)}
                                placeholder="Share your thoughts about this record..."
                                rows={3}
                                maxLength={1000}
                                required
                            />

                            <button type="submit" disabled={!newComment.trim()}>
                                POST COMMENT
                            </button>
                        </form>
                    )}

                    {!isAuthenticated && (
                        <p className="comments-login-note">
                            Log in to share your thoughts about this record.
                        </p>
                    )}

                    {commentError && (
                        <p className="comment-error">{commentError}</p>
                    )}

                    <div className="comments-list">
                        {commentsLoading ? (
                            <p className="comments-empty">Loading comments...</p>
                        ) : comments.length === 0 ? (
                            <p className="comments-empty">
                                No comments yet. Be the first to share your thoughts.
                            </p>
                        ) : (
                            comments.map((comment) => (
                                <article className="comment" key={comment.id}>
                                    <div className="comment-meta">
                                        <span>LISTENER</span>
                                        <time>
                                            {new Date(comment.created_at).toLocaleDateString()}
                                        </time>
                                    </div>

                                    <p>{comment.content}</p>
                                </article>
                            ))
                        )}
                    </div>
                </div>

                <div className="tracklist-section">
                    <span className="eyebrow">TRACKLIST</span>

                    <div className="tracklist">
                        {currentRecord.tracklist?.map((track, index) => (
                            <div className="track" key={index}>
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                <span>{track.title}</span>
                                <span>{track.duration}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}