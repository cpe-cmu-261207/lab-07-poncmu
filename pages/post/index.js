import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const APP_ID = '602142837fe6b0f78b2c17ea'

const Posts = () => {
    const [posts,setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        const fetch = async() => {
            setLoading(true)
            const response = await axios.get(
                'https://dummyapi.io/data/api/post',
                {
                headers: {
                    'app-id' : '602142837fe6b0f78b2c17ea'
                }
            })
            console.log(response.data)
            setPosts(response.data.data)
            setLoading(false)
        }
        fetch()
    }, [])
    return (
        <>
        <p></p>
        <button><Link href='http://localhost:3000/'>Home</Link></button>
        <button><Link href='\gallery'>Gallery</Link></button>
        <button><Link href='\contact'>Contact</Link></button>
        <button><Link href='\gpa'>Gpa Calculator</Link></button>
        <button><Link href='\post'>Post</Link></button>
        <hr/>
            <h1>All Posts</h1>
            {loading && <p>Loading...</p>}
            {posts.map(post => 
            <div>
                <p>post : {post.text}</p>
                <p><img src = {post.image} width = {500} height = {500}/></p>
                <p>Likes : {post.likes}</p>
                <p><button><Link href = {'post/'+ post.id}>Go to this page</Link></button></p>
            </div>
            )}
        </>
    )
}

export default  Posts
