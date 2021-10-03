import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('Shivam');
    const [pending,setPending] = useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body , author};
        setPending(true);
        
        fetch('http://localhost:8000/posts',{
            method : 'POST',
            headers : {"Content-Type": "application/json"},
            body : JSON.stringify(blog)
        }).then(() => {
            setPending(false)
            // history.go(-1);
            history.push('/');//to go back to home page
        })
    }

    return (
        <div className="create">
            <h1>Add a New Blog</h1>
            <br />
            <br />
            <form onSubmit = {handleSubmit}>
                <label>Blog Title</label>
                <input type="text" required 
                    value = {title}
                    onChange = { (e) => setTitle(e.target.value)}
                />

                <label>Body</label>
                <textarea type="text" required 
                    value = {body}
                    onChange = {(e) => setBody(e.target.value)}
                />

                <label>Blog Author : </label>
                <select
                    value = {author}
                    onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value="Shivam">Shivam</option>
                    <option value="Samresh">Samresh</option>
                </select>
                {!pending && <button>Add Blog</button>}
                {pending && <button>Loading...</button>}

            </form>
        </div>

      );
}
 
export default Create;

