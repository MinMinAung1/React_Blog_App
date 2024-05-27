import { createContext,useState } from "react";

export const FavoriteContext = createContext({
    favorites: [],
    totalFavorite :0,
    addFavorite:(Post) => {},
    removeFavorite: (postId) => {},
    isFavorite: (postId) => {}
})

export function FavoriteContextProvider(props) {
    const [userFavorites,setUserFavorites] = useState([])

    function addFavorite(post) {
        setUserFavorites((previousFavorite) => {
            return previousFavorite.concat(post)
        })
    }

    function removeFavorite(postId) {
        setUserFavorites((previousFavorite) => {
            return previousFavorite.filter((post) => post.id !== postId)
        })
    }

    function isFavorite(postId) {
        return userFavorites.some((post) => post.id === postId)//you can use some or find. some function is return true if your pridicate is true. find function is return true on your predicate.
    }

    const context = {
        favorites: userFavorites,
        totalFavorite : userFavorites.length,
        addFavorite,
        removeFavorite,
        isFavorite
    }
    
    return (
        <FavoriteContext.Provider value={context}>
            {props.children}
        </FavoriteContext.Provider>
    )
}