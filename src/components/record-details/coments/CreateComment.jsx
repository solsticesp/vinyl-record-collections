import { useContext, useState } from "react";
import { restUrl, supabaseKey } from "../../../supabase";
import AuthContext from "../../../contexts/auth-context";

export default function CreateComment({
    recordId,
    onCommentCreated,
}) {
    const { isAuthenticated, accessToken, user } =
        useContext(AuthContext);

    const [newComment, setNewComment] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const submitCommentHandler = async (event) => {
        event.preventDefault();

        const content = newComment.trim();

        if (!content || !accessToken || !user?.id) return;

        setSubmitting(true);

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
                    record_id: recordId,
                    user_id: user.id,
                    content,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to post comment.");
            }

            const createdComments = await response.json();
            const createdComment = createdComments[0];

            if (createdComment) {
                onCommentCreated(createdComment);
            }

            setNewComment("");
        } catch (error) {
            console.error(error);
        } finally {
            setSubmitting(false);
        }
    };

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
                    Log in to share your thoughts about this record.
                </p>
            )}

        </>
    );
}