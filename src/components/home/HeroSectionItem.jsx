export default function HeroSectionItem({ imageUrl, artist }) {
    return (
        <div className="hero-image">
            <img
                src={imageUrl}
                alt={artist}
            />
        </div>
    );
}