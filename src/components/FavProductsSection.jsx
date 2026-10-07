import RecordCard from "./RecordCard";

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
                <RecordCard
                    imageUrl="https://muzikercdn.com/uploads/products/14600/1460015/thumb_large_d_gallery_base_4b78cbb7.JPG"
                    artist='Nirvana'
                    title='Nevermind'
                    price='39'
                    category='Rock & Metal'
                    year='1991'
                />

                <RecordCard
                    imageUrl="https://muzikercdn.com/uploads/products/29720/2972022/thumb_large_d_gallery_base_d3b1907b.jpg"
                    artist='Marilyn Manson'
                    title='One Assassination Under God - Chapter 2'
                    price='39'
                    category='Rock & Metal'
                    year='2026'
                />

                <RecordCard
                    imageUrl="https://muzikercdn.com/uploads/products/3662/366235/thumb_large_d_gallery_base_c5ec49c4.jpg"
                    artist='Sade'
                    title='The Best of Sade'
                    price='30'
                    category='Jazz & Soul'
                    year='1994'
                />

                <RecordCard
                    imageUrl="https://muzikercdn.com/uploads/products/18002/1800202/main_dc513bca.jpg"
                    artist='Lana Del Rey'
                    title='Born To Die'
                    price='50'
                    category='Pop'
                    year='2012'
                />
            </div>

            <div className="slider-controls">
                <button className="prev-btn">‹</button>
                <button className="next-btn">›</button>
            </div>

        </section>
    );
}