import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useHistory } from "react-router";

const BlogDetails = () => {
    const {id} = useParams();
    const {data : blog, error , pending} = useFetch("http://localhost:8000/posts/" + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/posts/' + id, {
            method : 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {pending && <p>Loading...</p>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <br/>
                    <p>Written By : {blog.author}</p>
                    <br/>
                    <div>{blog.body}</div>
                    <button onClick = {handleClick}>Delete</button>
                </article>
                )}
        </div>
     );
}
 
export default BlogDetails;
