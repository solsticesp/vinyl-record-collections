export default function TopToolsSection() {

    return (
        <section className="top-tools">

            <div className="categories">
                <a href="#">Pop</a>
                <a href="#">Rock & Metal</a>
                <a href="#">Jazz & Soul</a>
                <a href="#">R&B & Hip-Hop</a>
                <a href="#">Classical</a>

            </div>

            <div className="search">
                <span>⌕</span>
                <input type="text" placeholder="" />
                <button>Search</button>
            </div>

        </section>
    );
}