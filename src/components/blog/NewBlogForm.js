import Card from "../ui/Card";
import classes from './NewBlogForm.module.css'
import { useRef } from "react";

function NewBlogForm(props) {
    //we use uncontroll component
    const titleRef = useRef()
    const authorRef = useRef()
    const imageRef = useRef()
    const bodyRef = useRef()

    function submitHandler(event) {
        event.preventDefault()
        const title = titleRef.current.value//you can change value if as you
        const author = authorRef.current.value
        const image = imageRef.current.value
        const body = bodyRef.current.value

        const post = {
            title,// title : title, 
            author,
            image,
            body
        }//create object
       console.log(post)
        props.onCreate(post)
    }

    return(
       <Card>
        <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes.control}>
                <label htmlFor="title">Post Title</label>
                <input type="text" id="title" ref={titleRef} required/>
            </div>
            <div className={classes.control}>
                <label htmlFor="author">authorPost Author</label>
                <input type="text" id="author" ref={authorRef} required/>
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Post Image</label>
                <input type="rul" id="image" ref={imageRef} required/>
            </div>
            <div className={classes.control}>
                <label htmlFor="body">Post Body</label>
                <textarea rows='10' ref={bodyRef} required/>
            </div>
            <div className={classes.actions}>
                <button>Create</button>
            </div>
        </form>
       </Card>
    )
}

export default NewBlogForm