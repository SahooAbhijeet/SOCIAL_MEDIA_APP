import { useEffect, useState } from "react"
import UserCard from "./Card"
import axios from "axios";



function PostCardLList() {
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        getUserPosts();
    }, [userPosts]);

    async function getUserPosts() {
        try {
            const response = await axios.get("https://dummyapi.io/data/v1/post", { headers: { "app-id": import.meta.env.VITE_APP_ID } });
            const json = await response.data;
            setUserPosts([...json.data]);
            console.log(import.meta.env.VITE_APP_ID)
            console.log(json.data);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    return (
        (userPosts.length == 0) ? "loading" :
            userPosts.map((post) =>
                <UserCard
                    key={post.id}
                    picture={post.image}
                    firstName={post.owner.firstName}
                    text={post.text}
                />)
    )
}

export default PostCardLList