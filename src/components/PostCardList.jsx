import { useContext, useEffect } from "react"
import UserCard from "./Card"
import axios from "axios";
import PostCardContext from '../providers/PostProvider';



function PostCardLList() {
    const {posts, setPosts} = useContext(PostCardContext);
 
    return (
       
        (posts.length == 0) ? "loading" : (
            posts.map((post) =>
                <UserCard
                    key={post.id}
                    picture={post.image}
                    firstName={post.owner.firstName}
                    text={post.text}
                />)
        )
   
    )
}

export default PostCardLList