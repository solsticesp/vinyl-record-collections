import SaveListItem from "../save-list-item/SaveListItem";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/auth-context";
import { favoritesApi, recordApi } from "../../api";
import Spinner from "../shared/Spinner";

export default function SaveList() {
    const { user, accessToken } = useContext(AuthContext);
    const [favList, setFavList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) return;

        const fetchFavorites = async () => {
            try {
                const favorites = await favoritesApi.getAll(user.id, accessToken);

                const records = await Promise.all(
                    favorites.map(favorite =>
                        recordApi.getRecord(favorite.record_id)
                    )
                );

                setFavList([].concat(...records));
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchFavorites();
    }, [user, accessToken]);

    const removeFavoriteHandler = async (recordId) => {
        try {
            await favoritesApi.remove(recordId, user.id, accessToken);

            setFavList(prevFavList =>
                prevFavList.filter(record => record.id !== recordId)
            );
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            {loading
                ? (<Spinner />)
                : (
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

                            {favList.map(item => <SaveListItem key={item.id} id={item.id} imageUrl={item.cover_url} artist={item.artist} title={item.title} onRemove={() => removeFavoriteHandler(item.id)} />)}
                        </section>
                    </div>
                )
            }
        </>

    );
}
