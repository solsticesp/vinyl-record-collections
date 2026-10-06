import FavProductsSectionItem from "./FavProductsSectionItem";

export default function FavProductsSection() {

    return (
        <section className="products-section">

            <div className="section-heading">
                <h2>
                    COMMUNITY<br />
                    FAVORITES
                    <sup>(50)</sup>
                </h2>

                <a href="#">See All</a>
            </div>

            <div className="product-grid">

                <FavProductsSectionItem
                    imageUrl="https://muzikercdn.com/uploads/products/14600/1460015/thumb_large_d_gallery_base_4b78cbb7.JPG"
                    artist="Nirvana"
                    albumTitle="Nevermind"
                    category="Rock & Metal"
                    price="29"
                />

                <FavProductsSectionItem
                    imageUrl="https://muzikercdn.com/uploads/products/29720/2972022/thumb_large_d_gallery_base_d3b1907b.jpg"
                    artist="Marilyn Manson"
                    albumTitle="One Assassination Under God - Chapter 2"
                    category="Rock & Metal"
                    price="39"
                />

                <FavProductsSectionItem
                    imageUrl="https://muzikercdn.com/uploads/products/3662/366235/thumb_large_d_gallery_base_c5ec49c4.jpg"
                    artist="Sade"
                    albumTitle="The Best of Sade"
                    category="Jazz & Soul"
                    price="30"
                />

                <FavProductsSectionItem
                    imageUrl="https://muzikercdn.com/uploads/products/18002/1800202/main_dc513bca.jpg"
                    artist="Lana Del Rey"
                    albumTitle="Born To Die"
                    category="Pop"
                    price="50"
                />

            </div>

            <div className="slider-controls">
                <button className="prev-btn">‹</button>
                <button className="next-btn">›</button>
            </div>

        </section>
    );
}