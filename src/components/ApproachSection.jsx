import ApproachSectionItem from "./ApproachSectionItem";

export default function ApproachSection() {

    return (
        <section className="approach">

            <div className="approach-heading">
                <h2>OUR APPROACH TO MUSIC</h2>

                <p>
                    We believe every record tells a story. Create your personal collection of vinyl you love,
                    <br />
                    discover new favorites, and keep everything that inspires you in one place. Build your
                    <br />
                    wishlist, share it with others, and let your next record
                    <br />
                    find you
                </p>
            </div>


            <div className="editorial-grid">

                <ApproachSectionItem imageUrl="https://muzikercdn.com/uploads/product_gallery/18085/1808530/main_f89549ee.jpg" artist="Linkin Park" position='one'/>
                <ApproachSectionItem imageUrl="https://muzikercdn.com/uploads/product_gallery/19923/1992339/main_c6197c87.jpg" artist="Taylor Swift" position='two'/>
                <ApproachSectionItem imageUrl="https://muzikercdn.com/uploads/product_gallery/20039/2003942/main_605e734d.jpg" artist="Led Zeppelin" position='three'/>
                <ApproachSectionItem imageUrl="https://muzikercdn.com/uploads/product_gallery/21213/2121326/main_d45477d0.jpg" artist="Olivia Dean" position='four'/>

            </div>

        </section>
    );
}