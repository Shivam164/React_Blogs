import { Link } from "react-router-dom";

const BlogList = (prop) => {
     const blogs = prop.blogs;
    return ( 
        <div className="BlogList">
            <h1>{prop.title}</h1>
            {blogs.map((blog) => (
                <div className = "body-preview" key = {blog.id}>
                    <Link to = {`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written By {blog.author}</p>
                    </Link>
                    
                    <br></br>
                    <br></br>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;