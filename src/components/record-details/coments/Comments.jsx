import { useEffect, useState } from "react";
// import { restUrl, supabaseKey } from "../../../supabase";
import CreateComment from "./CreateComment";
import request from "../../../utils/request";

export default function Comments({ recordId }) {
    const [comments, setComments] = useState([]);
    const [commentsLoading, setCommentsLoading] = useState(true);

    useEffect(() => {
        request(
            `/comments?record_id=eq.${recordId}&select=id,text,created_at,user_id&order=created_at.desc`
        )
            .then(setComments)
            .catch((error) => console.error(error))
            .finally(() => setCommentsLoading(false));
    }, [recordId]);


    const handleCommentCreated = (newComment) => {
        setComments((previous) => [newComment, ...previous]);
    };

    return (
        <div className="comments-section">
            <span className="eyebrow">COMMENTS</span>

            <CreateComment
                recordId={recordId}
                onCommentCreated={handleCommentCreated}
            />

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
                                <span>
                                    {comment.email || "Listener"}
                                </span>
                                <time>
                                    {new Date(comment.created_at).toLocaleDateString()}
                                </time>
                            </div>

                            <p>{comment.text}</p>
                        </article>
                    ))
                )}
            </div>
        </div>
    );
}