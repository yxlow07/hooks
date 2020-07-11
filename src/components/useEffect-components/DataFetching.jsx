import React, { useState, useEffect } from 'react'
import axios from  'axios'
import 'bootstrap/dist/css/bootstrap.css'


function DataFetching() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idBtnClick, setIdBtnClick] = useState(1)
    const handleClick = () => {
        setIdBtnClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idBtnClick])

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button type="button" className="btn btn-outline-warning m-2" onClick={handleClick}>Fetch Post</button>
            <div> {post.title} </div>
            {/* {<ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>} */}
        </div>
    )
}

export default DataFetching
