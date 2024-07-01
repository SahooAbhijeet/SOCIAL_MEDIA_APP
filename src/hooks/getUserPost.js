import axios from "axios";
import { useEffect, useState } from "react";



async function getUserPosts() {
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        getUserPosts();
    }, []);
    try {
        const response = await axios.get("https://dummyapi.io/data/v1/tag/water/post", { headers: { "app-id": "6675cb8c49d463d1fc0060ef" } });
        const json = await response.data;
        setUserPosts([...json.data]);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default getUserPosts;