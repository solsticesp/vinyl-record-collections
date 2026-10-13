export default function ApproachSectionItem({
    imageUrl,
    artist,
    position,
}) {
    return (
        <div className={`editorial-image image-${position}`}>
            <img
                src={imageUrl}
                alt={artist}
            />
        </div>
    );
}