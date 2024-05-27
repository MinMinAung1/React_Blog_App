import { useNavigate } from "react-router-dom"
import NewBlogForm from "../components/blog/NewBlogForm"


function NewBlogPost() {

    const navigate  =useNavigate()

    function onCreate(post) {
        //fetch is a function of pureJS
        fetch('https://testing-app-7b5f4-default-rtdb.asia-southeast1.firebasedatabase.app/blog.json',{
            method : 'POST',
            body : JSON.stringify(post),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then((response) => {
            if(response.status === 200){
                console.log(response.json())
                navigate('/')
            }else{
                console.log('post creation is failed!')
            }
        })
    }
    
    return(
        <section>
            <h1>Create New Blog</h1>
            <NewBlogForm onCreate={onCreate}/>
        </section>
    )
}

export default NewBlogPost