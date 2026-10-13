import SaveListItem from "../save-list-item/SaveListItem";

export default function SaveList() {
    return (
        <div className="page saved-page">

            <section className="catalog-header">
                <div>
                    <span className="eyebrow">
                        YOUR COLLECTION
                    </span>

                    <h1>
                        FAVOURITES
                    </h1>
                </div>

                <p className="catalog-intro">
                    Records you've marked as favorites. Your personal selection of albums you love.
                </p>
            </section>

            <section className="saved-list">
                <div className="saved-list-header">
                    <span>RECORDS</span>
                    <span>ACTION</span>
                </div>

                <SaveListItem imageUrl="https://muzikercdn.com/uploads/products/14600/1460015/thumb_large_d_gallery_base_4b78cbb7.JPG" artist='Nirvana' title='Nevermind'/>
                <SaveListItem imageUrl="https://muzikercdn.com/uploads/products/14600/1460015/thumb_large_d_gallery_base_4b78cbb7.JPG" artist='Nirvana' title='Nevermind'/>
                <SaveListItem imageUrl="https://muzikercdn.com/uploads/products/14600/1460015/thumb_large_d_gallery_base_4b78cbb7.JPG" artist='Nirvana' title='Nevermind'/>
                <SaveListItem imageUrl="https://muzikercdn.com/uploads/products/14600/1460015/thumb_large_d_gallery_base_4b78cbb7.JPG" artist='Nirvana' title='Nevermind'/>
            </section>

        </div>
    );
}