import { useContext, useEffect, useState } from "react";
import CreateComment from "./CreateComment";
import request from "../../../utils/request";
import AuthContext from "../../../contexts/auth-context";
import { remove } from "../../../api/comment-api";
import ErrorDisclaimer from "../../error/ErrorDisclaimer";
import ErrorModal from "../../error/ErrorModal";

export default function Comments({ recordId }) {
    const [comments, setComments] = useState([]);
    const [commentsLoading, setCommentsLoading] = useState(true);
    const { isAuthenticated, accessToken, user } = useContext(AuthContext);
    const [inlineError, setInlineError] = useState(null);
    const [modalError, setModalError] = useState(null);


    useEffect(() => {
        request(
            `/comments?record_id=eq.${recordId}&select=id,text,created_at,user_id&order=created_at.desc`
        )
            .then(setComments)
            .catch((error) => setInlineError(error.apiResponse.msg))
            .finally(() => setCommentsLoading(false));
    }, [recordId]);


    const handleCommentCreated = (newComment) => {
        setComments((previous) => [newComment, ...previous]);
    };

    const handleDeleteComment = async (commentId) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this comment?"
        );

        if (!confirmed || !accessToken) return;

        try {
            await remove(commentId, accessToken);

            setComments((previous) =>
                previous.filter((comment) => comment.id !== commentId)
            );
        } catch (error) {
            setModalError(error.apiResponse.msg);
        }
    };

    const closeErrorModalHadler = () => {
        setModalError(null);
    }

    return (
        <>
            <div className="comments-section">
                <span className="eyebrow">COMMENTS</span>

                <CreateComment
                    recordId={recordId}
                    onCommentCreated={handleCommentCreated}
                />

                {inlineError
                    ? <ErrorDisclaimer errorText={inlineError} />
                    : (
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

                                            {isAuthenticated &&
                                                user?.id === comment.user_id && (
                                                    <button
                                                        type="button"
                                                        className="delete-comment-btn"
                                                        onClick={() =>
                                                            handleDeleteComment(comment.id)
                                                        }
                                                        aria-label="Delete your comment"
                                                        title="Delete comment"
                                                    >
                                                        ×
                                                    </button>
                                                )}
                                        </div>

                                        <p>{comment.text}</p>
                                    </article>
                                ))
                            )}
                        </div>
                    )
                }

            </div>
            {modalError && <ErrorModal errorText={modalError} onClose={closeErrorModalHadler} />}
        </>
    );
}