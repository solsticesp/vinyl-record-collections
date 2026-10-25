import { useContext, useState } from "react";
import AuthContext from "../../../contexts/auth-context";
import { create } from "../../../api/comment-api";
import { Link } from "react-router";
import ErrorModal from "../../error/ErrorModal";

export default function CreateComment({
    recordId,
    onCommentCreated,
}) {
    const { isAuthenticated, accessToken, user } = useContext(AuthContext);
    const [newComment, setNewComment] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const submitCommentHandler = async (event) => {
        event.preventDefault();

        const text = newComment.trim();

        if (!text || !accessToken || !user?.id) return;

        setSubmitting(true);

        try {
            const createdComments = await create(
                {
                    record_id: recordId,
                    user_id: user.id,
                    text,
                },
                accessToken
            );

            const createdComment = createdComments?.[0];

            if (createdComment) {
                onCommentCreated({
                    ...createdComment,
                    email: user.email,
                });
            }

            setNewComment("");
        } catch (error) {
            setError(error.apiResponse.msg);
        } finally {
            setSubmitting(false);
        }
    };

    const closeErrorModalHadler = () => {
        setError(null);
    }

    return (
        <>
            {isAuthenticated ? (
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

                    <button
                        type="submit"
                        disabled={!newComment.trim() || submitting}
                    >
                        {submitting ? "POSTING..." : "POST COMMENT"}
                    </button>
                </form>
            ) : (
                <p className="comments-login-note">
                    <Link to="/login">Log in</Link> to share your thoughts about this record.
                </p>
            )}
            {error && <ErrorModal errorText={error} onClose={closeErrorModalHadler} />}
        </>
    );
}