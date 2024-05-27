import Card from "../ui/Card";
import classes from "./Post.module.css";
import { useContext } from "react";
import { FavoriteContext } from "../../store/favoriteContext";

function Post(props) {
   const favoriteContext = useContext(FavoriteContext)
   const favorite = favoriteContext.isFavorite(props.id)

   function FavoriteHandler() {
    if(favorite){
      favoriteContext.removeFavorite(props.id)
    }else{
      favoriteContext.addFavorite({
        id:props.id,
        title:props.title,
        author:props.author,
        image:props.image,
        body:props.body
      })
    }
   }

  return (
    <Card>
    <li>
      <article className={classes.post}>
        <div className={classes.image}>
          <img src={props.image} alt="post iamge"/>
        </div>
        <div className={classes.content}>
          <h2>{props.title}</h2>
          <p>{props.body}</p>
          <p>{props.author}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={FavoriteHandler}>{favorite ? 'Remove From Favorite' : 'Add To Favorite'}</button>
        </div>
      </article>
    </li>
    </Card>
  );
}

export default Post;
