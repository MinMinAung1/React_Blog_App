import { useContext } from "react"
import { FavoriteContext } from "../store/favoriteContext"
import PostList from "../components/blog/PostList"

function FavoriteBlogPosts() {

    const favoriteContext = useContext(FavoriteContext)

    let content = ''

    if(favoriteContext.totalFavorite === 0){
        content = <p>Not Any Favorite Post Yet.Try to add some</p>
    }else{
        content = <PostList posts={favoriteContext.favorites}/>
    }

    return(
        <section>
            <h1>Favorite Posts :</h1>
           {content}
        </section>
    )
}

export default FavoriteBlogPosts