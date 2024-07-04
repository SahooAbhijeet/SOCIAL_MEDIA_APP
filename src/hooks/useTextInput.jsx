import React, { useContext, useEffect, useState } from 'react'
import PostCardContext from '../providers/PostProvider';
import axios from 'axios';

const useTextInput = () => {

    const [userInput, setUserInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const { posts, setPosts } = useContext(PostCardContext);
    useEffect(() => {
        createUserPost();
    }, []);

    async function createUserPost() {

        setLoading(true);
        const response = await axios.post("https://dummyapi.io/data/v1/post/create",
            {
                owner: "60d0fe4f5311236168a109d5",
                text: userInput,
                image: imageUrl,
                likes: 0,
                publishDate: new Date()
            },
            {
                headers: {
                    "app-id": import.meta.env.VITE_APP_ID
                }
            }
        );
        const json = await response.data;
        console.log(json);
        setLoading(false);
        setUserInput("");
        setImageUrl("");
        setPosts([response.data, ...posts]);
    }

    return {
        setUserInput,
        setImageUrl,
        createUserPost,
        imageUrl,
        userInput,
        loading,
    };
}

export default useTextInput