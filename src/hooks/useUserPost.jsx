import axios from 'axios';
import { useEffect, useState } from 'react'

const useUserPost = () => {
    
    const [posts, setPosts] = useState([]);
    console.log(posts);

    useEffect(() => {
        getUserPosts();
    }, []);

    async function getUserPosts() {
        try {
            const response = await axios.get("https://dummyapi.io/data/v1/post", { headers: { "app-id": import.meta.env.VITE_APP_ID } });
            const json = await response.data;
            setPosts([...json.data]);
            console.log(import.meta.env.VITE_APP_ID)
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    return { posts, setPosts };
}

export default useUserPost