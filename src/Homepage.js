import './index.css';
import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {

    const {data : blogs,pending,error} = useFetch('http://localhost:8000/posts');

    return ( 
        <div className = "home">
            {error && <div>{error}</div>}
            {pending && <p>Loading...</p>}
            {blogs && <BlogList blogs = {blogs} title = "All Blogs" />}
        </div>
     );
}
 
export default Home;
// npx json-server --watch data/db.json --port 8000