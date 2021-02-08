import {useRouter} from "next/router";
import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const APP_ID = '602142837fe6b0f78b2c17ea'

const Post = () => {
    const router = useRouter()
    const {postId} = router.query
    const [post,setPost] = useState(null)
    const [comment,setComment] = useState([])
    const fetch = async () => {
        if(postId){
            const response = await axios.get(`${baseURL}/post/${postId}`, 
            { headers: 
                { 'app-id': APP_ID } 
            })
            const comment = await axios.get(`${baseURL}/post/${postId}/comment`,
             { headers: 
                { 'app-id': APP_ID } 
            })
            setPost(response.data)
            setComment(comment.data.data)
            console.log(response.data)
            console.log(comment.data.data)
        }
    }
    useEffect(fetch,[postId])
    return (
        <>
            {post !== null ? (
                <div>
                    <p></p>
                    <button><Link href='http://localhost:3000/'>Home</Link></button>
        <button><Link href='\gallery'>Gallery</Link></button>
        <button><Link href='\contact'>Contact</Link></button>
        <button><Link href='\gpa'>Gpa Calculator</Link></button>
        <button><Link href='\post'>Post</Link></button>
                <hr/>
                    <h1>Post : {post.text}</h1>
                    <h2>tags : {[...post.tags].toString()}</h2>
                    <img src = {post.image} width = {500} height = {500}></img>
                    <p>{post.owner.firstName} {post.owner.lastName}</p>
                    <p>Likes : {post.likes}</p>
                    <h3>Comments</h3>
                    <ul>
                    {comment.map((comm) => {    
                       return <li>{comm.owner.firstName} {comm.owner.lastName} : {comm.message}</li>
                    })}
                    </ul>
                    <div >
                        <button><Link href="/post">Back</Link></button>
                    </div>
                    
                </div>
            ):null}
        </>
    )
}

export  default  Post