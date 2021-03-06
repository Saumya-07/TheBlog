import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('saumya');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author};

        setIsPending(true);

        fetch('https://my-json-server.typicode.com/Saumya-07/mockjson/blogs/', {
            method: 'POST',
            headers: { "Content-type": 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New blog added');
            setIsPending(false);
            history.push('/');
        })
        
    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required 
                    value= { title }
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    required 
                    value= { body }
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog author:</label>
                <select 
                    value={ author }
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="saumya">Saumya</option>
                    <option value="vatsal">Vatsal</option>
                    <option value="satya">Satya</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding Blog...</button> }                
            </form>
        </div>
    );      
}

export default Create;