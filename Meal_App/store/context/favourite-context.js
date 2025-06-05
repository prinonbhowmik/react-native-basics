import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { }
});

function FavoritesContextProvider({ children }) {
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    function addFavorite(id) {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
    }

    function removeFavorite(id) {
        setFavoriteMealIds((currentFavIds) =>
            currentFavIds.filter((mealId) => mealId != id)
        );
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    };

    return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
}

export default FavoritesContextProvider;